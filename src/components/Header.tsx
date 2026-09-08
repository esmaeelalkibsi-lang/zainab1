import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useMagnetic } from '../hooks/useMagnetic'
import Icon from './Icon'

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
  const ctaMagnetic = useMagnetic<HTMLAnchorElement>(0.25)

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
        <Link to="/" className="flex flex-col items-center shrink-0 bg-transparent p-0 m-0">
          <img src="/top-web-logo.png" alt="TOP WEB" loading="eager" fetchPriority="high" className="h-11 sm:h-16 w-auto object-contain" />
          <span className="mt-0.5 sm:mt-1 text-[8px] sm:text-xs font-semibold tracking-[0.1em] text-[#5A6478] whitespace-nowrap">
            نصمم • نبتكر • ننجح معك
          </span>
        </Link>

        <nav className="flex items-center text-sm text-[#2D3540] font-medium">
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
              className="flex items-center gap-1.5 hover:text-[#1B3A5F] transition whitespace-nowrap px-2 py-1.5 rounded-lg hover:bg-[#1B3A5F]/8"
            >
              الرئيسية
              <Icon name="chevron-down" className={`w-2.5 h-2.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(30,35,44,0.15)] border border-[#1E232C]/8 py-2 transition-all duration-200 origin-top z-[70] ${dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); goHome() }}
                className="group flex items-center justify-between px-4 py-3 text-right text-sm text-[#1B3A5F] font-bold hover:bg-gradient-to-l hover:from-[#1B3A5F]/10 hover:to-transparent transition-all duration-150"
              >
                <span>الصفحة الرئيسية</span>
                <Icon name="house" className="w-2.5 h-2.5 text-[#1B3A5F]" />
              </a>
              <div className="mx-3 my-1 h-px bg-[#1E232C]/8"></div>
              {dropdownLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href) }}
                  className="group flex items-center justify-between px-4 py-3 text-right text-sm text-[#2D3540] hover:bg-gradient-to-l hover:from-[#1B3A5F]/10 hover:to-transparent hover:text-[#1B3A5F] transition-all duration-150"
                >
                  <span className="font-medium">{l.label}</span>
                  <Icon name="chevron-left" className="w-2 h-2 text-[#9CA8B8] group-hover:text-[#1B3A5F] group-hover:-translate-x-0.5 transition-all duration-150" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); go('/contact') }}
            ref={ctaMagnetic.ref}
            onMouseMove={ctaMagnetic.onMouseMove}
            onMouseLeave={ctaMagnetic.onMouseLeave}
            className="btn-primary text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-sm transition items-center gap-1.5 sm:gap-2 whitespace-nowrap flex magnetic-btn"
          >
            <span className="hidden sm:inline">ابدأ مشروعك الآن</span>
            <span className="sm:hidden">ابدأ مشروعك الآن</span>
            <Icon name="arrow-left" className="w-2 h-2 sm:w-3 sm:h-3" />
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#2D3540] hover:bg-[#1B3A5F]/10 transition"
            aria-label="فتح القائمة"
          >
            <Icon name="bars" className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[80] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out border-l border-[#1E232C]/8 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#1E232C]/8 shrink-0">
            <img src="/top-web-logo.png" alt="TOP WEB" loading="lazy" className="h-8 w-auto object-contain" />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-[#2D3540] hover:bg-[#1B3A5F]/10 transition"
              aria-label="إغلاق القائمة"
            >
              <Icon name="xmark" className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-1 overflow-y-auto">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); goHome() }}
              className="px-4 py-3 rounded-xl text-[#2D3540] font-bold text-right hover:bg-[#1B3A5F]/10 hover:text-[#1B3A5F] transition bg-[#1B3A5F]/8"
            >
              الرئيسية
            </a>
            {dropdownLinks.map((l, i) => (
              <a
                key={i}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href) }}
                className="px-4 py-3 rounded-xl text-[#2D3540] font-medium text-right hover:bg-[#1B3A5F]/10 hover:text-[#1B3A5F] transition"
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
