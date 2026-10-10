"use client"

import CustomCursor from "@/components/common/CustomCursor"
import Navigation from "@/components/common/Navigation"

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="pb-16 md:pb-0 md:pt-14">{children}</div>
    </>
  )
}
