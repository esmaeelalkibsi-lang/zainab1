import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 0, src: '/project-1.jpg', alt: 'منصة بيوتي في', w: 395, h: 800 },
  { id: 1, src: '/project-2.jpg', alt: 'منصة صيدلية أكتيف', w: 395, h: 800 },
  { id: 2, src: '/project-3.jpg', alt: 'حلول تكنولوجيا', w: 395, h: 800 },
  { id: 3, src: '/project-4.jpg', alt: 'بوابة مدارس التكنولوجيا', w: 395, h: 800 },
]

const PAN_SPEED = 110
const HOLD_TIME = 1.5
const SLIDE_TIME = 0.45

export default function DeviceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  const screenRef = useRef<HTMLDivElement>(null)
  const [screenW, setScreenW] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (screenRef.current) setScreenW(screenRef.current.clientWidth)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (screenRef.current) ro.observe(screenRef.current)
    return () => ro.disconnect()
  }, [])

  const panInfo = (() => {
    const p = projects[activeIndex]
    if (!screenW) return { distance: 0, duration: HOLD_TIME + 2 }
    const renderedH = screenW * (p.h / p.w)
    const screenH = screenW * (10 / 16)
    const distance = Math.max(0, renderedH - screenH)
    const panDuration = distance > 0 ? distance / PAN_SPEED : 0
    return { distance, duration: panDuration + HOLD_TIME }
  })()

  useEffect(() => {
    if (!screenW || paused) return
    const total = (panInfo.duration + SLIDE_TIME) * 1000
    const timer = setTimeout(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, total)
    return () => clearTimeout(timer)
  }, [activeIndex, screenW, panInfo.duration, paused])

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

  const totalDur = panInfo.duration + SLIDE_TIME
  const slideFrac = SLIDE_TIME / totalDur
  const panEndFrac = Math.max(slideFrac + 0.001, (SLIDE_TIME + panInfo.duration - HOLD_TIME) / totalDur)

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <div className="relative w-full">
        <div
          className="relative bg-gradient-to-b from-[#D1D6DF] to-[#E9ECF1] rounded-t-2xl p-3 shadow-2xl border border-[#C8CDD8]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center mb-2">
            <div className="w-16 h-1.5 bg-[#9CA8B8]/60 rounded-full" />
          </div>
          <div ref={screenRef} className="relative w-full overflow-hidden rounded-lg bg-[#1E232C] aspect-[16/10]">
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: SLIDE_TIME, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <motion.img
                  src={projects[activeIndex].src}
                  alt={projects[activeIndex].alt}
                  draggable={false}
                  initial={{ y: 0 }}
                  animate={paused
                    ? { y: -panInfo.distance }
                    : { y: [0, 0, -panInfo.distance, -panInfo.distance] }
                  }
                  transition={paused
                    ? { duration: 0.4, ease: 'easeOut' }
                    : {
                        duration: totalDur,
                        times: [0, slideFrac, panEndFrac, 1],
                        ease: 'linear',
                      }
                  }
                  className="w-full h-auto block select-none"
                  style={{ willChange: 'transform' }}
                />
              </motion.div>
            </AnimatePresence>

            {paused && (
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium pointer-events-none">
                إيقاف مؤقت
              </div>
            )}
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
