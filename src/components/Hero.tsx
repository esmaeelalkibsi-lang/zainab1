import { Link } from 'react-router-dom'
import NeonIcon, { type IconName } from './NeonIcon'
import DeviceShowcase from './DeviceShowcase'

const stats: { icon: IconName; label: string }[] = [
  { icon: 'layers', label: 'تصميم فريد' },
  { icon: 'bolt', label: 'سرعة عالية' },
  { icon: 'shield', label: 'أمان وحماية' },
  { icon: 'support', label: 'دعم فني' },
]

export default function Hero() {
  return (
    <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Text */}
      <div className="space-y-6 text-center lg:text-right animate-fade-up order-2 lg:order-1">
       

        <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-[#0F172A]">
          نحوِّل أفكارك إلى <br />
          <span className="gradient-text">تجربة رقمية لا تُنسى</span>
        </h2>

        <p className="text-[#475569] text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
          تصميم مواقع ويب عصريّة، سريعة، متجاوبة مع جميع الأجهزة تهدف للرفع من مبيعاتك وجذب المزيد من العملاء.
        </p>

        <div className="pt-8 border-t border-[#0066FF]/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center lg:items-start gap-3">
              <NeonIcon name={s.icon} size="sm" />
              <span className="text-xs text-[#1E293B] font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Device showcase */}
      <div className="relative flex justify-center items-center order-1 lg:order-2 min-h-[360px] lg:min-h-[520px] pb-10">
        <div className="absolute w-72 h-72 bg-[#00B8D9]/15 blur-[130px] rounded-full animate-pulse-soft"></div>
        <div className="absolute w-52 h-52 border border-[#0066FF]/15 rounded-full animate-spin-slow"></div>
        <div className="absolute w-72 h-72 border border-[#00B8D9]/10 rounded-full animate-spin-slow [animation-duration:18s]"></div>

        <div className="relative z-10 w-full max-w-xl animate-float flex flex-col items-center">
          <DeviceShowcase />
          {/* Soft radial shadow beneath the laptop base */}
          <div
            className="absolute -bottom-4 w-3/4 h-10 rounded-[50%] z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 102, 255, 0.15) 0%, rgba(0, 184, 217, 0.05) 40%, transparent 70%)',
              filter: 'blur(18px)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
