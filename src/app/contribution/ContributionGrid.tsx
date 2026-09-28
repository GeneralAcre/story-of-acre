"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronUp } from "lucide-react"
import SectionReveal from "@/components/common/SectionReveal"

const CONTRIBUTIONS = [
  {
    title: "Team1 Codebase Hackathon : Chula Edition",
    year: "September 2026",
    role: "Event Lead",
    tags: ["Avalanche"],
    image: "/contribution/Codebase-Chula-Hackthon.png",
    href: "https://x.com/Acrepedia/status/2104527775948497039?s=20",
  },
  {
    title: "Team1 x Chula: Avalanche Builder Workshop & Networking Bangkok",
    year: "September 2026",
    role: "Event Lead",
    tags: ["Avalanche"],
    image: "/contribution/Team1-chula-workshop.png",
    href: "https://x.com/Acrepedia/status/2096555740383375601?s=20",
  },
  {
    title: "Padel Rave Bangkok",
    year: "August 2026",
    role: "Organizer",
    tags: ["Avalanche"],
    image: "/contribution/Padel-Rave.png",
    href: "https://x.com/AvaxTeam1/status/2087606611527233758?s=20",
  },
  {
    title: "World Cup FINAL Watch Party by Team1 & Superteam Thailand",
    year: "July 2026",
    role: "Organizer",
    tags: ["Avalanche", "Solana"],
    image: "/contribution/WorldCup-Final.png",
    href: "https://x.com/Acrepedia/status/2079249407825105028?s=20",
  },
  {
    title: "Team1 World Cup Watch Party",
    year: "July 2026",
    role: "Event Lead",
    tags: ["Avalanche"],
    image: "/contribution/Team1-Watch-Party.png",
    href: "https://x.com/Acrepedia/status/2073727197404451264?s=20",
  },
  {
    title: "Solana Thailand Fellowship",
    year: "June 2026",
    role: "Builder",
    tags: ["IslandDAO", "Solana"],
    image: "/contribution/Solana-fellow.png",
    href: "https://x.com/Acrepedia/status/2067121939941106072?s=20",
  },
  {
    title: "Team1 × TU Blockchain Club: Breaking Into Blockchain & AI",
    year: "June 2026",
    role: "Event Lead",
    tags: ["Avalanche"],
    image: "/contribution/Avax-TU.png",
    href: "https://x.com/Acrepedia/status/2063442365675876652?s=20",
  },
  {
    title: "Team1 x Pudgy Padel Night",
    year: "May 2026",
    role: "Organizer",
    tags: ["Avalanche"],
    image: "/contribution/Team1-Pudgy.png",
    href: "https://www.linkedin.com/posts/sanpaphat-porntongprasert_i-am-proud-to-share-that-on-may-24th-i-co-organized-ugcPost-7464970482300301312-PW3x/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFkl8YBM9kIT-ss5NQE7IN61bPWxQ15WJQ",
  },
  {
    title: "Road To Sub0 - Polkadot Builders Party Bangkok",
    year: "October 2025",
    role: "Event Lead",
    tags: ["Polkadot"],
    image: "/contribution/Polkadot-Builder.png",
    href: "https://x.com/Acrepedia/status/1980595051450548415?s=20",
  },
  {
    title: "Road To Sub0 - Polkadot Bangkok Student Edition",
    year: "October 2025",
    role: "Event Lead",
    tags: ["Polkadot"],
    image: "/contribution/Polkadot-student.png",
    href: "https://x.com/Acrepedia/status/1976296662298460493?s=20",
  },
  {
    title: "ETH Chula",
    year: "July 2025",
    role: "Founder",
    tags: ["Ethereum"],
    image: "/contribution/ETH-chula.png",
    href: "https://www.instagram.com/eth.chula/",
  },
]

const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function monthOf(year: string) {
  return year.split(" ")[0]
}

export default function ContributionGrid() {
  const [open, setOpen] = useState(false)
  const [month, setMonth] = useState<string>("All")
  const wrapperRef = useRef<HTMLDivElement>(null)

  const months = useMemo(() => {
    const present = new Set(CONTRIBUTIONS.map((item) => monthOf(item.year)))
    return MONTH_ORDER.filter((m) => present.has(m))
  }, [])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const filtered = month === "All" ? CONTRIBUTIONS : CONTRIBUTIONS.filter((item) => monthOf(item.year) === month)

  return (
    <>
      <SectionReveal className="w-full mb-10">
        <div ref={wrapperRef} className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <h2 className="font-[family-name:var(--font-kdam-next)] text-xl leading-tight text-white sm:text-2xl">
            WHAT DID I CONTRIBUTE ON
          </h2>
          <span className="bg-[#FAC335] px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-[#4A043A] sm:text-base">
            A MONTH LIKE...
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-haspopup="listbox"
              className="flex items-center gap-2 border-b-2 border-[#FAC335] pb-1 font-mono text-base text-white transition-colors hover:text-[#FAC335] sm:text-lg"
            >
              {month === "All" ? "all months" : month.toLowerCase()}
              <ChevronUp className={`size-4 shrink-0 transition-transform duration-200 ${open ? "" : "rotate-180"}`} />
            </button>

            {open && (
              <div
                role="listbox"
                className="absolute left-0 top-full z-20 mt-3 flex min-w-[200px] flex-col border border-[#FAC335]/30 bg-[#1B0B14] py-2 font-mono text-sm shadow-2xl sm:text-base"
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={month === "All"}
                  onClick={() => { setMonth("All"); setOpen(false) }}
                  className={`px-4 py-2 text-left transition-colors hover:text-[#FAC335] ${month === "All" ? "text-[#FAC335]" : "text-white"}`}
                >
                  all months
                </button>
                {months.map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="option"
                    aria-selected={month === m}
                    onClick={() => { setMonth(m); setOpen(false) }}
                    className={`px-4 py-2 text-left transition-colors hover:text-[#FAC335] ${month === m ? "text-[#FAC335]" : "text-white"}`}
                  >
                    {m.toLowerCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionReveal>

      <div className="grid w-full grid-cols-1 gap-5 py-4 font-mono sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => {
          const card = (
            <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#FAC335]/20 bg-[#1B0B14]/60 transition-colors hover:border-[#FAC335]/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2A0E20]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid h-full w-full grid-cols-6 grid-rows-4 opacity-10">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-[#FAC335]/30" />
                      ))}
                    </div>
                    <span className="absolute text-xs uppercase tracking-widest text-[#FAC335]/30">no image</span>
                  </div>
                )}
                <span className="absolute top-3 right-3 rounded-sm border border-[#FAC335]/40 bg-[#4A043A] px-2.5 py-1 text-xs font-bold text-[#FAC335]">
                  {item.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="text-sm font-bold leading-snug text-white">{item.title}</p>
                <p className="text-xs text-[#EDE1C3]/60">✦ {item.role}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-[#FAC335] px-2 py-0.5 text-xs font-bold text-[#4A043A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )

          return (
            <SectionReveal key={item.title} delay={index * 0.08} className="h-full">
              {item.href ? (
                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </SectionReveal>
          )
        })}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-[#EDE1C3]/50">
            Nothing to show for that month yet.
          </p>
        )}
      </div>
    </>
  )
}
