import { motion } from 'framer-motion'
import { useTilt3D } from '../hooks/useTilt3D'

const steps = [
  { num: '01', title: 'الاستشارة والتخطيط', desc: 'نستمع لفكرتك وأهدافك ونضع خطة واضحة للمشروع' },
  { num: '02', title: 'التصميم', desc: 'نصمم واجهات عصرية تعكس هويتك وتجذب عملاءك' },
  { num: '03', title: 'التطوير', desc: 'نحوّل التصاميم إلى موقع سريع وأمن وعملي' },
  { num: '04', title: 'الإطلاق والدعم', desc: 'ننشر موقعك ونوفر دعماً مستمراً لضمان استمراريته' },
]

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="section-label">آلية العمل</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1E232C] tracking-tight leading-tight">
            كيف <span className="gradient-text">نعمل</span>؟
          </h2>
          <p className="text-base sm:text-lg text-[#5A6478] max-w-2xl mx-auto">
            خطوات واضحة وشفافة من الفكرة حتى الإطلاق.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((s, i) => (
            <ProcessCard key={s.num} index={i} num={s.num} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ index, num, title, desc }: { index: number; num: string; title: string; desc: string }) {
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
      className="process-card tilt-3d group rounded-2xl p-6"
    >
      <div className="process-spotlight" />
      <div className="tilt-inner relative z-10 space-y-3">
        <span className="text-4xl font-black gradient-text">{num}</span>
        <h3 className="text-lg font-bold text-[#1E232C] group-hover:text-[#1B3A5F] transition-colors">{title}</h3>
        <p className="text-sm text-[#5A6478] leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}
