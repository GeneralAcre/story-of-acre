"use client"

import { useCallback, useState } from "react"
import { motion } from "motion/react"
import LoadingScreen from "@/components/common/LoadingScreen"
import CustomCursor from "@/components/common/CustomCursor"
import Navigation from "@/components/common/Navigation"

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <CustomCursor />
      <Navigation />
      <LoadingScreen onCompleteAction={handleLoadComplete} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  )
}
