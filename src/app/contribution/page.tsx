import Link from "next/link"
import Image from "next/image"
import SectionReveal from "@/components/common/SectionReveal"

export const metadata = {
  title: "Contribution — Acre",
  description: "Community contributions, events, and things I've helped build or support.",
}

const CONTRIBUTIONS = [
  {
    title: "World Cup FINAL Watch Party by Team1 & Superteam Thailand",
    year: "July 2026",
    role: "Organizer",
    tags: ["Avalanche", "Solana"],
    image: "/contribution/WorldCup-Final.png",
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

export default function Contribution() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden pt-16 sm:pt-8 pb-16 px-6">
      <div className="relative flex w-full flex-col items-center justify-center max-w-5xl">

        <SectionReveal className="w-full mb-8">
          <h1 className="font-[family-name:var(--font-kdam-next)] text-2xl sm:text-3xl text-white leading-tight mb-4">
            Building Communities, Leading Events
          </h1>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 w-full">
            {["Events", "Workshops", "Hackathons", "Meetups", "Ecosystem Growth", "Student Clubs", "Fellowships"].map((kw, i, arr) => (
              <span key={kw} className="text-lg sm:text-xl text-[#FAC335] font-mono whitespace-nowrap">
                {kw}{i < arr.length - 1 ? <span className="mx-2 opacity-60">✦</span> : null}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#EDE1C3]/60 font-mono w-full leading-relaxed">
            Beyond writing code, I show up — organizing events, running workshops, founding clubs, and supporting the communities that make web3 worth building in. These are the things I've helped make happen.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-4 font-mono">
          {CONTRIBUTIONS.map((item, index) => {
            const card = (
              <div className="flex flex-col h-full border border-[#FAC335]/20 rounded-sm overflow-hidden hover:border-[#FAC335]/50 transition-colors bg-[#1B0B14]/60 group">
                {/* Image area */}
                <div className="relative w-full aspect-[4/3] bg-[#2A0E20] overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Placeholder pattern */}
                      <div className="w-full h-full grid grid-cols-6 grid-rows-4 opacity-10">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="border border-[#FAC335]/30" />
                        ))}
                      </div>
                      <span className="absolute text-[#FAC335]/30 text-xs tracking-widest uppercase">no image</span>
                    </div>
                  )}
                  {/* Year badge */}
                  <span className="absolute top-3 right-3 text-xs font-bold bg-[#4A043A] text-[#FAC335] border border-[#FAC335]/40 px-2.5 py-1 rounded-sm">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <p className="font-bold text-sm text-white leading-snug">{item.title}</p>
                  <p className="text-xs text-[#EDE1C3]/60">✦ {item.role}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#FAC335] text-[#4A043A] font-bold px-2 py-0.5 rounded-sm"
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
        </div>

      </div>
    </main>
  )
}
