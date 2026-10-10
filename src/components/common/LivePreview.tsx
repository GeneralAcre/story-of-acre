"use client"

import { useEffect, useRef, useState } from "react"

// Width the site is rendered at before being scaled down to fit the card,
// so every project shows its desktop layout.
const VIEWPORT_WIDTH = 1280

interface LivePreviewProps {
  url: string
  title: string
  className?: string
}

export default function LivePreview({ url, title, className = "" }: LivePreviewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const resize = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    resize.observe(el)

    // Only load the site once the card is about to scroll into view.
    const intersect = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          intersect.disconnect()
        }
      },
      { rootMargin: "400px" }
    )
    intersect.observe(el)

    return () => {
      resize.disconnect()
      intersect.disconnect()
    }
  }, [])

  const scale = size.width / VIEWPORT_WIDTH

  return (
    <div
      ref={ref}
      className={`relative block overflow-hidden border border-white/10 bg-[#141414] ${className}`}
    >
      {inView && scale > 0 && (
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            width: VIEWPORT_WIDTH,
            height: size.height / scale,
            transform: `scale(${scale})`,
          }}
        />
      )}

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 animate-pulse">
            Loading
          </span>
        </div>
      )}
    </div>
  )
}
