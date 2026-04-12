"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading")

  useEffect(() => {
    const totalDuration = 2400
    const start = Date.now()
    let raf: number

    const tick = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / totalDuration, 1)
      // Ease in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      setProgress(Math.floor(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setTimeout(() => {
          setPhase("exiting")
          onComplete()
        }, 500)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  useEffect(() => {
    if (phase === "exiting") {
      const t = setTimeout(() => setPhase("done"), 1100)
      return () => clearTimeout(t)
    }
  }, [phase])

  if (phase === "done") return null

  const isExiting = phase === "exiting"

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Top curtain */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#4A043A]"
        animate={{ y: isExiting ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Bottom curtain */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#4A043A]"
        animate={{ y: isExiting ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Content overlay — sits above curtains */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col"
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.35 }}
      >
        {/* Center: ACRE name */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center select-none">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono font-black leading-none tracking-tighter text-[#FAC335]"
              style={{ fontSize: "clamp(5rem, 22vw, 18rem)" }}
            >
              ACRE
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#D4A0C0] text-xs md:text-sm tracking-[0.5em] uppercase mt-4"
            >
              Frontend Developer · Portfolio
            </motion.p>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-8 md:px-12 pb-8 flex items-end justify-between"
        >
          <span className="text-[#D4A0C0] text-xs tracking-[0.35em] uppercase font-mono">
            Loading
          </span>
          <span className="font-mono text-4xl md:text-5xl font-bold text-[#FAC335] tabular-nums">
            {String(progress).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Progress line */}
        <div className="h-[2px] bg-[#482D40]">
          <div
            className="h-full bg-[#FAC335]"
            style={{
              width: `${progress}%`,
              transition: "width 80ms linear",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
