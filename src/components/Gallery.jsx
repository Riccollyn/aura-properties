import { useRef, useState } from 'react'

import exteriorImageLarge from '../assets/gallery/exterior_1-1600.jpg'
import exteriorImageSmall from '../assets/gallery/exterior_1-800.jpg'
import facilitiesOneImageLarge from '../assets/gallery/facilities_1-1600.jpg'
import facilitiesOneImageSmall from '../assets/gallery/facilities_1-800.jpg'
import facilitiesTwoImageLarge from '../assets/gallery/facilities_2-1600.jpg'
import facilitiesTwoImageSmall from '../assets/gallery/facilities_2-800.jpg'
import gymImageLarge from '../assets/gallery/gym-1600.jpg'
import gymImageSmall from '../assets/gallery/gym-800.jpg'
import interiorImageLarge from '../assets/gallery/interior_1-1600.jpg'
import interiorImageSmall from '../assets/gallery/interior_1-800.jpg'
import restaurantImageLarge from '../assets/gallery/restaurant_1-1600.jpg'
import restaurantImageSmall from '../assets/gallery/restaurant_1-800.jpg'
import './Gallery.css'

const filters = ['All', 'Exterior', 'Interior', 'Facilities', 'Lifestyle']

const galleryImages = [
  {
    id: 'exterior-1',
    src: exteriorImageSmall,
    srcSet: `${exteriorImageSmall} 800w, ${exteriorImageLarge} 1600w`,
    category: 'Exterior',
    alt: 'AURA residences exterior with glass-fronted balconies',
  },
  {
    id: 'interior-1',
    src: interiorImageSmall,
    srcSet: `${interiorImageSmall} 800w, ${interiorImageLarge} 1600w`,
    category: 'Interior',
    alt: 'Contemporary AURA residence living and kitchen interior',
  },
  {
    id: 'facilities-1',
    src: facilitiesOneImageSmall,
    srcSet: `${facilitiesOneImageSmall} 800w, ${facilitiesOneImageLarge} 1600w`,
    category: 'Facilities',
    alt: 'Outdoor recreation area with oversized chess pieces',
  },
  {
    id: 'facilities-2',
    src: facilitiesTwoImageSmall,
    srcSet: `${facilitiesTwoImageSmall} 800w, ${facilitiesTwoImageLarge} 1600w`,
    category: 'Facilities',
    alt: 'AURA swimming pool overlooking the surrounding cityscape',
  },
  {
    id: 'gym',
    src: gymImageSmall,
    srcSet: `${gymImageSmall} 800w, ${gymImageLarge} 1600w`,
    category: 'Facilities',
    alt: 'Bright residents gym with modern fitness equipment',
  },
  {
    id: 'restaurant-1',
    src: restaurantImageSmall,
    srcSet: `${restaurantImageSmall} 800w, ${restaurantImageLarge} 1600w`,
    category: 'Lifestyle',
    alt: 'Modern restaurant and lounge with greenery',
  },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const galleryScrollRef = useRef(null)

  const visibleImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter)

  const selectFilter = (filter) => {
    galleryScrollRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setActiveFilter(filter)
  }

  return (
    <section
      id="gallery"
      className="gallery-section scroll-mt-20 bg-white py-16 sm:py-20 md:scroll-mt-[100px] lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="gallery-content mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="gallery-controls flex min-w-0 flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0 shrink-0">
            <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.18em] text-[#9f7d50] uppercase">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="font-serif text-[2.35rem] leading-[1.05] text-aura-navy sm:text-[2.75rem] lg:text-[3rem]"
            >
              A Closer Look
            </h2>
          </div>

          <div
            className="flex min-w-0 max-w-full flex-wrap gap-2 sm:gap-3 lg:justify-end"
            role="group"
            aria-label="Filter gallery by category"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  aria-label={`Show ${filter.toLowerCase()} gallery images`}
                  aria-pressed={isActive}
                  onClick={() => selectFilter(filter)}
                  className={`min-h-10 rounded-[3px] border px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aura-navy motion-reduce:transition-none sm:px-5 ${
                    isActive
                      ? 'border-aura-navy bg-aura-navy text-white'
                      : 'border-slate-200 bg-white text-aura-navy hover:border-slate-400'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleImages.length} {activeFilter.toLowerCase()} gallery
          {visibleImages.length === 1 ? ' image' : ' images'}.
        </p>

        <div
          ref={galleryScrollRef}
          className="gallery-scroll relative mt-8 w-full min-w-0 max-w-full"
          aria-label={`${activeFilter} property gallery`}
        >
          <div className="gallery-grid w-full min-w-0 max-w-full">
            {visibleImages.map((image, index) => (
              <figure
                key={image.id}
                className="gallery-card group min-w-0 max-w-full overflow-hidden rounded-lg bg-slate-100 shadow-sm"
              >
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className="gallery-image block w-full max-w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <figcaption className="sr-only">{image.category}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
