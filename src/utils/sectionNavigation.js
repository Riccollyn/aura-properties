const interruptionKeys = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
])

let cancelActiveScroll = null

const cubicBezierCoordinate = (time, firstPoint, secondPoint) => {
  const inverseTime = 1 - time
  return (
    3 * inverseTime * inverseTime * time * firstPoint +
    3 * inverseTime * time * time * secondPoint +
    time * time * time
  )
}

const cubicBezierDerivative = (time, firstPoint, secondPoint) =>
  3 * (1 - time) * (1 - time) * firstPoint +
  6 * (1 - time) * time * (secondPoint - firstPoint) +
  3 * time * time * (1 - secondPoint)

const premiumEasing = (progress) => {
  let curveTime = progress

  for (let iteration = 0; iteration < 5; iteration += 1) {
    const currentX = cubicBezierCoordinate(curveTime, 0.22, 0.36) - progress
    const derivative = cubicBezierDerivative(curveTime, 0.22, 0.36)

    if (Math.abs(derivative) < 0.0001) break
    curveTime -= currentX / derivative
  }

  return cubicBezierCoordinate(Math.min(Math.max(curveTime, 0), 1), 1, 1)
}

export function scrollToSection(sectionId, { duration = 1200 } = {}) {
  const destination = document.getElementById(sectionId)

  if (!destination) return () => {}

  cancelActiveScroll?.()

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const startPosition = window.scrollY
  const scrollMargin =
    sectionId === 'home'
      ? 0
      : Number.parseFloat(window.getComputedStyle(destination).scrollMarginTop) || 0
  const maximumPosition = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    0,
  )
  const destinationPosition = Math.min(
    Math.max(
      destination.getBoundingClientRect().top + startPosition - scrollMargin,
      0,
    ),
    maximumPosition,
  )

  if (prefersReducedMotion || Math.abs(destinationPosition - startPosition) < 1) {
    window.scrollTo({ top: destinationPosition, behavior: 'instant' })
    return () => {}
  }

  let animationFrameId
  let startTime
  let isFinished = false

  const removeInterruptionListeners = () => {
    window.removeEventListener('wheel', interruptScroll)
    window.removeEventListener('touchstart', interruptScroll)
    window.removeEventListener('pointerdown', interruptScroll)
    window.removeEventListener('keydown', interruptScroll)
  }

  const finishScroll = () => {
    if (isFinished) return
    isFinished = true
    removeInterruptionListeners()

    if (cancelActiveScroll === cancelScroll) cancelActiveScroll = null
  }

  function cancelScroll() {
    if (isFinished) return
    window.cancelAnimationFrame(animationFrameId)
    finishScroll()
  }

  function interruptScroll(event) {
    if (event.type === 'keydown' && !interruptionKeys.has(event.key)) return
    cancelScroll()
  }

  const animateScroll = (currentTime) => {
    if (startTime === undefined) startTime = currentTime

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = premiumEasing(progress)
    const nextPosition =
      startPosition + (destinationPosition - startPosition) * easedProgress

    window.scrollTo({ top: nextPosition, behavior: 'instant' })

    if (progress < 1) {
      animationFrameId = window.requestAnimationFrame(animateScroll)
    } else {
      finishScroll()
    }
  }

  window.addEventListener('wheel', interruptScroll, { passive: true })
  window.addEventListener('touchstart', interruptScroll, { passive: true })
  window.addEventListener('pointerdown', interruptScroll, { passive: true })
  window.addEventListener('keydown', interruptScroll)

  cancelActiveScroll = cancelScroll
  animationFrameId = window.requestAnimationFrame(animateScroll)

  return cancelScroll
}

export function navigateToSection(sectionId) {
  const destination = document.getElementById(sectionId)

  if (!destination) return () => {}

  const nextHash = `#${sectionId}`
  if (window.location.hash !== nextHash) {
    window.history.pushState(null, '', nextHash)
  }

  return scrollToSection(sectionId)
}
