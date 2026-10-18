import { navigateToSection } from '../utils/sectionNavigation.js'
import Reveal from './Reveal.jsx'

const footerNavigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="15" height="12" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 5 6.5 5 6.5-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.2 2.8 8.4 6 6.8 8c1 2 2.6 3.6 4.6 4.6l2-1.6 3.2 2.2-.7 3.1c-.2.7-.8 1.1-1.5 1.1A11.9 11.9 0 0 1 2.6 5.6c0-.7.4-1.3 1.1-1.5l2.5-.7Z"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="bg-[#151d26] text-white/70">
      <Reveal
        variant="fade"
        duration={700}
        className="mx-auto w-full max-w-[1280px] px-5 pt-10 pb-6 sm:px-8 md:pt-12 lg:px-12 lg:pt-14"
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:grid-cols-[minmax(250px,1fr)_auto_minmax(250px,1fr)] lg:items-center lg:gap-10">
          <div>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                navigateToSection('home')
              }}
              className="inline-flex flex-col text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9868]"
              aria-label="AURA Properties home"
            >
              <span className="font-serif text-[1.75rem] leading-none tracking-[0.15em]">
                AURA
              </span>
              <span className="mt-1 text-[0.58rem] leading-none tracking-[0.28em] text-[#bd9868]">
                PROPERTIES
              </span>
            </a>
            <p className="mt-3 max-w-[310px] text-xs leading-5 text-white/50 md:mt-5">
              Elevating everyday living through thoughtful design.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="md:col-span-2 md:row-start-2 md:justify-self-center lg:col-span-1 lg:col-start-2 lg:row-start-1"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:gap-y-3 lg:justify-center lg:gap-x-7">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault()
                      navigateToSection(item.href.slice(1))
                    }}
                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9868] motion-reduce:transition-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-start-2 md:row-start-1 md:justify-self-end lg:col-start-3">
            <h2 className="text-xs font-semibold tracking-[0.04em] text-white">
              Contact Us
            </h2>
            <address className="mt-3 space-y-2 text-xs not-italic md:mt-4">
              <a
                href="mailto:hello@auraproperties.com"
                className="flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9868] motion-reduce:transition-none"
              >
                <span className="text-[#bd9868]">
                  <EmailIcon />
                </span>
                hello@auraproperties.com
              </a>
              <a
                href="tel:+60312345678"
                className="flex items-center gap-2.5 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd9868] motion-reduce:transition-none"
              >
                <span className="text-[#bd9868]">
                  <PhoneIcon />
                </span>
                +60 3-1234 5678
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-5 text-[0.68rem] text-white/45 sm:flex-row sm:items-center sm:justify-between md:mt-10 md:gap-3">
          <p>&copy; 2026 AURA Properties. All rights reserved.</p>
          <span aria-label="Privacy Policy page is not yet available">
            Privacy Policy
          </span>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer
