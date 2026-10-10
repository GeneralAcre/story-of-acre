"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, BookOpen, Trophy, type LucideIcon } from "lucide-react"

const navLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Bio", href: "/bio", icon: User },
  { label: "Case Studies", href: "/case-studies", icon: BookOpen },
  { label: "Contribution", href: "/contribution", icon: Trophy },
]

export default function Navigation() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <>
      {/* Desktop: top header */}
      <header className="hidden md:flex fixed top-0 inset-x-0 z-50 h-14 items-center justify-between border-b border-white/10 bg-black/90 px-8 backdrop-blur-md">
        <Link href="/" aria-label="Home">
          <Image src="/acre-logo.png" alt="Acre" width={32} height={32} className="h-8 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                isActive(link.href)
                  ? "text-white underline underline-offset-8 decoration-1"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile: bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-4 border-t border-white/10 bg-black/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
        {navLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
              isActive(href) ? "text-white" : "text-white/40"
            }`}
          >
            <Icon className="size-5" strokeWidth={isActive(href) ? 2.25 : 1.75} />
            {label}
          </Link>
        ))}
      </nav>
    </>
  )
}
