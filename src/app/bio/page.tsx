import Image from "next/image"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Bio — Acre",
  description: "Product Architect building at the intersection of design and blockchain.",
}

const gridItems = [
  { num: "01", abbr: "MP", label: "Meta Pool",        category: "Event Manager" },
  { num: "02", abbr: "KR", label: "KRNL Labs",        category: "Partnerships", href: "https://medium.com/@storyofacre/a-two-month-krnl-labs-diary-4f261856fcbd", flipLogo: "/KRNL Labs Logo - Black.png", flipLogoSize: "w-28 h-28" },
  { num: "03", abbr: "VA", label: "Vantage",          category: "Marketing Intern" },
  { num: "04", abbr: "TY", label: "TomyumDAO",        category: "Contributor" },
  { num: "05", abbr: "ET", label: "ETH Chula",        category: "Founder", href: "https://www.instagram.com/eth.chula/", flipLogo: "/projectPicture/eth-chula.png" },
  { num: "06", abbr: "EG", label: "Event Beggar",     category: "Event Maxi", href: "https://drive.google.com/drive/u/1/folders/1vJBg0jbJzo7nH7zbSNwDl9t3mdrRYQh5", flipLogo: "/acre-logo-black.png" },
  { num: "07", abbr: "CO", label: "Content",          category: "Practice", href: "https://medium.com/@acreforcoding", flipLogo: "/acre-logo-black.png" },
  { num: "08", abbr: "T1", label: "Team1",            category: "Avalanche", flipLogo: "/projectPicture/Avalanche/Team1_Logo.png", flipLogoSize: "w-24 h-24" },
  { num: "09", abbr: "",   label: "",                 category: "" },
]

const paragraphs = [
  "I've always been obsessed with the mechanics of wealth. Not just having it, but understanding how it's created, how it moves, and how to stay right at the center of it.",
  "My journey began in the stock market, but I quickly realized the real opportunity to build something massive wasn't in legacy systems. It was on-chain. I moved into crypto because I didn't want to just watch from the sidelines. I wanted to be part of the engine.",
  "That drive led me to contribute to teams at Avalanche Team1, Ethereum, Polkadot, and Meta Pool. I went from analyzing charts to building the infrastructure that makes them move.",
  "Today, I spend my time at hackathons, hosting events, and creating content that defines what's next. My goal is total immersion in the systems that generate value. I'm here to build, scale, and lead the next era of wealth.",
]

type GridItem = typeof gridItems[number]

function BioHeader({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "px-6" : "shrink-0 px-10"} border-b border-white/10 py-4 flex items-baseline gap-4`}>
      <span className={`${mobile ? "text-2xl" : "text-3xl"} font-kdam font-bold tracking-wide`}>Acre</span>
      <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30">Biography</span>
    </div>
  )
}

function BioPhoto({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "h-72 border-b" : "border-r"} relative border-white/10 overflow-hidden`}>
      <Image src="/acre.jpeg" alt="Acre" fill className={`object-cover ${mobile ? "object-center" : "object-top"}`} priority />
    </div>
  )
}

function AboutCopy({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "border-b" : "border-r overflow-hidden"} border-white/10 flex flex-col`}>
      <p className={`font-mono text-[9px] tracking-[0.4em] uppercase text-white/30 ${mobile ? "px-6" : "px-8"} pt-8 pb-6`}>About</p>
      <div className={`${mobile ? "px-6" : "px-8 overflow-y-auto"} pb-8 space-y-5 text-sm leading-relaxed text-white/55`}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  )
}

function BioFooter({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "px-6 flex-col gap-1" : "shrink-0 px-10 items-center justify-between"} py-4 flex`}>
      <span className="font-mono text-[9px] tracking-widest uppercase text-white/20">© 2026 Acre</span>
      <a
        href="mailto:acreforcoding@gmail.com"
        className={`font-mono text-[9px] tracking-widest uppercase text-white/30 ${mobile ? "" : "hover:text-white transition-colors"}`}
      >
        Get in touch → acreforcoding@gmail.com
      </a>
    </div>
  )
}

function BioGrid({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`${mobile ? "grid-cols-2 auto-rows-[130px] border-b" : "grid-cols-3 grid-rows-3 h-full"} grid divide-x divide-y divide-white/10 border-white/10`}>
      {gridItems.map((item) => <GridCell key={item.num} item={item} />)}
    </div>
  )
}

function GridCell({ item }: { item: GridItem }) {
  const faceContent = (
    <div className="p-4 xl:p-5 flex flex-col h-full">
      <span className="font-mono text-[9px] text-white/25 tracking-widest">{item.num}</span>
      <div className="mt-auto flex flex-col gap-1">
        <span className="font-kdam text-3xl xl:text-4xl leading-none tracking-wide">{item.abbr}</span>
        <span className="flex items-center gap-1 text-xs text-white/80 leading-snug mt-1">
          {item.label}
          {item.href && <ExternalLink className="size-3 shrink-0 opacity-50" />}
        </span>
        <span className="font-mono text-[9px] text-[#FAC335]/70 tracking-[0.15em] uppercase">{item.category}</span>
      </div>
    </div>
  )

  if (item.flipLogo) {
    const content = (
      <div className="relative h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover/flip:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">{faceContent}</div>
        <div className="absolute inset-0 flex items-center justify-center bg-[#FAC335] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image src={item.flipLogo} alt={item.label} width={112} height={112} className={`${item.flipLogoSize ?? "w-16 h-16"} object-contain`} />
        </div>
      </div>
    )

    return (
      item.href ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full [perspective:800px] group/flip">
          {content}
        </a>
      ) : (
        <div className="block h-full [perspective:800px] group/flip">
          {content}
        </div>
      )
    )
  }


  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full hover:bg-white/5 transition-colors">
      {faceContent}
    </a>
  ) : (
    <div className="h-full">{faceContent}</div>
  )
}

export default function Bio() {
  return (
    <>
      {/* ── Desktop: fixed viewport, no scroll ── */}
      <div className="hidden md:flex flex-col h-screen overflow-hidden pt-8 text-white">

        <BioHeader />

        <div className="flex-1 min-h-0 grid grid-cols-3 border-b border-white/10">

          <BioPhoto />
          <AboutCopy />
          <BioGrid />

        </div>

        <BioFooter />
      </div>

      {/* ── Mobile: natural scroll, stacked ── */}
      <div className="md:hidden flex flex-col min-h-screen pt-8 text-white">

        <BioHeader mobile />

        {/* Photo — mobile */}
        <BioPhoto mobile />
        <AboutCopy mobile />
        <BioGrid mobile />

        <BioFooter mobile />
      </div>
    </>
  )
}
