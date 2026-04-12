"use client"

import { ReactNode, useEffect, useState } from "react"
import { ReactLenis } from "lenis/react"

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice) return <>{children}</>

  return <ReactLenis root>{children}</ReactLenis>
}