import { useState } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-6 md:h-[100px] md:gap-3 md:px-3 min-[840px]:gap-4 min-[840px]:px-4 min-[900px]:gap-5 min-[900px]:px-6 lg:gap-6 lg:px-10">
        <a
          href="#home"
          className="inline-flex shrink-0 flex-col leading-none"
          aria-label="AURA Properties home"
          onClick={closeMenu}
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
            {navigationItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative py-2 text-[13px] font-medium uppercase tracking-[0.03em] transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    index === 0
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
                className="block py-4 text-sm font-medium uppercase tracking-[0.05em] transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#register-interest"
              className="flex min-h-12 w-full items-center justify-center rounded-lg border border-white/80 px-5 text-sm font-medium uppercase tracking-[0.04em] transition-colors hover:bg-white hover:text-aura-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              onClick={closeMenu}
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
