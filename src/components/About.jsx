import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'American Methodology',
    description: 'Teaching approaches refined through years of experience in the US educational system.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    title: 'Personalized Learning',
    description: 'Individual attention and customized study plans tailored to each student\'s needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Proven Results',
    description: 'Track record of students achieving excellent scores in SAT, IB, and A-Level exams.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Scheduling',
    description: 'Online and in-person sessions available to accommodate busy student schedules.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '30,000+', label: 'Students Taught' },
  { value: '99%', label: 'Success Rate' },
  { value: '5/5', label: 'Student Rating' },
]

function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/H1.avif"
                alt="Mathematics tutoring session"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d4a5f]/20 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c4a962] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2d3436]">20+ Years</p>
                  <p className="text-[#636e72] text-sm">Teaching Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e8f4f8] rounded-xl -z-10" />
            <div className="absolute -bottom-4 right-12 w-16 h-16 bg-[#c4a962]/20 rounded-xl -z-10" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              American Experience in{' '}
              <span className="text-[#1a5f7a]">Mathematics Education</span>
            </h2>

            <p className="text-[#636e72] text-lg mb-6 leading-relaxed">
              At Math Geek Albania, we bring American educational standards and teaching methodologies to students preparing for international examinations. Our approach combines rigorous academic preparation with personalized attention to ensure every student reaches their full potential.
            </p>

            <p className="text-[#636e72] mb-8 leading-relaxed">
              With extensive experience teaching in the United States and a deep understanding of international curricula, we provide expert guidance through SAT, IB, and A-Level mathematics. Our students consistently achieve outstanding results and gain admission to top universities worldwide.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f8f9fa] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#e8f4f8] rounded-lg flex items-center justify-center text-[#1a5f7a] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3436] mb-1">{feature.title}</h4>
                    <p className="text-[#636e72] text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 p-4 bg-[#f8f9fa] rounded-xl"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-[#1a5f7a]">{stat.value}</p>
                  <p className="text-[#636e72] text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
