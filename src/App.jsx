import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  const [currentProduct, setCurrentProduct] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Hero currentProduct={currentProduct} onProductChange={setCurrentProduct} />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
