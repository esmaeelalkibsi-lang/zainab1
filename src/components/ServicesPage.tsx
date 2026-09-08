import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTilt3D } from '../hooks/useTilt3D'
import { type IconName } from './NeonIcon'
import Icon from './Icon'

type Service = { icon: IconName; title: string; desc: string }

const services: Service[] = [
  { icon: 'design', title: 'تصميم واجهات المستخدم', desc: 'تصاميم عصرية وجذابة تعكس هوية علامتك التجارية وترتّب المحتوى لتجربة استخدام سلسة.' },
  { icon: 'code', title: 'تطوير المواقع', desc: 'برمجة مواقع سريعة وأمنة بأحدث التقنيات مع توافق كامل مع جميع المتصفحات والأجهزة.' },
  { icon: 'responsive', title: 'تصميم متجاوب', desc: 'مواقع تتكيف بشكل مثالي مع الجوال والتابلت والحاسوب لتقديم تجربة موحّدة ومريحة.' },
  { icon: 'store', title: 'متاجر إلكترونية', desc: 'بناء متاجر متكاملة مع بوابات دفع آمنة ولوحة تحكم سهلة لإدارة منتجاتك ومبيعاتك.' },
  { icon: 'seo', title: 'تحسين محركات البحث', desc: 'ظهور أعلى في نتائج جوجل لضمان جذب زوار مستهدفين ومضاعفة عملاء نشاطك التجاري.' },
  { icon: 'hosting', title: 'استضافة وصيانة', desc: 'حماية مستمرة وسرعة استجابة للخوادم لضمان بقاء موقعك يعمل بكفاءة وأمان تام دائماً.' },
]

const iconPaths: Record<IconName, JSX.Element> = {
  design: <><path d="M5 19 19 5" /><path d="m7 5 12 12" /><path d="m4 20 3-1 10-10-2-2L5 17l-1 3Z" /><path d="m14 6 2-2 4 4-2 2" /></>,
  code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
  responsive: <><rect x="3" y="4" width="14" height="10" rx="1.5" /><path d="M7 20h6M10 14v6M19 8h2v9h-5V8h3Z" /><path d="M18 10h2" /></>,
  store: <><path d="M4 10v9h16v-9" /><path d="M3 10 5 4h14l2 6" /><path d="M3 10a3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 2 0" /><path d="M8 19v-5h8v5" /></>,
  seo: <><path d="M4 19V9M9 19V5M14 19v-8M19 19V3" /><path d="m4 7 5-3 5 4 5-5" /></>,
  hosting: <><rect x="4" y="3" width="16" height="6" rx="1" /><rect x="4" y="15" width="16" height="6" rx="1" /><path d="M8 6h.01M8 18h.01M12 6h5M12 18h5" /></>,
  chat: <><path d="M20 11a7 7 0 0 1-7 7H8l-4 3v-6a7 7 0 1 1 16-4Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
  rocket: <><path d="M14 4c3-2 6-1 6-1s1 3-1 6l-6 6-4-4 5-7Z" /><path d="m9 11-3 1-2 3 5-1M13 15l-1 5 3-2 1-3" /><circle cx="16" cy="7" r="1" /></>,
  layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
  bolt: <><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13H3a2 2 0 0 0 2 2h1v-5H4M20 13h1a2 2 0 0 1-2 2h-1v-5h2M12 19h4" /></>,
  chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 3-4 3 2 5-7" /><circle cx="7" cy="15" r="1" /><circle cx="10" cy="11" r="1" /><circle cx="13" cy="13" r="1" /><circle cx="18" cy="6" r="1" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star: <><path d="m12 3 2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5l6.5-.5L12 3Z" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15" r="1" /></>,
  sparkles: <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /><path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" /></>,
}

function ServiceCard({ index, icon, title, desc }: { index: number; icon: IconName; title: string; desc: string }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt3D(7)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="service-card tilt-3d group rounded-3xl p-8 cursor-pointer"
    >
      <div className="service-spotlight" />
      <div className="tilt-inner relative z-10 flex flex-col items-start space-y-4">
        <div className="service-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
            {iconPaths[icon]}
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1E232C] transition-colors duration-300 group-hover:text-[#1B3A5F]">{title}</h3>
        <p className="text-[#5A6478] leading-relaxed text-sm">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <section className="relative z-10 py-24 overflow-hidden">
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#1B3A5F]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#B86B38]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="section-label">خدماتنا</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E232C] tracking-tight">
            حلول رقمية متكاملة{' '}
            <span className="gradient-text">لنمو مشروعك</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A6478]">
            نقدم باقة شاملة من الخدمات الرقمية التي تغطي رحلتك من الفكرة حتى الإطلاق وما بعده.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-14"
        >
          <Link to="/" className="btn-outline px-7 py-3.5 rounded-xl font-bold text-[#2D3540] hover:text-[#1B3A5F] transition inline-flex items-center gap-2 magnetic-btn">
            <Icon name="arrow-right" className="w-3 h-3" />
            <span>العودة للرئيسية</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
