import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Nicholas Bianchini',
    quote: 'Enkela has been tutoring both of our daughters for the past three years, and she has become a part of our family and not just their math tutor. The success she has helped both of them attain over the course of the past few years is outstanding! We are so grateful to have Enkela in our girls\'s lives and feel that the impact that she has made on their futures is priceless. Her professionalism and willingness to work with her clients and adapt to their schedules and needs, show her passion for every child she tutors, long-term success.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Genevive Flores',
    quote: 'Enkela has been the greatest, most amazing math tutor I have ever had the privilege to work with. She has been such a light at the end of the tunnel for myself as a student, and my family. Always providing the upmost support and education to me. I\'m so grateful to have met her and be assisted with her services, I can\'t thank, and recommend her enough!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Hadara Chasky',
    quote: 'My sister and I have been tutored by Enkela for the past 4 years, and I couldn\'t be more grateful for what an outstanding teacher she is! She is so engaging and makes learning such a fun experience, and challenges me, I am able to test my limits within every class, and I always leave with so much new knowledge about mathematics! I cannot recommend her enough, she is an absolute pleasure to work with!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Elajdo Bacelli',
    quote: 'Highly Recommended Math Teacher. Thanks to her, math has become much easier and more enjoyable.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kristel',
    quote: 'I have been taking math lessons with Enkela for the past three years, from Grade 10 through DP2, and she has been an incredible teacher and mentor throughout my IB journey. Since I study Math AA HL, which is a very challenging course, having her support made a huge difference for me. Enkela explains difficult concepts in a clear and patient way, always making sure I truly understand the material instead of just memorising it. She has helped me build confidence in my mathematical abilities and has always encouraged me to keep improving, even when topics felt overwhelming. Thanks to her guidance, I felt much more comfortable and prepared during my final math exams. Her dedication, professionalism, and supportive teaching style made learning math far less stressful and much more enjoyable. I am very grateful for all the help and support she has given me over these years, and I would highly recommend her to anyone looking for an excellent math tutor.',
    rating: 5,
  },
]

const universities = [
  { name: 'Vanderbilt University', logo: '/logos/vanderbilt.svg' },
  { name: 'Rice University', logo: '/logos/rice.svg' },
  { name: 'Karlsruhe Institute of Technology', logo: '/logos/kit.svg' },
  { name: 'Adelphi University', logo: '/logos/adelphi.svg' },
  { name: 'Yale University', logo: '/logos/yale.svg' },
  { name: 'Princeton University', logo: '/logos/princeton.svg' },
  { name: 'Bocconi University', logo: '/logos/bocconi.svg' },
  { name: 'Boston University', logo: '/logos/boston.svg' },
]

const AUTOPLAY_INTERVAL = 6000

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#c4a962]' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const n = testimonials.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % n)
    }, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [n])

  const goTo = (i) => setCurrent(i)
  const goPrev = () => setCurrent(c => (c - 1 + n) % n)
  const goNext = () => setCurrent(c => (c + 1) % n)

  // All cards same width (50%); side cards slide past the container edge and get clipped
  // Right card at left:65% → visible from 65-100% = 35% = 70% of card
  // Left  card at left:-15% → visible from 0-35%  = 35% = 70% of card
  const getAnimate = (idx) => {
    const diff = ((idx - current) + n) % n
    if (diff === 0)     return { left: '25%',   opacity: 1,   zIndex: 10 }
    if (diff === 1)     return { left: '65%',   opacity: 0.85, zIndex: 5 }
    if (diff === n - 1) return { left: '-15%',  opacity: 0.85, zIndex: 5 }
    return diff <= Math.floor(n / 2)
      ? { left: '120%', opacity: 0, zIndex: 0 }
      : { left: '-70%', opacity: 0, zIndex: 0 }
  }

  return (
    <section id="testimonials" className="py-20 bg-[#f8f9fa]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            What Parents & Students{' '}
            <span className="text-[#1a5f7a]">Say About Us</span>
          </h2>
          <p className="text-[#636e72] text-lg">
            Hear from parents and students who have transformed their mathematical abilities and achieved academic success.
          </p>
        </motion.div>

        {/* 3-card carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Card stage */}
          <div className="relative overflow-hidden" style={{ height: '460px' }}>
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={getAnimate(idx)}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 h-full w-1/2"
              >
                <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 h-full flex flex-col overflow-hidden text-center">
                  <div className="w-10 h-10 bg-[#e8f4f8] rounded-lg flex items-center justify-center mb-4 mx-auto flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a5f7a]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <StarRating rating={t.rating} />
                  <p className="text-[#636e72] my-4 leading-relaxed text-sm flex-1 overflow-hidden">
                    "{t.quote}"
                  </p>
                  <p className="text-sm font-semibold text-[#1a5f7a] flex-shrink-0">— {t.name}</p>
                </div>
              </motion.div>
            ))}

            {/* Side fade overlays */}
            <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-[#f8f9fa] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-[#f8f9fa] to-transparent z-20 pointer-events-none" />
          </div>

          {/* Arrow buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-30 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-[#1a5f7a] hover:bg-[#e8f4f8] transition-colors"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-30 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-[#1a5f7a] hover:bg-[#e8f4f8] transition-colors"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#1a5f7a]' : 'bg-gray-300'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#c4a962]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#2d3436]">5.0 average rating from satisfied parents & students</p>
          </div>
        </motion.div>

        {/* Universities Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
              Student Destinations
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2d3436]" style={{ fontFamily: 'Georgia, serif' }}>
              Where Our Students{' '}
              <span className="text-[#1a5f7a]">Go To University</span>
            </h3>
          </div>

          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10" />

            <div className="animate-scroll flex w-max">
              {/* Two identical sets for seamless infinite loop */}
              {[...universities, ...universities].map((uni, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: '280px' }}
                >
                  <div className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 flex items-center justify-center h-[90px]">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="h-full w-auto object-contain max-h-[60px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-[#636e72] mt-6 text-lg font-medium italic">
            ...and more
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
