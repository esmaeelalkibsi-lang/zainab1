import { motion } from 'framer-motion'
import Portfolio from './Portfolio'
import MagneticLink from './MagneticLink'
import Icon from './Icon'

export default function ProjectsPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 space-y-3"
      >
        <span className="section-label">أعمالنا</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1E232C]">مشاريع نفخر بإنجازها</h2>
        <p className="text-[#5A6478] max-w-2xl mx-auto">نماذج مختارة من المواقع والمنصات التي صمّمناها ونفّذناها لعملائنا.</p>
      </motion.div>

      <Portfolio />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-12"
      >
        <MagneticLink
          to="/#contact"
          className="btn-primary px-7 py-3.5 rounded-xl font-bold text-white items-center gap-2"
        >
          <span>ابدأ مشروعك الآن</span>
          <Icon name="paper-plane" className="w-3 h-3" />
        </MagneticLink>
      </motion.div>
    </section>
  )
}
