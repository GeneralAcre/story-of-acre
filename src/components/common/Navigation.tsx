"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Content", href: "/content" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/50 border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-kdam text-xl font-bold text-primary">
            Acre
          </Link>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header with Hamburger */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden backdrop-blur-sm bg-background/50 border-b border-border">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-kdam text-lg font-bold text-primary">
            Acre
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="size-6 text-foreground" />
            ) : (
              <Menu className="size-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  )
}
