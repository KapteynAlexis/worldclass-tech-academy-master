// src/app/page.tsx
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Impact from '@/components/Impact'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <About/>
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </>
  )
}
