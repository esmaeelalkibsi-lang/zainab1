import { motion } from 'framer-motion'
import { useTilt3D } from '../hooks/useTilt3D'

const features = [
  { title: 'حضور احترافي', desc: 'موقعك هو واجهة مشروعك الأولى — اجعلها تعكس احترافيتك', icon: 'ش' },
  { title: 'ثقة العملاء', desc: 'التصميم الجيد يبني المصداقية ويزيد معدلات التحويل', icon: 'ث' },
  { title: 'ظهور أعلى', desc: 'مواقع محسّنة لمحركات البحث تظهر أمام عملاء أكثر', icon: 'ظ' },
  { title: 'إدارة سهلة', desc: 'لوحات تحكم بسيطة تمنحك التحكم الكامل بمحتواك', icon: 'إ' },
  { title: 'تجربة سلسة', desc: 'تصميم متجاوب يعمل بسلاسة على كل الأجهزة', icon: 'ت' },
  { title: 'نمو مستدام', desc: 'منصة قابلة للتوسع تنمو مع نمو مشروعك', icon: 'ن' },
]

export default function WhyWebsite() {
  return (
    <section id="why-website" className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="section-label">لماذا الموقع؟</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1E232C] tracking-tight leading-tight">
            لماذا تحتاج إلى <span className="gradient-text">موقع إلكتروني</span>؟
          </h2>
          <p className="text-base sm:text-lg text-[#5A6478] max-w-2xl mx-auto">
            في عصر رقمي، الموقع ليس رفاهية — بل أداة أساسية لنجاح مشروعك ونمو عملائك.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i} title={f.title} desc={f.desc} iconChar={f.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ index, title, desc, iconChar }: { index: number; title: string; desc: string; iconChar: string }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt3D(8)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="why-card tilt-3d group rounded-2xl p-6"
    >
      <div className="why-spotlight" />
      <div className="tilt-inner relative z-10 flex items-start gap-4">
        <div className="why-icon-wrap shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B3A5F] to-[#2A5380] text-white flex items-center justify-center text-lg font-bold shadow-lg">
          {iconChar}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#1E232C] group-hover:text-[#1B3A5F] transition-colors">{title}</h3>
          <p className="text-sm text-[#5A6478] leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
