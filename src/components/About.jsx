import { useRef, useState } from 'react'
import aboutVideo from '../assets/about-optimized.mp4'
import aboutPoster from '../assets/about-poster.jpg'
import { navigateToSection } from '../utils/sectionNavigation.js'
import Reveal from './Reveal.jsx'

const features = [
  {
    title: 'Prime Location',
    description: 'Well-connected to key destinations',
    icon: 'location',
  },
  {
    title: 'Modern Design',
    description: 'Thoughtful layouts and premium finishes',
    icon: 'building',
  },
  {
    title: 'Green Living',
    description: 'Lush landscapes and sustainable features',
    icon: 'leaf',
  },
]

function FeatureIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 32 32" className="size-9" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M25 13.5c0 7-9 15-9 15s-9-8-9-15a9 9 0 1 1 18 0Z" />
        <circle cx="16" cy="13.5" r="3.25" />
      </svg>
    )
  }

  if (type === 'building') {
    return (
      <svg viewBox="0 0 36 32" className="size-9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 29h30M7 29V9l11-5v25M18 12h11v17" />
        <path d="M11 11h3M11 16h3M11 21h3M22 16h3M22 21h3M12 29v-4h3M25 29v-4h2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 36 32" className="size-9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 28c2-8 7-12 15-13M11 24C7 15 13 6 29 3c1 15-6 23-18 21Z" />
      <path d="M20 15c4-1 7-4 9-8" />
    </svg>
  )
}

function About() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = async () => {
    try {
      await videoRef.current?.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <section id="about" className="scroll-mt-[70px] bg-white py-20 text-aura-navy sm:py-24 md:scroll-mt-[90px] lg:flex lg:min-h-[100dvh] lg:items-center lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-20">
          <Reveal duration={1500} className="max-w-[520px]">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[#9f7d50]">
              About AURA
            </p>
            <h2 id="about-heading" className="max-w-[480px] font-serif text-4xl leading-[1.06] font-normal tracking-[-0.02em] sm:text-[42px] lg:text-[40px] xl:text-5xl">
              <span className="block lg:whitespace-nowrap">More Than a Home,</span>
              <span className="block">A Lifestyle</span>
            </h2>
            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-slate-600 sm:text-base">
              AURA is a contemporary residential development designed for modern urban living, offering a perfect balance of comfort, convenience and natural beauty.
            </p>
            <a
              href="#residences"
              onClick={(event) => {
                event.preventDefault()
                navigateToSection('residences')
              }}
              className="mt-7 inline-flex min-h-12 items-center gap-3 border border-slate-400 px-5 text-sm font-medium transition-colors hover:border-aura-navy hover:bg-aura-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aura-navy"
            >
              View Residences
              <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12m-4-4 4 4-4 4" />
              </svg>
            </a>
          </Reveal>

          <Reveal
            delay={200}
            duration={1500}
            variant="fade"
            className="relative overflow-hidden rounded-lg bg-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.16)]"
          >
            <video
              ref={videoRef}
              className="aspect-video w-full rounded-lg object-cover"
              poster={aboutPoster}
              preload="none"
              playsInline
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
            >
              <source src={aboutVideo} type="video/mp4" />
              Your browser does not support the video element.
            </video>

            {!isPlaying && (
              <button
                type="button"
                className="absolute inset-0 flex size-full cursor-pointer items-center justify-center bg-black/10 transition-colors hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white"
                onClick={playVideo}
                aria-label="Play AURA Properties video"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-white/80 bg-white/90 text-aura-navy shadow-lg sm:size-20">
                  <svg viewBox="0 0 24 24" className="ml-1 size-7 sm:size-8" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.2v13.6L19 12 8 5.2Z" />
                  </svg>
                </span>
              </button>
            )}
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 border-t border-slate-200 pt-10 sm:grid-cols-3 sm:gap-0 lg:mt-20 lg:pt-12">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={`flex items-center gap-4 sm:px-6 lg:px-10 ${index > 0 ? 'sm:border-l sm:border-slate-300' : ''}`}
            >
              <span className="shrink-0 text-aura-navy">
                <FeatureIcon type={feature.icon} />
              </span>
              <span>
                <strong className="block text-sm font-semibold text-slate-950">{feature.title}</strong>
                <span className="mt-0.5 block text-xs leading-5 text-slate-600">{feature.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
