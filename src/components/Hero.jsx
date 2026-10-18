import heroImage from '../assets/hero.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex h-svh min-h-[640px] max-h-[900px] w-full items-center bg-aura-navy text-white"
      aria-labelledby="hero-heading"
    >
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_center] sm:object-[57%_center] lg:object-[47%_center]"
        fetchPriority="high"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,22,38,0.9)_0%,rgba(8,27,48,0.72)_42%,rgba(9,30,54,0.28)_76%,rgba(9,30,54,0.18)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,22,38,0.86)_0%,rgba(8,27,48,0.65)_40%,rgba(9,30,54,0.2)_75%,rgba(9,30,54,0.12)_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 sm:px-8 md:pt-[100px] lg:px-10">
        <div className="max-w-[650px]">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.07em] sm:text-xs lg:mb-5 lg:text-[13px]">
            A new landmark in Ara Damansara
          </p>

          <h1
            id="hero-heading"
            className="font-serif text-[42px] leading-[0.98] font-normal tracking-[-0.025em] sm:text-[52px] lg:text-[64px]"
          >
            <span className="block">A Higher</span>
            <span className="block">Standard of Living</span>
          </h1>

          <p className="mt-6 max-w-[390px] text-[15px] leading-relaxed text-white/90 sm:text-base lg:mt-7 lg:text-[17px]">
            <span className="block">Modern residences. Thoughtful spaces.</span>
            <span className="block">A more connected tomorrow.</span>
          </p>

          <a
            href="#about"
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-white px-6 text-sm font-medium text-aura-navy transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-10"
          >
            Explore Development
            <svg
              viewBox="0 0 20 20"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12m-4-4 4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
