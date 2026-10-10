"use client"

import CustomCursor from "@/components/common/CustomCursor"
import Navigation from "@/components/common/Navigation"

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0 md:pt-14">{children}</div>
    </>
  )
}
