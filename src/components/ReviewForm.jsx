import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Get your free access key at https://web3forms.com
const WEB3FORMS_KEY = '77dd8be2-49a4-424e-af41-9153a87f1d5e'

function ReviewForm() {
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
    <section id="reviews" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[#e8f4f8] text-[#1a5f7a] rounded-full text-sm font-medium mb-4">
            Leave a Review
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Share Your{' '}
            <span className="text-[#1a5f7a]">Experience</span>
          </h2>
          <p className="text-[#636e72] text-lg">
            We value your feedback. Share your experience to help other parents and students make informed decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
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
            <form onSubmit={handleSubmit} className="bg-[#f8f9fa] rounded-2xl p-8 md:p-10">
              <div className="space-y-5">
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
                    rows={5}
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
      </div>
    </section>
  )
}

export default ReviewForm
