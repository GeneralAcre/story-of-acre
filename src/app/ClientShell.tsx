"use client"

import Navigation from "@/components/common/Navigation"

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 md:pt-14">{children}</div>
    </>
  )
}
