import Reveal from './Reveal'
import MagneticLink from './MagneticLink'
import Icon from './Icon'

export default function Services() {
  return (
    <section id="services" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <Reveal className="text-center space-y-6">
        <span className="section-label">خدماتنا</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E232C]">
          حلول رقمية متكاملة <span className="gradient-text">لنمو مشروعك</span>
        </h2>
        <p className="text-[#5A6478] max-w-2xl mx-auto">باقة خدمات رقمية شاملة تنقل مشروعك من الفكرة إلى النجاح.</p>
        <div>
          <MagneticLink
            to="/services"
            className="btn-primary text-white px-7 py-3.5 rounded-xl font-bold text-sm transition items-center gap-2"
          >
            <span>خدماتنا</span>
            <Icon name="arrow-left" className="w-3 h-3" />
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  )
}
