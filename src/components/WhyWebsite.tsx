import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'

export default function WhyWebsite() {
  return (
    <section id="why-website" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14 space-y-3">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">لماذا تحتاج إلى موقع إلكتروني؟</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group card-base card-hover rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-[#00B8D9] transition-opacity duration-300 group-hover:opacity-40"></div>
              <ServiceIcon
                name={s.icon}
                className="relative w-10 h-10 text-[#0066FF]"
              />
            </div>

            <h3 className="text-sm font-bold text-[#0F172A] mb-1">{s.title}</h3>
            <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
