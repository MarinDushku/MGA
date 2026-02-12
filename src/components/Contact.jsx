import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const WEB3FORMS_KEY = 'e5c09463-7fd1-400d-bed6-069c9fd5b105'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+355 69 288 8941',
    href: 'tel:+355692888941',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'mezini_ny@yahoo.com',
    href: 'mailto:mezini_ny@yahoo.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: 'Instagram',
    value: '@math_geek_al',
    href: 'https://www.instagram.com/math_geek_al/',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    label: 'YouTube',
    value: '@math_geek_al',
    href: 'https://youtube.com/@math_geek_al',
  },
]

function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (rating === 0) {
      alert('Please select a star rating.')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Review from ${formData.name} - ${rating} Stars`,
          from_name: 'Math Geek Albania Reviews',
          name: formData.name,
          email: formData.email,
          rating: `${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)`,
          message: formData.review,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', review: '' })
        setRating(0)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Failed to submit review. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Start Your{' '}
            <span className="text-[#1a5f7a]">Math Journey</span>{' '}
            Today
          </h2>
          <p className="text-[#636e72] text-lg">
            Ready to excel in mathematics? Contact us to schedule your first session or learn more about our programs.
          </p>
        </motion.div>

        {/* My Qualifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[#1a5f7a] to-[#0d4a5f] rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#c4a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  My Qualifications
                </h3>
                <div className="w-16 h-1 bg-[#c4a962] rounded-full" />
              </div>
            </div>
            <ul className="text-white/90 text-lg leading-relaxed space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="text-[#c4a962] mt-1.5 flex-shrink-0">&#10003;</span>
                <span>American Degree &amp; Education with 20+ years of teaching experience in the United States</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c4a962] mt-1.5 flex-shrink-0">&#10003;</span>
                <span>Experienced across all programs: SAT, IB MYP, IB Diploma, A-Level, IGCSE, and university-level mathematics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c4a962] mt-1.5 flex-shrink-0">&#10003;</span>
                <span>Pearson &amp; IGCSE Examiner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c4a962] mt-1.5 flex-shrink-0">&#10003;</span>
                <span>All lessons are conducted in English</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-2xl p-12 text-center border border-green-200"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Thank You!
                </h3>
                <p className="text-green-700">
                  Your review has been submitted successfully. We appreciate your feedback!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#f8f9fa] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#2d3436] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Leave a Review
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="review-name" className="block text-sm font-medium text-[#2d3436] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="review-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/20 transition-all outline-none"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="review-email" className="block text-sm font-medium text-[#2d3436] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="review-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/20 transition-all outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-medium text-[#2d3436] mb-3">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <svg
                            className={`w-10 h-10 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? 'text-[#c4a962]'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                      {rating > 0 && (
                        <span className="ml-2 text-sm text-[#636e72]">
                          {rating}/5
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="review-text" className="block text-sm font-medium text-[#2d3436] mb-2">
                      Your Review
                    </label>
                    <textarea
                      id="review-text"
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/20 transition-all outline-none resize-none"
                      placeholder="Share your experience with Math Geek Albania..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#1a5f7a] text-white rounded-lg font-semibold hover:bg-[#0d4a5f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={!submitting ? { scale: 1.01 } : {}}
                    whileTap={!submitting ? { scale: 0.99 } : {}}
                  >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-[#25d366] to-[#128c7e] rounded-2xl p-8 text-white mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Quick Response via WhatsApp
              </h3>
              <p className="text-white/80 mb-6">
                Get instant answers to your questions. We typically respond within minutes!
              </p>
              <motion.a
                href="https://wa.me/16462624081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-white text-[#25d366] rounded-xl font-semibold hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </motion.a>
            </div>

            {/* Contact details */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8 flex-1">
              <h3 className="text-xl font-bold text-[#2d3436] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.isWhatsApp
                        ? 'bg-[#25d366]/10 text-[#25d366]'
                        : 'bg-[#e8f4f8] text-[#1a5f7a]'
                    } group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-[#636e72]">{item.label}</p>
                      <p className="font-semibold text-[#2d3436]">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#e8f4f8] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a5f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3436]" style={{ fontFamily: 'Georgia, serif' }}>
                  Our Location
                </h3>
                <p className="text-[#636e72] text-sm">Rruga Shyqyri Brari 9, Tiranë 1001, Albania</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0876890647!2d19.818!3d41.328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310d4e4e9e5f%3A0x8d0e0e0e0e0e0e0e!2sRruga%20Shyqyri%20Brari%209%2C%20Tiran%C3%AB%2C%20Albania!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Math Geek Albania Location"
                className="w-full"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Rruga+Shyqyri+Brari+9,+Tiranë+1001,+Albania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#1a5f7a] font-medium hover:text-[#0d4a5f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
