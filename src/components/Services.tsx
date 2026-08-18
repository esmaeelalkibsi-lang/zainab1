import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-6">
        <span className="text-[#0066FF] text-sm font-bold tracking-widest uppercase">خدماتنا</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">حلول رقمية متكاملة لنمو مشروعك</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto">باقة خدمات رقمية شاملة تنقل مشروعك من الفكرة إلى النجاح.</p>
        <div>
          <Link
            to="/services"
            className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold text-sm transition inline-flex items-center gap-2"
          >
            <span>خدماتنا</span>
            <i className="fa-solid fa-arrow-left text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
