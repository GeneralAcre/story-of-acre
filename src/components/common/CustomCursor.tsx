"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

export default function CustomCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)

  const springConfig = useMemo(() => ({ damping: 22, stiffness: 280, mass: 0.5 }), [])
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovering(true)
      }
    }

    const onLeave = () => setHovering(false)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onEnter)
    document.addEventListener("mouseout", onLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onEnter)
      document.removeEventListener("mouseout", onLeave)
    }
  }, [mouseX, mouseY])

  if (!visible) return null

  return (
    <>
      {/* Dot — snaps instantly */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-[#FAC335]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] border border-[#FAC335]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  )
}
