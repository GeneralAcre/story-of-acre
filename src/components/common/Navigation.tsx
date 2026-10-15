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
  // Project pages are opened from the Home grid, so they keep Home highlighted
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/projects") : pathname.startsWith(href)

  return (
    <>
      {/* Desktop: top header */}
      <header className="hidden md:flex fixed top-0 inset-x-0 z-50 h-14 items-center justify-between border-b border-white/10 bg-black/90 px-8 backdrop-blur-md">
        <Link href="/" aria-label="Home">
          <Image src="/acre-star.png" alt="Acre" width={32} height={32} className="h-8 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                isActive(link.href)
                  ? "bg-white/15 text-white"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile: bottom tab bar. Opaque bg (no translucency/blur) so iOS Safari tints the area under
          its floating toolbar to match; the ::after strip also covers that area if Safari doesn't. */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-4 border-t border-white/10 bg-[#0a0a0a] pb-[env(safe-area-inset-bottom)] after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-40 after:bg-[#0a0a0a] after:content-['']">
        {navLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 pb-2 pt-2.5 text-[11px] font-medium transition-colors ${
              isActive(href) ? "text-white" : "text-white/50"
            }`}
          >
            <Icon className="size-[22px]" strokeWidth={isActive(href) ? 2 : 1.5} />
            {label}
          </Link>
        ))}
      </nav>
    </>
  )
}
