"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { projectSlug } from "@/constance/work"

interface SiteCoverProps {
  title: string
  className?: string
  sizes?: string
  priority?: boolean
}

// Recorded 8-second loop of a project's landing page (public/projectPicture/covers/<slug>.mp4),
// over a still frame (<slug>.jpg). Refresh both with `npm run covers`.
// Live iframes were dropped: on phones they loaded every project site at once,
// crashing Safari and playing the sites' audio. The loop only downloads and plays
// while the card is on screen, and never plays when the viewer prefers reduced motion.
export default function SiteCover({ title, className = "", sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw", priority = false }: SiteCoverProps) {
  const slug = projectSlug(title)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative overflow-hidden border border-white/10 bg-[#141414] ${className}`}>
      <Image
        src={`/projectPicture/covers/${slug}.jpg`}
        alt={`${title} landing page`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
      <video
        ref={videoRef}
        src={`/projectPicture/covers/${slug}.mp4`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
