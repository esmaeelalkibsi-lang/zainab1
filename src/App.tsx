import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyWebsite from './components/WhyWebsite'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ProjectsPage from './components/ProjectsPage'
import Process from './components/Process'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import NeonBackground from './components/NeonBackground'
import ServicesPage from './components/ServicesPage'
import WhatsAppFloat from './components/WhatsAppFloat'

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
      <div className="text-center mb-10 space-y-3">
        <span className="text-lg font-bold tracking-widest uppercase text-[#0066FF]">من نحن</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">فريق متخصص في تصميم وتطوير المواقع</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">نهدف إلى مساعدة أصحاب المشاريع على بناء حضور رقمي قوي واحترافي.</p>
      </div>
      <div className="text-center">
        <Link
          to="/about"
          className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <span>تعرف علينا أكثر</span>
          <i className="fa-solid fa-arrow-left text-xs"></i>
        </Link>
      </div>
    </section>
  )
}

function ContactLink() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20" id="contact">
      <div className="text-center mb-10 space-y-3">
        <span className="text-lg font-bold tracking-widest uppercase text-[#0066FF]">تواصل معنا</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">جاهز لإطلاق مشروعك؟</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">تواصل معنا اليوم واخبرنا عن فكرتك وأهدافك.</p>
      </div>
      <div className="text-center">
        <Link
          to="/contact"
          className="btn-primary text-white px-8 py-4 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <span>تواصل معنا</span>
          <i className="fa-solid fa-arrow-left text-xs"></i>
        </Link>
      </div>
    </section>
  )
}

function PortfolioLink() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20" id="portfolio">
      <div className="text-center mb-10 space-y-3">
        <span className="text-lg font-bold tracking-widest uppercase text-[#0066FF]">أعمالنا</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">أحدث المواقع والمنصات المنفذة</h2>
      </div>
      <div className="text-center">
        <Link
          to="/projects"
          className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <span>مشاهدة المشاريع</span>
          <i className="fa-solid fa-arrow-left text-xs"></i>
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <NeonBackground />
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[700px] h-[460px] bg-[#0066FF]/10 blur-[160px] rounded-full pointer-events-none animate-pulse-soft z-0"></div>
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-[#00B8D9]/8 blur-[180px] rounded-full pointer-events-none animate-pulse-soft"></div>
        <div className="absolute top-2/3 -right-40 w-[460px] h-[460px] bg-[#4F46E5]/6 blur-[170px] rounded-full pointer-events-none animate-pulse-soft"></div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPageRoute />} />
          <Route path="/projects" element={<ProjectsPageRoute />} />
          <Route path="/contact" element={<ContactPageRoute />} />
          <Route path="/about" element={<AboutPageRoute />} />
        </Routes>
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}
