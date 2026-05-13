"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import HeroEye from "@/components/common/HeroEye"

interface LoadingScreenProps {
  onCompleteAction: () => void
}

export default function LoadingScreen({ onCompleteAction }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "entering" | "done">("loading")

  useEffect(() => {
    const totalDuration = 1200
    const start = Date.now()
    let raf: number

    const tick = () => {
      const elapsed = Date.now() - start
      const t = Math.min(elapsed / totalDuration, 1)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      setProgress(Math.floor(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setTimeout(() => {
          setPhase("entering")
          // Site starts fading in while we zoom through
          setTimeout(onCompleteAction, 700)
          // Remove overlay after zoom completes
          setTimeout(() => setPhase("done"), 1800)
        }, 350)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onCompleteAction])

  if (phase === "done") return null

  const isEntering = phase === "entering"

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#4A043A]">

      {/* ── Scene — zooms toward the eye on enter ── */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={
          isEntering
            ? { scale: 7, opacity: 0, filter: "brightness(6) blur(4px)" }
            : { scale: 1, opacity: 1, filter: "brightness(1) blur(0px)" }
        }
        transition={{ duration: 1.6, ease: [0.4, 0, 1, 1] }}
        style={{ transformOrigin: "50% 50%" }}
      >
        {/* Atmospheric background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(161,5,53,0.22) 0%, rgba(74,4,58,0.75) 55%, #4A043A 100%)",
          }}
        />

        {/* Outer ambient ring */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 30% 20% at 50% 50%, rgba(250,195,53,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Corner label — like "TURN THE SOUND ON" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isEntering ? 0 : 0.45 }}
          transition={{ delay: 0.6 }}
          className="absolute top-8 right-8 flex items-center gap-2 font-mono text-[9px] tracking-[0.35em] uppercase text-[#FAC335]"
        >
          <div className="flex gap-[3px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#FAC335]" />
            ))}
          </div>
          Identity Scan
        </motion.div>

        {/* Top-left coordinate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isEntering ? 0 : 0.35 }}
          transition={{ delay: 0.8 }}
          className="absolute top-8 left-8 font-mono text-[9px] text-[#FAC335] tracking-widest"
        >
          {`48°51'N / 2°21'E`}
        </motion.div>

        {/* The Eye — portal centrepiece */}
        <motion.div
          className="relative z-10 w-full max-w-lg px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroEye />
        </motion.div>

        {/* Scanning label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: isEntering ? 0 : 0.55, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-5 font-mono text-[9px] tracking-[0.5em] uppercase text-[#FAC335]"
        >
          Scanning Identity
        </motion.p>
      </motion.div>

      {/* ── Flash bloom on entering ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 30% at 50% 50%, #FAC335, #DD192F, transparent)" }}
        initial={{ opacity: 0 }}
        animate={isEntering ? { opacity: [0, 0.6, 0] } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* ── Progress bar + counter ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="px-8 md:px-12 pb-8 flex items-end justify-between">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#D4A0C0]">
            Loading
          </span>
          <span className="font-mono text-4xl md:text-5xl font-bold text-[#FAC335] tabular-nums">
            {String(progress).padStart(2, "0")}
          </span>
        </div>
        <div className="h-[2px] bg-[#482D40]">
          <div
            className="h-full bg-[#FAC335]"
            style={{ width: `${progress}%`, transition: "width 80ms linear" }}
          />
        </div>
      </motion.div>
    </div>
  )
}