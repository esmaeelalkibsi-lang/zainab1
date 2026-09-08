import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTilt3D } from '../hooks/useTilt3D'
import MagneticLink from './MagneticLink'
import Icon from './Icon'

function Pillar({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt3D(10)
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="card-base card-hover tilt-3d rounded-2xl p-3 sm:p-5 space-y-1 text-center"
    >
      <div className="card-spotlight" />
      <div className="tilt-inner relative z-10 space-y-1 text-center">
        <div className="flex justify-center text-[#1B3A5F] mb-2">{icon}</div>
        <h4 className="text-xl sm:text-3xl font-black text-[#1B3A5F] whitespace-nowrap">{title}</h4>
        <p className="text-xs sm:text-sm text-[#5A6478]">{desc}</p>
      </div>
    </div>
  )
}

const reasons: { title: string; desc: string; icon: ReactNode }[] = [
  { icon: <CoinsGrowthIcon />, title: 'احترافية', desc: 'في التصميم والتنفيذ' },
  { icon: <PuzzleIcon />, title: 'سرعة', desc: 'وأداء فائق الاستجابة' },
  { icon: <HeadphonesIcon />, title: 'دعم', desc: 'مستمر بلا إنقطاع' },
]

export default function AboutPage() {
  return (
    <section className="relative z-10 py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1B3A5F]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#B86B38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">من نحن</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-extrabold text-[#1E232C] tracking-tight leading-tight"
        >
          نصنع حضورك الرقمي{' '}
          <span className="gradient-text">باحترافية مطلقة</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-[#2D3540] leading-relaxed font-light max-w-3xl mx-auto"
        >
          نحن في <span className="font-semibold text-[#1B3A5F]">Top Web</span> فريق متخصص في تصميم وتطوير مواقع الويب الحديثة والمتاجر الرقمية. انطلقنا برؤية جديدة تهدف إلى مساعدة أصحاب المشاريع والشركات على بناء حضور رقمي قوي واحترافي.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-[#1B3A5F]/12 max-w-2xl mx-auto"
        >
          {reasons.map((r) => (
            <Pillar key={r.title} title={r.title} desc={r.desc} icon={r.icon} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-14"
      >
        <MagneticLink
          to="/"
          className="btn-primary text-white px-8 py-4 rounded-xl font-bold transition items-center gap-2"
        >
          <Icon name="arrow-right" className="w-3 h-3" />
          <span>العودة للرئيسية</span>
        </MagneticLink>
      </motion.div>
    </section>
  )
}

function CoinsGrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="5" /><circle cx="16" cy="14" r="5" /><path d="m13 11 4-4" />
    </svg>
  )
}

function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 2 12c0-.617.236-1.234.706-1.704L4.317 8.685a.982.982 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.878.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-6a9 9 0 0 1 18 0v6a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}
