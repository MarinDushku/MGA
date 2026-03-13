import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
    >
      {/* Quote icon */}
      <div className="w-12 h-12 bg-[#e8f4f8] rounded-lg flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#1a5f7a]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-[#636e72] mb-6 leading-relaxed text-base">
        "{testimonial.quote}"
      </p>

      {/* Rating + Name */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#c4a962]' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {testimonial.name && (
          <p className="text-sm font-semibold text-[#1a5f7a]">— {testimonial.name}</p>
        )}
      </div>
    </motion.div>
  )
}

function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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
            What Parents{' '}
            <span className="text-[#1a5f7a]">Say About Us</span>
          </h2>
          <p className="text-[#636e72] text-lg">
            Hear from parents whose children have transformed their mathematical abilities and achieved academic success.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
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
            <p className="text-sm font-semibold text-[#2d3436]">5.0 average rating from satisfied parents</p>
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
