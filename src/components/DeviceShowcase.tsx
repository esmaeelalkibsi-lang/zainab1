import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  id: number
  title: string
  src: string
  width: number
  height: number
  alt: string
}

const projects: Project[] = [
  { id: 1, title: 'Top Web - Project 1', src: '/z1.webp', width: 800, height: 1624, alt: 'Top Web Showcase 1' },
  { id: 2, title: 'Top Web - Project 2', src: '/z2.webp', width: 800, height: 1624, alt: 'Top Web Showcase 2' },
  { id: 3, title: 'موقع متجر خدمات إلكترونية', src: '/83af8b62-f44d-4a8c-9248-7222f43fea7f copy.webp', width: 800, height: 1781, alt: 'موقع متجر خدمات إلكترونية' },
]

const SWITCH_INTERVAL = 5000

export default function DeviceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, SWITCH_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      {/* CSS/Tailwind laptop frame mockup */}
      <div className="relative w-full">
        {/* Screen bezel */}
        <div className="relative bg-[#1a1a1a] p-2.5 sm:p-3 rounded-t-2xl shadow-2xl border border-gray-700/60">
          {/* Camera dot */}
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mx-auto mb-1.5 sm:mb-2" />
          {/* Screen display — screenshots sit strictly inside */}
          <div className="relative w-full aspect-video bg-black overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full overflow-hidden"
              >
                <motion.img
                  src={currentProject.src}
                  alt={currentProject.alt}
                  width={currentProject.width}
                  height={currentProject.height}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative bg-gradient-to-b from-gray-300 to-gray-400 h-4 sm:h-5 rounded-b-xl shadow-lg border-t border-gray-400/80 flex justify-center items-center">
          <div className="w-20 h-1.5 bg-gray-500/70 rounded-b" />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mt-6">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(i)}
            aria-label={`عرض المشروع ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6 bg-[#0066FF]' : 'w-2 bg-[#0066FF]/30 hover:bg-[#0066FF]/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
