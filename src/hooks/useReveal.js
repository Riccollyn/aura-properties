import { useLayoutEffect, useRef } from 'react'

function useReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const elementRef = useRef(null)

  useLayoutEffect(() => {
    const element = elementRef.current
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (
      !element ||
      prefersReducedMotion ||
      !('IntersectionObserver' in window)
    ) {
      return undefined
    }

    element.classList.add('reveal-pending')

    const handleAnimationEnd = () => {
      element.classList.remove('reveal-pending')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        element.classList.add('is-revealed')
        observer.disconnect()
      },
      { rootMargin, threshold },
    )

    element.addEventListener('animationend', handleAnimationEnd, { once: true })
    observer.observe(element)

    return () => {
      observer.disconnect()
      element.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [rootMargin, threshold])

  return elementRef
}

export default useReveal
