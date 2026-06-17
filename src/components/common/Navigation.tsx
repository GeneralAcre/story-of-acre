"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bio", href: "/bio" },
  { label: "Contribution", href: "/contribution" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="fixed top-5 right-6 z-50">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
        className="focus:outline-none relative z-50"
      >
        <Image src="/acre-logo.png" alt="Acre" width={32} height={32} className="h-8 w-auto" priority />
      </button>

      {/* Mobile: full-screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1B0B14]/98 backdrop-blur-md flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-kdam text-3xl font-bold text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop: small dropdown */}
      {isOpen && (
        <div className="hidden md:block absolute right-0 mt-3 w-40 rounded-2xl border border-white/10 bg-[#1B0B14]/95 backdrop-blur-md shadow-xl overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
