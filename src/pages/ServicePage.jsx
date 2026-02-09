import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const serviceData = {
  'sat-preparation': {
    title: 'SAT Preparation',
    subtitle: 'Achieve Your Target Score',
    description: 'Comprehensive SAT Math preparation with practice tests, strategies, and personalized coaching for top scores.',
    details: [
      'Full coverage of all SAT Math topics including Heart of Algebra, Problem Solving, Passport to Advanced Math, and Additional Topics',
      'Timed practice tests with detailed score analysis and improvement strategies',
      'Personalized study plans based on diagnostic assessment results',
      'Test-taking strategies and time management techniques',
      'Weekly homework assignments and progress tracking',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  'ib-myp': {
    title: 'IB MYP',
    subtitle: 'Middle Years Programme Mathematics',
    description: 'Middle Years Programme mathematics support, building strong foundations for advanced mathematical thinking.',
    details: [
      'Support for MYP Years 1-5 mathematics curriculum',
      'Focus on four branches: Number, Algebra, Geometry & Trigonometry, Statistics & Probability',
      'Criterion-based assessment preparation (Knowing & Understanding, Investigating Patterns, Communicating, Applying Mathematics)',
      'Development of ATL (Approaches to Learning) skills through mathematics',
      'eAssessment preparation for MYP5 students',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  'ib-dp': {
    title: 'IB DP',
    subtitle: 'Diploma Programme Mathematics',
    description: 'Diploma Programme Math AA & AI at both SL and HL levels. Expert guidance through challenging IB curriculum.',
    details: [
      'Math Analysis and Approaches (AA) at SL and HL',
      'Math Applications and Interpretation (AI) at SL and HL',
      'Internal Assessment (Math IA) guidance and support',
      'Past paper practice with examiner-style marking and feedback',
      'Topic-by-topic revision and exam preparation strategies',
      'GDC (Graphing Calculator) skills development',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  'a-level': {
    title: 'A-Level',
    subtitle: 'Cambridge A-Level Mathematics',
    description: 'Cambridge A-Level Mathematics and Further Mathematics preparation for university entrance success.',
    details: [
      'Pure Mathematics 1, 2, and 3 comprehensive coverage',
      'Mechanics and Statistics modules support',
      'Further Mathematics for ambitious students',
      'Past paper practice from Cambridge exam boards',
      'University entrance exam preparation (STEP, MAT, TMUA)',
      'Coursework and project guidance',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  'algebra': {
    title: 'Algebra',
    subtitle: 'From Basics to Advanced',
    description: 'From basic equations to advanced abstract algebra concepts.',
    details: [
      'Linear equations and inequalities',
      'Quadratic functions and equations',
      'Polynomial and rational expressions',
      'Systems of equations and matrices',
      'Exponential and logarithmic functions',
      'Sequences and series',
    ],
    icon: null,
    iconText: 'x²',
  },
  'geometry': {
    title: 'Geometry',
    subtitle: 'Shapes, Space, and Reasoning',
    description: 'Euclidean geometry, coordinate geometry, and spatial reasoning.',
    details: [
      'Euclidean geometry theorems and proofs',
      'Coordinate geometry and analytic methods',
      'Trigonometry and circular functions',
      'Vectors in 2D and 3D space',
      'Transformations and symmetry',
      'Solid geometry and volume calculations',
    ],
    icon: null,
    iconText: '△',
  },
  'statistics': {
    title: 'Statistics',
    subtitle: 'Data Analysis and Interpretation',
    description: 'Data analysis, probability distributions, and hypothesis testing.',
    details: [
      'Descriptive statistics and data visualization',
      'Probability distributions (Normal, Binomial, Poisson)',
      'Hypothesis testing and confidence intervals',
      'Correlation and regression analysis',
      'Chi-squared tests',
      'Sampling methods and experimental design',
    ],
    icon: null,
    iconText: 'σ',
  },
  'probability': {
    title: 'Probability',
    subtitle: 'Theory and Applications',
    description: 'Combinatorics, probability theory, and stochastic processes.',
    details: [
      'Fundamental counting principles',
      'Permutations and combinations',
      'Conditional probability and Bayes theorem',
      'Discrete and continuous random variables',
      'Expected value and variance',
      'Probability distributions and applications',
    ],
    icon: null,
    iconText: 'P',
  },
  'calculus': {
    title: 'Calculus',
    subtitle: 'Differential and Integral',
    description: 'Differential and integral calculus, multivariable calculus.',
    details: [
      'Limits and continuity',
      'Differentiation rules and applications',
      'Integration techniques (substitution, parts, partial fractions)',
      'Differential equations',
      'Applications in optimization and area/volume',
      'Introduction to multivariable calculus',
    ],
    icon: null,
    iconText: '∫',
  },
  'math-ia': {
    title: 'Math IA',
    subtitle: 'IB Internal Assessment',
    description: 'IB Math Internal Assessment guidance, research and writing support.',
    details: [
      'Choosing the right topic and research question',
      'Mathematical exploration and investigation techniques',
      'Structuring your IA for maximum marks',
      'Personal engagement and reflection guidance',
      'Use of mathematics criterion optimization',
      'Proofreading and feedback before submission',
      'Understanding the marking criteria (all 5 criteria explained)',
    ],
    icon: null,
    iconText: 'IA',
  },
}

function ServicePage() {
  const { slug } = useParams()
  const service = serviceData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2d3436] mb-4">Service Not Found</h1>
          <p className="text-[#636e72] mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a5f7a] text-white rounded-lg font-semibold hover:bg-[#0d4a5f] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#1a5f7a] to-[#0d4a5f] text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                {service.icon ? (
                  <div className="text-[#c4a962]">{service.icon}</div>
                ) : (
                  <span className="text-3xl font-bold text-[#c4a962]">{service.iconText}</span>
                )}
              </div>
              <div>
                <p className="text-[#c4a962] font-medium mb-2">{service.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {service.title}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#2d3436] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              What We Cover
            </h2>

            <div className="space-y-4">
              {service.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-4 p-4 bg-[#f8f9fa] rounded-xl"
                >
                  <div className="w-8 h-8 bg-[#e8f4f8] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#2d3436] leading-relaxed">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-[#1a5f7a] to-[#0d4a5f] rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-8 max-w-xl">
              Contact us today to discuss your goals and schedule your first {service.title} session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/16462624081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25d366] text-white rounded-lg font-semibold hover:bg-[#128c7e] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </motion.a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1a5f7a] rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
