import { useState } from 'react'
import { BedDouble, CarFront } from 'lucide-react'
import floorPlanA from '../assets/AURA_Floor_Plan_Type_A.png'
import floorPlanB from '../assets/AURA_Floor_Plan_Type_B.png'
import floorPlanC from '../assets/AURA_Floor_Plan_Type_C.png'
import floorPlanD from '../assets/AURA_Floor_Plan_Type_D.png'
import Reveal from './Reveal.jsx'

const residenceTypes = [
  {
    id: 'A',
    name: 'Type A',
    size: '650 sq ft',
    image: floorPlanA,
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
    },
  },
  {
    id: 'B',
    name: 'Type B',
    size: '850 sq ft',
    image: floorPlanB,
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
    },
  },
  {
    id: 'C',
    name: 'Type C',
    size: '1,050 sq ft',
    image: floorPlanC,
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
    },
  },
  {
    id: 'D',
    name: 'Type D',
    size: '1,250 sq ft',
    image: floorPlanD,
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
    },
  },
]

const specificationRows = [
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'bathrooms', label: 'Bathrooms' },
  { key: 'parking', label: 'Car Parks' },
]

function SpecificationIcon({ type }) {
  if (type === 'bedrooms') {
    return <BedDouble className="size-5" strokeWidth={1.5} aria-hidden="true" />
  }

  if (type === 'bathrooms') {
    return (
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Zm2 0V6a3 3 0 0 1 6 0" />
        <path strokeLinecap="round" d="M8 21v-2m8 2v-2" />
      </svg>
    )
  }

  return <CarFront className="size-5" strokeWidth={1.5} aria-hidden="true" />
}

function Residences() {
  const [activeTypeId, setActiveTypeId] = useState('A')
  const activeResidence = residenceTypes.find((residence) => residence.id === activeTypeId)

  return (
    <section
      id="residences"
      className="scroll-mt-[70px] bg-[#f4f4f1] py-16 text-aura-navy sm:py-20 md:scroll-mt-[90px] lg:flex lg:min-h-[100dvh] lg:items-center"
      aria-labelledby="residences-heading"
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 lg:px-10">
        <Reveal duration={1000} className="max-w-[430px]">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[#9f7d50]">
            Residences
          </p>
          <h2
            id="residences-heading"
            className="font-serif text-4xl leading-[1.06] font-normal tracking-[-0.02em] sm:text-5xl"
          >
            Layouts for
            <span className="block">Every Lifestyle</span>
          </h2>
          <p className="mt-6 max-w-[390px] text-[15px] leading-7 text-slate-600 sm:text-base">
            Discover thoughtfully designed residences with spacious layouts, modern finishes, and comfort for every lifestyle.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          duration={1000}
          className="overflow-hidden rounded-lg border border-[#cbc9c4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
        >
          <div className="grid grid-cols-4" role="tablist" aria-label="Residence floor plans">
            {residenceTypes.map((residence) => {
              const isActive = residence.id === activeTypeId

              return (
                <button
                  key={residence.id}
                  id={`residence-tab-${residence.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="residence-panel"
                  className={`min-w-0 border-b border-l border-[#cbc9c4] px-1 py-2.5 text-center transition-colors first:border-l-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-aura-navy sm:px-2 sm:py-3 ${
                    isActive
                      ? 'border-aura-navy bg-aura-navy text-white'
                      : 'bg-[#f8f8f6] text-aura-navy hover:bg-slate-100'
                  }`}
                  onClick={() => setActiveTypeId(residence.id)}
                >
                  <span className="block text-[13px] font-medium sm:text-base lg:text-lg">{residence.name}</span>
                  <span className={`mt-0.5 block whitespace-nowrap text-[9px] sm:text-[10px] lg:text-[11px] ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                    {residence.size}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id="residence-panel"
            role="tabpanel"
            aria-labelledby={`residence-tab-${activeResidence.id}`}
            className="grid items-center gap-6 p-5 sm:p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8 lg:p-7"
          >
            <Reveal
              duration={1100}
              variant="fade"
              className="flex min-w-0 items-center justify-center bg-[#fbfaf8] p-2 sm:p-3"
            >
              <img
                src={activeResidence.image}
                alt={`${activeResidence.name} floor plan`}
                className="max-h-[430px] w-full object-contain sm:max-h-[400px] md:max-h-[360px]"
              />
            </Reveal>

            <div className="md:pr-2">
              <h3 className="font-serif text-2xl font-normal tracking-[-0.02em] text-aura-navy lg:text-3xl">
                {activeResidence.name}
              </h3>
              <p className="mt-1 text-lg text-slate-500">{activeResidence.size}</p>
              <div className="mt-4 h-px w-full bg-[#cbc9c4]" />

              <dl className="mt-6 space-y-4 lg:space-y-5">
                {specificationRows.map((specification) => {
                  const value = activeResidence.specifications[specification.key]
                  const unit =
                    specification.key === 'parking' && value === 1
                      ? 'Car Park'
                      : specification.label

                  return (
                    <div key={specification.key} className="flex items-center gap-3 text-sm text-slate-800">
                      <dt className="sr-only">{specification.label}</dt>
                      <dd className="flex items-center gap-3" aria-label={`${specification.label}: ${value ?? 'Not specified'}`}>
                        <SpecificationIcon type={specification.key} />
                        <span>
                          {value ?? 'TBC'} {unit}
                        </span>
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Residences
