import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: 0, src: '/z1.webp', alt: 'منصة صيدلية أكتيف', width: 800, height: 1624 },
  { id: 1, src: '/z2.webp', alt: 'منصة بيوتي في', width: 800, height: 1624 },
  { id: 2, src: '/z4.webp', alt: 'حلول تكنولوجيا', width: 800, height: 1781 },
  { id: 3, src: '/z5.webp', alt: 'منصة تعليمية', width: 395, height: 800 },
]

export default function DeviceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToImage = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const next = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <div className="relative w-full">
        <div className="relative bg-gradient-to-b from-[#D1D6DF] to-[#E9ECF1] rounded-t-2xl p-3 shadow-2xl border border-[#C8CDD8]">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-1.5 bg-[#9CA8B8]/60 rounded-full" />
          </div>
          <div className="relative w-full overflow-hidden rounded-lg bg-[#1E232C] aspect-[16/10]">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              {projects.map((p, i) => (
                <img
                  key={p.id}
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full block"
                  style={{ display: i === activeIndex ? 'block' : 'none' }}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button onClick={prev} aria-label="السابق" className="w-8 h-8 rounded-full bg-white/70 hover:bg-white border border-[#1B3A5F]/15 flex items-center justify-center text-[#1B3A5F] transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <span className="text-xs text-[#5A6478] font-medium">{activeIndex + 1} / {projects.length}</span>
            <button onClick={next} aria-label="التالي" className="w-8 h-8 rounded-full bg-white/70 hover:bg-white border border-[#1B3A5F]/15 flex items-center justify-center text-[#1B3A5F] transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative bg-gradient-to-b from-[#E9ECF1] to-[#D1D6DF] h-4 sm:h-5 rounded-b-xl shadow-lg border-t border-[#C8CDD8] flex justify-center items-center">
          <div className="w-20 h-1.5 bg-[#9CA8B8]/70 rounded-b" />
        </div>
      </div>

      <div className="flex gap-2 mt-6 p-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#1B3A5F]/10 shadow-sm">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goToImage(i)}
            aria-label={`عرض المشروع ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === activeIndex
                ? 'w-6 bg-gradient-to-r from-[#1B3A5F] to-[#2A5380] shadow-[0_0_8px_rgba(27,58,95,0.5)]'
                : 'w-2 bg-[#1B3A5F]/30 hover:bg-[#1B3A5F]/50 hover:scale-125'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
