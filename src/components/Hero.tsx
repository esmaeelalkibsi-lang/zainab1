import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NeonIcon, { type IconName } from './NeonIcon'
import DeviceShowcase from './DeviceShowcase'

const stats: { icon: IconName; label: string }[] = [
  { icon: 'layers', label: 'تصميم فريد' },
  { icon: 'bolt', label: 'سرعة عالية' },
  { icon: 'shield', label: 'أمان وحماية' },
  { icon: 'support', label: 'دعم فني' },
]

export default function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start'],
  })
  const yShowcase = useTransform(scrollYProgress, [0, 1], [40, -40])
  const yBlur = useTransform(scrollYProgress, [0, 1], [20, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5])

  return (
    <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 text-center lg:text-right order-2 lg:order-1">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl lg:text-6xl font-extrabold leading-tight text-[#1E232C]"
        >
          نحوِّل أفكارك إلى <br />
          <span className="gradient-text animate-gradient-sweep">تجربة رقمية لا تُنسى</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#5A6478] text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
        >
          تصميم مواقع ويب عصريّة، سريعة، متجاوبة مع جميع الأجهزة تهدف للرفع من مبيعاتك وجذب المزيد من العملاء.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-[#1B3A5F]/15 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start gap-3"
            >
              <NeonIcon name={s.icon} size="sm" />
              <span className="text-xs text-[#2D3540] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div ref={showcaseRef} className="relative flex justify-center items-center order-1 lg:order-2 min-h-[360px] lg:min-h-[520px] pb-10">
        <motion.div style={{ y: yBlur, opacity }} className="absolute w-72 h-72 bg-[#B86B38]/10 blur-[130px] rounded-full animate-glow-pulse" />
        <motion.div style={{ opacity }} className="absolute w-52 h-52 border border-[#1B3A5F]/15 rounded-full animate-spin-slow" />
        <motion.div style={{ opacity }} className="absolute w-72 h-72 border border-[#B86B38]/12 rounded-full animate-spin-slow [animation-duration:18s]" />

        <motion.div
          style={{ y: yShowcase }}
          className="relative z-10 w-full max-w-xl animate-float flex flex-col items-center"
        >
          <DeviceShowcase />
          <div
            className="absolute -bottom-4 w-3/4 h-10 rounded-[50%] z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(27, 58, 95, 0.15) 0%, rgba(184, 107, 56, 0.05) 40%, transparent 70%)',
              filter: 'blur(18px)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
