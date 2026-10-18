import { useEffect, useRef, useState } from 'react'
import { navigateToSection } from '../utils/sectionNavigation.js'

const navigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'residences', label: 'Residences', href: '#residences' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'location', label: 'Location', href: '#location' },
]

const observedSections = [
  { id: 'home', navigationId: 'home' },
  { id: 'about', navigationId: 'about' },
  { id: 'residences', navigationId: 'residences' },
  { id: 'gallery', navigationId: 'gallery' },
  { id: 'location', navigationId: 'location' },
  { id: 'contact', navigationId: 'location' },
  { id: 'register-interest', navigationId: 'location' },
]

function Header() {
  const headerRef = useRef(null)
  const navigationLockRef = useRef(null)
  const navigationCancelRef = useRef(null)
  const scrollEndTimerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 60)
  const [activeNavigation, setActiveNavigation] = useState('home')
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavigationClick = (event, item) => {
    event.preventDefault()
    setActiveNavigation(item.navigationId ?? item.id)
    closeMenu()

    const destination = document.getElementById(item.id)
    navigationLockRef.current = destination ? item.id : null
    window.clearTimeout(scrollEndTimerRef.current)

    if (!destination) return

    navigationCancelRef.current = navigateToSection(item.id)
  }

  useEffect(() => {
    let observer
    let resizeFrame
    const visibleSections = new Map()

    const selectActiveSection = () => {
      if (navigationLockRef.current) return

      if (window.scrollY <= 1) {
        setActiveNavigation('home')
        return
      }

      const headerHeight = headerRef.current?.firstElementChild?.offsetHeight ?? 90
      const visibleEntries = [...visibleSections.values()].filter(
        (entry) => entry.isIntersecting,
      )

      if (visibleEntries.length === 0) return

      visibleEntries.sort(
        (firstEntry, secondEntry) =>
          Math.abs(firstEntry.boundingClientRect.top - headerHeight) -
          Math.abs(secondEntry.boundingClientRect.top - headerHeight),
      )

      const activeSection = observedSections.find(
        (section) => section.id === visibleEntries[0].target.id,
      )

      if (activeSection) setActiveNavigation(activeSection.navigationId)
    }

    const createObserver = () => {
      observer?.disconnect()
      visibleSections.clear()

      const headerHeight = headerRef.current?.firstElementChild?.offsetHeight ?? 90
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => visibleSections.set(entry.target.id, entry))
          selectActiveSection()
        },
        {
          rootMargin: `-${headerHeight}px 0px -45% 0px`,
          threshold: [0, 0.1, 0.25, 0.5, 0.75],
        },
      )

      observedSections.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section) observer.observe(section)
      })
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      const lockedNavigationId = navigationLockRef.current
      if (lockedNavigationId) {
        const destination = document.getElementById(lockedNavigationId)
        const headerHeight = headerRef.current?.firstElementChild?.offsetHeight ?? 90
        const destinationScrollMargin = destination
          ? Number.parseFloat(window.getComputedStyle(destination).scrollMarginTop) ||
            headerHeight
          : headerHeight
        const expectedTop =
          lockedNavigationId === 'home' ? 0 : destinationScrollMargin
        const destinationReached =
          destination &&
          (Math.abs(destination.getBoundingClientRect().top - expectedTop) <= 8 ||
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2)

        window.clearTimeout(scrollEndTimerRef.current)

        if (destinationReached) {
          navigationLockRef.current = null
        } else {
          scrollEndTimerRef.current = window.setTimeout(() => {
            navigationLockRef.current = null
            selectActiveSection()
          }, 180)
        }

        return
      }

      if (window.scrollY <= 1) setActiveNavigation('home')
    }

    const handleScrollInterruption = (event) => {
      if (!navigationLockRef.current) return

      if (
        event.type === 'keydown' &&
        !['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(
          event.key,
        )
      ) {
        return
      }

      navigationLockRef.current = null
      window.clearTimeout(scrollEndTimerRef.current)
      window.requestAnimationFrame(selectActiveSection)
    }

    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(createObserver)
    }

    createObserver()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    window.addEventListener('wheel', handleScrollInterruption, { passive: true })
    window.addEventListener('touchstart', handleScrollInterruption, { passive: true })
    window.addEventListener('keydown', handleScrollInterruption)

    return () => {
      observer?.disconnect()
      navigationCancelRef.current?.()
      window.cancelAnimationFrame(resizeFrame)
      window.clearTimeout(scrollEndTimerRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('wheel', handleScrollInterruption)
      window.removeEventListener('touchstart', handleScrollInterruption)
      window.removeEventListener('keydown', handleScrollInterruption)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none ${
        isScrolled
          ? 'border-white/10 bg-aura-navy/80 shadow-[0_8px_30px_rgba(3,12,24,0.16)] backdrop-blur-xl'
          : 'border-transparent bg-transparent shadow-none backdrop-blur-none'
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between gap-4 px-6 md:h-[90px] md:gap-3 md:px-3 min-[840px]:gap-4 min-[840px]:px-4 min-[900px]:gap-5 min-[900px]:px-6 lg:gap-6 lg:px-10">
        <a
          href="#home"
          className="inline-flex shrink-0 flex-col leading-none"
          aria-label="AURA Properties home"
          onClick={(event) => handleNavigationClick(event, navigationItems[0])}
        >
          <span className="text-[28px] font-light tracking-[0.07em]">
            AURA
          </span>
          <span className="mt-0.5 text-[10px] tracking-[0.08em]">
            PROPERTIES
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex flex-nowrap items-center gap-3 whitespace-nowrap min-[840px]:gap-5 min-[900px]:gap-7 lg:gap-10">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={activeNavigation === item.id ? 'page' : undefined}
                  onClick={(event) => handleNavigationClick(event, item)}
                  className={`relative py-2 text-[13px] font-medium uppercase tracking-[0.03em] transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    activeNavigation === item.id
                      ? 'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white'
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#register-interest"
          className="hidden min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-white/80 px-6 text-[13px] font-medium uppercase tracking-[0.03em] transition-colors hover:bg-white hover:text-aura-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex"
          onClick={(event) =>
            handleNavigationClick(event, {
              id: 'register-interest',
              navigationId: 'location',
            })
          }
        >
          Register Interest
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/60 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-white/15 bg-aura-navy/98 px-6 pb-7 pt-4 shadow-xl sm:px-8 md:hidden`}
      >
        <ul className="mx-auto max-w-[1280px]">
          {navigationItems.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <a
                href={item.href}
                aria-current={activeNavigation === item.id ? 'page' : undefined}
                className={`block py-4 text-sm font-medium uppercase tracking-[0.05em] transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${
                  activeNavigation === item.id ? 'underline decoration-1 underline-offset-8' : ''
                }`}
                onClick={(event) => handleNavigationClick(event, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#register-interest"
              className="flex min-h-12 w-full items-center justify-center rounded-lg border border-white/80 px-5 text-sm font-medium uppercase tracking-[0.04em] transition-colors hover:bg-white hover:text-aura-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              onClick={(event) =>
                handleNavigationClick(event, {
                  id: 'register-interest',
                  navigationId: 'location',
                })
              }
            >
              Register Interest
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
