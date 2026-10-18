import { useState } from 'react'
import locationMap from '../assets/AURA Properties Kuala Lumpur Location Map.png'
import Reveal from './Reveal.jsx'

function Location() {
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmissionMessage(
      'Thank you. This is a demo form, so your details have not been sent.',
    )
  }

  return (
    <section
      id="location"
      className="scroll-mt-[70px] bg-[#172536] py-16 sm:py-20 md:scroll-mt-[98px] md:pt-28 md:pb-20 lg:flex lg:min-h-[100dvh] lg:items-center lg:pt-28 lg:pb-20"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto grid w-full max-w-[1280px] min-w-0 items-center gap-12 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] md:gap-8 lg:max-w-[1180px] lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-12 lg:px-10 xl:gap-14">
        <div className="min-w-0">
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.18em] text-[#bd9868] uppercase">
            Location
          </p>
          <Reveal
            as="h2"
            id="location-heading"
            duration={1000}
            className="font-serif text-[2.35rem] leading-[1.05] font-normal tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[2.625rem]"
          >
            Perfectly Connected
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            duration={1000}
            className="mt-4 max-w-[640px] text-sm leading-6 text-slate-300 sm:text-[15px]"
          >
            Positioned for convenient city living in Greater Kuala Lumpur,
            AURA offers a well-connected home base within the established Ara
            Damansara neighbourhood.
          </Reveal>

          <Reveal
            as="figure"
            delay={240}
            duration={1100}
            variant="fade"
            className="mt-6 min-w-0 overflow-hidden rounded-md bg-slate-100 shadow-[0_18px_45px_rgba(3,12,24,0.22)] sm:mt-7 lg:max-w-[590px]"
          >
            <img
              src={locationMap}
              alt="Map showing the location of AURA Properties in Ara Damansara within Greater Kuala Lumpur"
              className="block h-auto w-full max-w-full"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="sr-only">
              AURA Properties location map for Ara Damansara and surrounding
              areas.
            </figcaption>
          </Reveal>
        </div>

        <Reveal
          id="register-interest"
          delay={120}
          duration={1000}
          className="w-full scroll-mt-[86px] rounded-md bg-white p-6 text-aura-navy shadow-[0_20px_55px_rgba(3,12,24,0.24)] sm:p-8 md:max-w-[440px] md:scroll-mt-[98px] md:justify-self-end lg:p-8"
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-[#a88455] uppercase">
            Register Interest
          </p>
          <h3 className="mt-3 font-serif text-[1.9rem] leading-tight font-normal sm:text-[2.1rem]">
            Find Your Place at AURA
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Leave your details and our team will be in touch.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                required
                className="min-h-12 w-full rounded-[3px] border border-slate-200 px-4 text-sm text-aura-navy outline-none transition-colors placeholder:text-slate-400 focus:border-aura-navy focus:ring-1 focus:ring-aura-navy motion-reduce:transition-none lg:min-h-11"
              />
            </div>

            <div>
              <label htmlFor="contact-number" className="sr-only">
                Contact Number
              </label>
              <input
                id="contact-number"
                name="contactNumber"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Contact Number"
                required
                className="min-h-12 w-full rounded-[3px] border border-slate-200 px-4 text-sm text-aura-navy outline-none transition-colors placeholder:text-slate-400 focus:border-aura-navy focus:ring-1 focus:ring-aura-navy motion-reduce:transition-none lg:min-h-11"
              />
            </div>

            <div>
              <label htmlFor="enquiry-message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full resize-y rounded-[3px] border border-slate-200 px-4 py-3 text-sm text-aura-navy outline-none transition-colors placeholder:text-slate-400 focus:border-aura-navy focus:ring-1 focus:ring-aura-navy motion-reduce:transition-none lg:h-[104px]"
              />
            </div>

            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-aura-navy px-5 text-sm font-medium text-white transition-colors hover:bg-[#20364e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aura-navy motion-reduce:transition-none lg:min-h-11"
            >
              Submit Enquiry <span aria-hidden="true">&rarr;</span>
            </button>

            {submissionMessage && (
              <p className="text-center text-xs leading-5 text-slate-600" role="status">
                {submissionMessage}
              </p>
            )}

            <p className="text-center text-[0.68rem] leading-5 text-slate-400">
              By submitting, you acknowledge our Privacy Policy.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Location
