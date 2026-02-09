import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'Enkela has tutored my daughter for the past two years. She is an amazing tutor, professional, patient, and punctual. With her help, my daughter has been able to understand and keep up with her math concepts and studies. Highly recommend Enkela.',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Enkela has tutored both of my daughters for the past four years. I can\'t say enough about how valuable she has been. She has a very organized and understandable approach to teaching math. She has been instrumental in filling in the gaps, so to speak. As a result, a solid knowledge of concepts and problem solving skills were developed. These skills made them very successful in their college level math coursework as well.',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Enkela, Thank you so much for your EXCELLENT WORK. Our teen received outstanding grades all 4 years you tutored - from HS Algebra to Calculus. You are VERY PROFESSIONAL in every way - work ethic, punctuality, reliability, student-teacher rapport, etc. Your tutoring is the BEST INVESTMENT in education. It has been a pleasure to know you!',
    rating: 5,
  },
]

const universities = [
  'Harvard University',
  'MIT',
  'Stanford University',
  'Columbia University',
  'University of Pennsylvania',
  'New York University',
  'Boston University',
  'University of Michigan',
  'UCLA',
  'University of Toronto',
  'King\'s College London',
  'Bocconi University',
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

      {/* Rating */}
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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

        {/* Universities Section */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {universities.map((uni, index) => (
              <motion.div
                key={uni}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1a5f7a]/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#e8f4f8] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#2d3436]">{uni}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
