"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onCompleteAction: () => void
}

const LOAD_DURATION = 1800
const SEGMENTS = 16

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

const BAR_WIDTH = 320

export default function LoadingScreen({ onCompleteAction }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = Date.now()
    let raf: number

    const tick = () => {
      const t = Math.min((Date.now() - start) / LOAD_DURATION, 1)
      setProgress(Math.floor(easeInOutCubic(t) * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setProgress(100)
        setTimeout(() => {
          onCompleteAction()
          setOpacity(0)
          setTimeout(() => setGone(true), 600)
        }, 400)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onCompleteAction])

  if (gone) return null

  const filled = Math.round((progress / 100) * SEGMENTS)

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#4A043A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-pixel, "Courier New", monospace)',
        opacity,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* LOADING... XX% */}
      <div
        style={{
          width: BAR_WIDTH,
          display: 'flex',
          justifyContent: 'space-between',
          color: '#FAC335',
          fontSize: 13,
          letterSpacing: '0.1em',
          marginBottom: 10,
        }}
      >
        <span>LOADING...</span>
        <span>{progress}%</span>
      </div>

      {/* Segmented pixel bar */}
      <div
        style={{
          width: BAR_WIDTH,
          border: '3px solid #FAC335',
          padding: '3px 2px',
          display: 'flex',
          gap: 3,
          backgroundColor: '#2A001F',
          boxSizing: 'border-box',
        }}
      >
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 22,
              backgroundColor: i < filled ? '#FAC335' : 'transparent',
            }}
          />
        ))}
      </div>
    </div>
  )
}
