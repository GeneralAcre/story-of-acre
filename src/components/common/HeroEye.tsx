"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function HeroEye() {
  const [blinking, setBlinking] = useState(false)

  // Random blink every 3–7 s
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const loop = () => {
      t = setTimeout(
        () => {
          setBlinking(true)
          setTimeout(() => {
            setBlinking(false)
            loop()
          }, 220)
        },
        3200 + Math.random() * 3800,
      )
    }
    loop()
    return () => clearTimeout(t)
  }, [])

  const CX = 300
  const CY = 150
  const IRIS_R = 84
  const PUPIL_R = 31

  // ISO-style date string
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "/")

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Ambient glow behind eye */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(161,5,53,0.18) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 600 300"
        className="w-full h-auto relative z-10"
        aria-hidden="true"
      >
        <defs>
          {/* Eye shape clip */}
          <clipPath id="eyeClip">
            <path d="M 60 150 C 160 28 440 28 540 150 C 440 272 160 272 60 150 Z" />
          </clipPath>

          {/* Iris clip */}
          <clipPath id="irisClip">
            <circle cx={CX} cy={CY} r={IRIS_R} />
          </clipPath>

          {/* Iris gradient */}
          <radialGradient id="irisGrad" cx="42%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#3D0025" />
            <stop offset="30%" stopColor="#A10535" />
            <stop offset="62%" stopColor="#700020" />
            <stop offset="100%" stopColor="#1A0010" />
          </radialGradient>

          {/* Scan line glow */}
          <filter id="scanGlow" x="-20%" y="-400%" width="140%" height="900%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Outer eye glow */}
          <filter id="eyeGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── EYE CONTENTS (clipped to eye shape) ─── */}
        <g clipPath="url(#eyeClip)">

          {/* Sclera */}
          <ellipse cx={CX} cy={CY} rx={255} ry={130} fill="#0d0008" />

          {/* Iris base */}
          <circle cx={CX} cy={CY} r={IRIS_R} fill="url(#irisGrad)" />

          {/* Iris texture rings */}
          {[74, 62, 50].map((r) => (
            <circle
              key={r}
              cx={CX} cy={CY} r={r}
              fill="none"
              stroke="#DD192F"
              strokeWidth="0.6"
              opacity="0.45"
            />
          ))}

          {/* Iris grid (clipped to iris circle) */}
          <g clipPath="url(#irisClip)">
            {Array.from({ length: 9 }, (_, i) => i - 4).map((n) => (
              <g key={n}>
                <line
                  x1={CX + n * 20} y1={CY - IRIS_R}
                  x2={CX + n * 20} y2={CY + IRIS_R}
                  stroke="#FAC335" strokeWidth="0.45" opacity="0.28"
                />
                <line
                  x1={CX - IRIS_R} y1={CY + n * 20}
                  x2={CX + IRIS_R} y2={CY + n * 20}
                  stroke="#FAC335" strokeWidth="0.45" opacity="0.28"
                />
              </g>
            ))}
          </g>

          {/* Pupil shadow */}
          <circle cx={CX} cy={CY} r={PUPIL_R + 5} fill="#080004" />
          {/* Pupil */}
          <circle cx={CX} cy={CY} r={PUPIL_R} fill="#000000" />
          {/* Corneal highlight */}
          <circle cx={CX - 11} cy={CY - 13} r={7} fill="white" opacity="0.11" />
          <circle cx={CX - 6}  cy={CY - 17} r={3} fill="white" opacity="0.07" />

          {/* ── Scan line ── */}
          <motion.rect
            x={55} width={490} height={2}
            fill="#FAC335"
            opacity={0.75}
            filter="url(#scanGlow)"
            animate={{ y: [28, 272, 28] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />

          {/* ── Blink overlays ── */}
          {/* Upper lid: rect covering top half, scales from top edge (y=0) */}
          <motion.rect
            x={0} y={0} width={600} height={150}
            fill="#4A043A"
            style={{ transformOrigin: "300px 0px" }}
            animate={{ scaleY: blinking ? 1 : 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
          {/* Lower lid: rect covering bottom half, scales from bottom edge (y=300) */}
          <motion.rect
            x={0} y={150} width={600} height={150}
            fill="#4A043A"
            style={{ transformOrigin: "300px 300px" }}
            animate={{ scaleY: blinking ? 1 : 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
        </g>

        {/* ─── Eye outline ─── */}
        <path
          d="M 60 150 C 160 28 440 28 540 150 C 440 272 160 272 60 150 Z"
          fill="none"
          stroke="#FAC335"
          strokeWidth="1"
          opacity="0.5"
          filter="url(#eyeGlow)"
        />

        {/* ─── Targeting corners ─── */}
        {/* Top-left */}
        <path d="M 48 85 L 48 52 L 88 52"  fill="none" stroke="#FAC335" strokeWidth="1.8" />
        {/* Top-right */}
        <path d="M 552 85 L 552 52 L 512 52" fill="none" stroke="#FAC335" strokeWidth="1.8" />
        {/* Bottom-left */}
        <path d="M 48 215 L 48 248 L 88 248" fill="none" stroke="#FAC335" strokeWidth="1.8" />
        {/* Bottom-right */}
        <path d="M 552 215 L 552 248 L 512 248" fill="none" stroke="#FAC335" strokeWidth="1.8" />

        {/* ─── Pupil reticle ─── */}
        <circle
          cx={CX} cy={CY} r={38}
          fill="none" stroke="#FAC335" strokeWidth="0.5" opacity="0.3"
          strokeDasharray="3 6"
        />
        {/* crosshair */}
        <line x1={CX-12} y1={CY} x2={CX-6} y2={CY} stroke="#FAC335" strokeWidth="1" opacity="0.5" />
        <line x1={CX+6}  y1={CY} x2={CX+12} y2={CY} stroke="#FAC335" strokeWidth="1" opacity="0.5" />
        <line x1={CX} y1={CY-12} x2={CX} y2={CY-6} stroke="#FAC335" strokeWidth="1" opacity="0.5" />
        <line x1={CX} y1={CY+6}  x2={CX} y2={CY+12} stroke="#FAC335" strokeWidth="1" opacity="0.5" />

        {/* ─── Data readouts embedded in SVG ─── */}
        {/* Left side */}
        <text x="8"  y="130" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6">ID:8S8C2025-T</text>
        <text x="8"  y="143" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6">DB:{dateStr}</text>
        <text x="8"  y="156" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6">CLASS:5</text>
        <text x="8"  y="169" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6">STATUS:ACTIVE</text>
        {/* Right side */}
        <text x="592" y="130" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6" textAnchor="end">RETINA_SCAN</text>
        <text x="592" y="143" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6" textAnchor="end">ANALYZING...</text>
        <text x="592" y="156" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6" textAnchor="end">MATCH:99.7%</text>
        <text x="592" y="169" fontFamily="monospace" fontSize="9" fill="#FAC335" opacity="0.6" textAnchor="end">VERIFIED</text>
      </svg>
    </div>
  )
}