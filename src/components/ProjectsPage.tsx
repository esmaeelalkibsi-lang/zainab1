import { Link } from 'react-router-dom'
import Portfolio from './Portfolio'

export default function ProjectsPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
      <div className="text-center mb-14 space-y-3">
        <span className="text-[#0066FF] text-lg font-extrabold tracking-widest uppercase">أعمالنا</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">مشاريع نفخر بإنجازها</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto">نماذج مختارة من المواقع والمنصات التي صمّمناها ونفّذناها لعملائنا.</p>
      </div>

      <Portfolio />

      <div className="text-center mt-12">
        <Link
          to="/#contact"
          className="btn-primary px-7 py-3.5 rounded-xl font-bold text-white inline-flex items-center gap-2"
        >
          <span>ابدأ مشروعك الآن</span>
          <i className="fa-solid fa-paper-plane text-xs"></i>
        </Link>
      </div>
    </section>
  )
}
