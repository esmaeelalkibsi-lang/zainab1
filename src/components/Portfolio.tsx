import { motion } from 'framer-motion'
import { useTilt3D } from '../hooks/useTilt3D'

const projects = [
  { title: 'منصة بيوتي في (Beautify) للعناية والتجميل', img: '/z2 copy.webp', width: 800, height: 1624, href: 'https://beautify.makeup' },
  { title: 'منصة صيدلية أكتيف الرقمية', img: '/z1.webp', width: 800, height: 1624, href: 'https://web-page-generation-tsmu.bolt.host/' },
  { title: 'حلول تكنولوجيا وتطوير بيئة العمل الرقمية', img: '/83af8b62-f44d-4a8c-9248-7222f43fea7f copy.webp', width: 800, height: 1781, href: 'https://corporate-it-solutio-nzuo.bolt.host' },
  { title: 'بوابة مدارس التكنولوجيا الحديثة التعليمية', img: '/school.jpg', width: 395, height: 800, href: 'https://modern-tech-school-w-jxxz.bolt.host' },
  { title: 'منصة المخبز الماليزي (حلا) للمخبوزات الطازجة', img: '/bakery.jpg', width: 395, height: 800, href: 'https://bakery-web-app-tysw.bolt.host' },
]

function ProjectCard({ index, title, img, width, height, href }: {
  index: number; title: string; img: string; width: number; height: number; href: string
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt3D<HTMLAnchorElement>(5)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#1E232C]/8 hover:border-[#1B3A5F]/30 hover:shadow-[0_12px_40px_rgba(27,58,95,0.15)] transition-all duration-300 no-underline shimmer-on-hover tilt-3d tilt-glow"
    >
      <div className="tilt-inner relative z-10 flex flex-col">
        <div className="w-full h-[220px] overflow-hidden bg-[#E9ECF1]">
          <img src={img} alt={title} width={width} height={height} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5 text-right space-y-1">
          <h3 className="text-lg font-bold text-[#1E232C] my-2 group-hover:text-[#1B3A5F] transition-colors leading-snug">{title}</h3>
        </div>
      </div>
    </motion.a>
  )
}

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 max-w-[400px] mx-auto w-full">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} index={i} title={p.title} img={p.img} width={p.width} height={p.height} href={p.href} />
      ))}
    </div>
  )
}
