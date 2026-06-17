import Link from "next/link"
import { Header } from "@/components/common/header"
import SectionReveal from "@/components/common/SectionReveal"

export const metadata = {
  title: "Contribution — Acre",
  description: "Community contributions, events, and things I've helped build or support.",
}

const CONTRIBUTIONS = [
  {
    title: "Solana Thailand Fellowship",
    year: "June 2026",
    description: "✦ Builder",
    tags: ["IslandDAO", "Solana"],
    href: "https://x.com/Acrepedia/status/2067121939941106072?s=20",
  },
  {
    title: "Team1 × TU Blockchain Club: Breaking Into Blockchain & AI",
    year: "June 2026",
    description: "✦ Event Lead",
    tags: ["Avalanche"],
    href: "https://x.com/Acrepedia/status/2063442365675876652?s=20",
  },
  {
    title: "Team1 x Pudgy Padel Night",
    year: "May 2026",
    description: "✦ Organizer",
    tags: ["Avalanche"],
    href: "https://www.linkedin.com/posts/sanpaphat-porntongprasert_i-am-proud-to-share-that-on-may-24th-i-co-organized-ugcPost-7464970482300301312-PW3x/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFkl8YBM9kIT-ss5NQE7IN61bPWxQ15WJQ",
  },
  {
    title: "Road To Sub0 - Polkadot Builders Party Bangkok",
    year: "October 2025",
    description: "✦ Event Lead",
    tags: ["Polkadot"],
    href: "https://x.com/Acrepedia/status/1980595051450548415?s=20",
  },
  {
    title: "Road To Sub0 - Polkadot Bangkok Student Edition",
    year: "October 2025",
    description: "✦ Event Lead",
    tags: ["Polkadot"],
    href: "https://x.com/Acrepedia/status/1976296662298460493?s=20",
  },
  {
    title: "ETH Chula",
    year: "July 2025",
    description: "✦ Founder",
    tags: ["Ethereum"],
    href: "https://www.instagram.com/eth.chula/",
  },
]

export default function Contribution() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden pt-8 pb-16 px-6">
      <div className="relative flex w-full flex-col items-center justify-center max-w-4xl">

        <SectionReveal className="relative flex w-full flex-col gap-4">
          <Header
            title="Contribution"
            subtitle="Communities I've supported, events I've helped run, and things I've contributed to beyond just code."
          />
        </SectionReveal>

        <div className="flex flex-col gap-4 w-full py-4 font-mono">
          {CONTRIBUTIONS.map((item, index) => {
            const card = (
              <div className="border border-[#FAC335]/20 rounded-sm p-5 hover:border-[#FAC335]/50 transition-colors bg-[#1B0B14]/60">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="font-bold text-base text-white leading-snug">{item.title}</span>
                  <span className="text-xs font-bold shrink-0 whitespace-nowrap bg-[#FAC335] text-[#4A043A] px-2.5 py-1 rounded-sm mt-0.5">{item.year}</span>
                </div>
                <p className="text-sm text-[#EDE1C3]/70 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-[#FAC335]/30 text-[#FAC335]/70 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )

            return (
              <SectionReveal key={item.title} delay={index * 0.1}>
                {item.href ? (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </SectionReveal>
            )
          })}
        </div>

      </div>
    </main>
  )
}
