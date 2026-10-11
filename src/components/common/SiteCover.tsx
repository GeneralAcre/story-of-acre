"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { projectSlug } from "@/constance/work"

interface SiteCoverProps {
  title: string
  cover?: string
  wide?: boolean // full-width banner: a high-res still (<slug>-banner.jpg), no video
  className?: string
  sizes?: string
  priority?: boolean
}

// Recorded 8-second loop of a project's landing page (public/projectPicture/covers/<slug>.mp4),
// over a still frame (<slug>.jpg). Refresh them with `npm run covers`.
// Live iframes were dropped: on phones they loaded every project site at once,
// crashing Safari and playing the sites' audio. The loop only downloads and plays
// while the card is on screen and the tab is visible, and never plays when the
// viewer prefers reduced motion.
// `wide` banners and projects with a custom `cover` picture show just a picture.
export default function SiteCover({ title, cover, wide = false, className = "", sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw", priority = false }: SiteCoverProps) {
  const file = `/projectPicture/covers/${projectSlug(title)}`
  const hasVideo = !cover && !wide
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let onScreen = false
    const update = () => {
      if (onScreen && !document.hidden) video.play().catch(() => {})
      else video.pause()
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        update()
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    document.addEventListener("visibilitychange", update)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", update)
    }
  }, [hasVideo])

  return (
    <div className={`relative overflow-hidden border border-white/10 bg-[#141414] ${className}`}>
      <Image
        src={cover ?? `${file}${wide ? "-banner" : ""}.jpg`}
        alt={`${title} landing page`}
        fill
        sizes={sizes}
        quality={wide ? 90 : 75}
        priority={priority}
        className={`object-cover ${cover ? "object-center" : "object-top"}`}
      />
      {hasVideo && <video
        ref={videoRef}
        src={`${file}.mp4`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
      />}
    </div>
  )
}
