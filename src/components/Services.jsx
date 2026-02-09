import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const examPrograms = [
  {
    title: 'SAT Preparation',
    slug: 'sat-preparation',
    description: 'Comprehensive SAT Math preparation with practice tests, strategies, and personalized coaching for top scores.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'IB MYP',
    slug: 'ib-myp',
    description: 'Middle Years Programme mathematics support, building strong foundations for advanced mathematical thinking.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'IB DP',
    slug: 'ib-dp',
    description: 'Diploma Programme Math AA & AI at both SL and HL levels. Expert guidance through challenging IB curriculum.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'A-Level',
    slug: 'a-level',
    description: 'Cambridge A-Level Mathematics and Further Mathematics preparation for university entrance success.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
]

const subjects = [
  {
    title: 'Algebra',
    slug: 'algebra',
    description: 'From basic equations to advanced abstract algebra concepts',
    icon: 'x²',
  },
  {
    title: 'Geometry',
    slug: 'geometry',
    description: 'Euclidean geometry, coordinate geometry, and spatial reasoning',
    icon: '△',
  },
  {
    title: 'Statistics',
    slug: 'statistics',
    description: 'Data analysis, probability distributions, and hypothesis testing',
    icon: 'σ',
  },
  {
    title: 'Probability',
    slug: 'probability',
    description: 'Combinatorics, probability theory, and stochastic processes',
    icon: 'P',
  },
  {
    title: 'Calculus',
    slug: 'calculus',
    description: 'Differential and integral calculus, multivariable calculus',
    icon: '∫',
  },
  {
    title: 'Math IA',
    slug: 'math-ia',
    description: 'IB Math Internal Assessment guidance, research and writing support',
    icon: 'IA',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <Link to={`/services/${service.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover h-full"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e8f4f8] to-transparent rounded-2xl opacity-50" />

        <div className="relative">
          <div className="w-14 h-14 bg-[#e8f4f8] rounded-xl flex items-center justify-center text-[#1a5f7a] mb-4 group-hover:bg-[#1a5f7a] group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>

          <h3 className="text-xl font-bold text-[#2d3436] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {service.title}
          </h3>

          <p className="text-[#636e72] text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a5f7a] group-hover:gap-2 transition-all">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

function SubjectCard({ subject, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <Link to={`/services/${subject.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="group relative bg-gradient-to-br from-[#1a5f7a] to-[#0d4a5f] rounded-xl p-5 text-white overflow-hidden card-hover h-full"
      >
        <div className="absolute top-2 right-2 text-4xl font-bold text-white/10 select-none">
          {subject.icon}
        </div>

        <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          {subject.title}
        </h4>

        <p className="text-white/80 text-sm leading-relaxed mb-3">
          {subject.description}
        </p>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#c4a962] group-hover:gap-2 transition-all">
          Learn More
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </motion.div>
    </Link>
  )
}

function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 bg-[#f8f9fa]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Comprehensive Mathematics{' '}
            <span className="text-[#1a5f7a]">Education</span>
          </h2>
          <p className="text-[#636e72] text-lg">
            Tailored tutoring programs designed to help students excel in international examinations and build strong mathematical foundations.
          </p>
        </motion.div>

        {/* Exam Preparation Programs */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold text-[#2d3436] mb-6 flex items-center gap-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="w-8 h-0.5 bg-[#c4a962]" />
            Exam Preparation Programs
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examPrograms.map((program, index) => (
              <ServiceCard key={program.title} service={program} index={index} />
            ))}
          </div>
        </div>

        {/* Subject Expertise */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-bold text-[#2d3436] mb-6 flex items-center gap-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="w-8 h-0.5 bg-[#c4a962]" />
            Subject Expertise
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <SubjectCard key={subject.title} subject={subject} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#636e72] mb-4">Ready to start your journey to mathematical excellence?</p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a5f7a] text-white rounded-lg font-semibold hover:bg-[#0d4a5f] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
