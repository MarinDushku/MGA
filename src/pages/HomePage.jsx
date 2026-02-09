import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
  )
}

export default HomePage
