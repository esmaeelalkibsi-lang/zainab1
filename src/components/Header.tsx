import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const dropdownLinks = [
  { label: 'من نحن', href: '/about' },
  { label: 'خدماتنا', href: '/services' },
  { label: 'أعمالنا', href: '/projects' },
  { label: 'آلية العمل', href: '#process' },
  { label: 'تواصل معنا', href: '/contact' },
]

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const go = (href: string) => {
    setDropdownOpen(false)
    setMobileOpen(false)
    if (href.startsWith('/') && !href.startsWith('/#')) {
      navigate(href)
      return
    }
    const hash = href.startsWith('/#') ? href.slice(1) : href
    if (pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = () => {
    setDropdownOpen(false)
    setMobileOpen(false)
    if (pathname !== '/') {
      navigate('/')
      return
    }
    const el = document.querySelector('#home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header dir="rtl" className="relative z-50 max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex flex-row-reverse justify-between items-center gap-2">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center shrink-0 bg-transparent p-0 m-0">
          <img src="/top-web-logo.webp" alt="TOP WEB" width={400} height={267} loading="eager" fetchPriority="high" className="h-11 sm:h-16 w-auto object-contain" />
          <span className="mt-0.5 sm:mt-1 text-[8px] sm:text-xs font-semibold tracking-[0.1em] text-[#1E293B]/80 whitespace-nowrap">
            نصمم • نبتكر • ننجح معك
          </span>
        </Link>

        {/* Navigation — الرئيسية dropdown */}
        <nav className="flex items-center text-sm text-[#1E293B] font-medium">
          <div
            ref={navRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={(e) => { e.preventDefault(); setDropdownOpen((v) => !v) }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 hover:text-[#0066FF] transition whitespace-nowrap px-2 py-1.5 rounded-lg hover:bg-[#0066FF]/5"
            >
              الرئيسية
              <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.12)] border border-gray-100/80 py-2 transition-all duration-200 origin-top z-[70] ${dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); goHome() }}
                className="group flex items-center justify-between px-4 py-3 text-right text-sm text-[#0066FF] font-bold hover:bg-gradient-to-l hover:from-[#0066FF]/10 hover:to-transparent transition-all duration-150"
              >
                <span>الصفحة الرئيسية</span>
                <i className="fa-solid fa-house text-[10px] text-[#0066FF]"></i>
              </a>
              <div className="mx-3 my-1 h-px bg-gray-100"></div>
              {dropdownLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href) }}
                  className="group flex items-center justify-between px-4 py-3 text-right text-sm text-[#1E293B] hover:bg-gradient-to-l hover:from-[#0066FF]/10 hover:to-transparent hover:text-[#0066FF] transition-all duration-150"
                >
                  <span className="font-medium">{l.label}</span>
                  <i className="fa-solid fa-chevron-left text-[9px] text-[#94A3B8] group-hover:text-[#0066FF] group-hover:-translate-x-0.5 transition-all duration-150"></i>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); go('/contact') }}
            className="btn-primary text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-sm transition items-center gap-1.5 sm:gap-2 whitespace-nowrap flex"
          >
            <span className="hidden sm:inline">ابدأ مشروعك الآن</span>
            <span className="sm:hidden">ابدأ مشروعك الآن</span>
            <i className="fa-solid fa-arrow-left text-[9px] sm:text-xs"></i>
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#1E293B] hover:bg-[#0066FF]/10 transition"
            aria-label="فتح القائمة"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      <div
        className={`md:hidden fixed inset-0 z-[80] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
            <img src="/top-web-logo.webp" alt="TOP WEB" width={400} height={267} loading="lazy" className="h-8 w-auto object-contain" />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-[#1E293B] hover:bg-[#0066FF]/10 transition"
              aria-label="إغلاق القائمة"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-1 overflow-y-auto">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); goHome() }}
              className="px-4 py-3 rounded-xl text-[#1E293B] font-bold text-right hover:bg-[#0066FF]/10 hover:text-[#0066FF] transition bg-[#0066FF]/5"
            >
              الرئيسية
            </a>
            {dropdownLinks.map((l, i) => (
              <a
                key={i}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href) }}
                className="px-4 py-3 rounded-xl text-[#1E293B] font-medium text-right hover:bg-[#0066FF]/10 hover:text-[#0066FF] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
