import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MagneticLink from './components/MagneticLink'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyWebsite from './components/WhyWebsite'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Footer from './components/Footer'
import NeonBackground from './components/NeonBackground'
import WhatsAppFloat from './components/WhatsAppFloat'
import Icon from './components/Icon'

const ServicesPage = lazy(() => import('./components/ServicesPage'))
const ContactPage = lazy(() => import('./components/ContactPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const ProjectsPage = lazy(() => import('./components/ProjectsPage'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function Divider() {
  return (
    <div className="relative z-10 px-6">
      <hr className="divider" />
    </div>
  )
}

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
    }
  }, [hash])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <AboutLink />
        <Divider />
        <WhyWebsite />
        <Divider />
        <Services />
        <Divider />
        <PortfolioLink />
        <Divider />
        <Process />
        <Divider />
        <ContactLink />
      </main>
      <Footer />
    </>
  )
}

function ServicesPageRoute() {
  return (
    <>
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  )
}

function ContactPageRoute() {
  return (
    <>
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}

function AboutPageRoute() {
  return (
    <>
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}

function ProjectsPageRoute() {
  return (
    <>
      <Header />
      <main>
        <ProjectsPage />
      </main>
      <Footer />
    </>
  )
}

function AboutLink() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 space-y-3"
      >
        <span className="section-label">من نحن</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1E232C] leading-tight">فريق متخصص في تصميم وتطوير المواقع</h2>
        <p className="text-[#5A6478] max-w-2xl mx-auto leading-relaxed">نهدف إلى مساعدة أصحاب المشاريع على بناء حضور رقمي قوي واحترافي.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <MagneticLink
          to="/about"
          className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold transition items-center gap-2"
        >
          <span>تعرف علينا أكثر</span>
          <Icon name="arrow-left" className="w-3 h-3" />
        </MagneticLink>
      </motion.div>
    </section>
  )
}

function ContactLink() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 space-y-3"
      >
        <span className="section-label">تواصل معنا</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1E232C] leading-tight">جاهز لإطلاق مشروعك؟</h2>
        <p className="text-[#5A6478] max-w-2xl mx-auto leading-relaxed">تواصل معنا اليوم واخبرنا عن فكرتك وأهدافك.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <MagneticLink
          to="/contact"
          className="btn-primary text-white px-8 py-4 rounded-xl font-bold transition items-center gap-2"
        >
          <span>تواصل معنا</span>
          <Icon name="arrow-left" className="w-3 h-3" />
        </MagneticLink>
      </motion.div>
    </section>
  )
}

function PortfolioLink() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 space-y-3"
      >
        <span className="section-label">أعمالنا</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1E232C] leading-tight">أحدث المواقع والمنصات المنفذة</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <MagneticLink
          to="/projects"
          className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold transition items-center gap-2"
        >
          <span>مشاهدة المشاريع</span>
          <Icon name="arrow-left" className="w-3 h-3" />
        </MagneticLink>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <NeonBackground />
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[700px] h-[460px] bg-[#1B3A5F]/6 blur-[160px] rounded-full pointer-events-none animate-pulse-soft z-0"></div>
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-[#B86B38]/5 blur-[180px] rounded-full pointer-events-none animate-pulse-soft"></div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Suspense fallback={null}><ServicesPageRoute /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={null}><ProjectsPageRoute /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={null}><ContactPageRoute /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={null}><AboutPageRoute /></Suspense>} />
        </Routes>
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}
