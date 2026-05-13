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
  { num: "08", abbr: "",   label: "",                 category: "" },
  { num: "09", abbr: "",   label: "",                 category: "" },
]

const paragraphs = [
  "I've always been obsessed with the mechanics of wealth. Not just having it, but understanding how it's created, how it moves, and how to stay right at the center of it.",
  "My journey began in the stock market, but I quickly realized the real opportunity to build something massive wasn't in legacy systems. It was on-chain. I moved into crypto because I didn't want to just watch from the sidelines. I wanted to be part of the engine.",
  "That drive led me to contribute to teams at Avalanche Team1, Ethereum, Polkadot, and Meta Pool. I went from analyzing charts to building the infrastructure that makes them move.",
  "Today, I spend my time at hackathons, hosting events, and creating content that defines what's next. My goal is total immersion in the systems that generate value. I'm here to build, scale, and lead the next era of wealth.",
]

function GridCell({ item }: { item: typeof gridItems[number] }) {
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

  // Flip with logo (ETH Chula)
  if (item.flipLogo) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer"
        className="block h-full [perspective:800px] group/flip">
        <div className="relative h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover/flip:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 [backface-visibility:hidden]">{faceContent}</div>
          <div className="absolute inset-0 flex items-center justify-center bg-[#FAC335] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img src={item.flipLogo} alt={item.label} className={`${item.flipLogoSize ?? "w-16 h-16"} object-contain`} />
          </div>
        </div>
      </a>
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

        <div className="shrink-0 border-b border-white/10 px-10 py-4 flex items-baseline gap-4">
          <span className="font-kdam text-3xl font-bold tracking-wide">Acre</span>
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30">Biography</span>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-3 border-b border-white/10">

          <div className="relative border-r border-white/10 overflow-hidden">
            <Image src="/acre.jpeg" alt="Acre" fill className="object-cover object-top" priority />
          </div>

          <div className="border-r border-white/10 overflow-hidden flex flex-col">
            <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30 px-8 pt-8 pb-6">About</p>
            <div className="px-8 pb-8 space-y-5 text-sm leading-relaxed text-white/55 overflow-y-auto">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 divide-x divide-y divide-white/10 h-full">
            {gridItems.map((item) => <GridCell key={item.num} item={item} />)}
          </div>

        </div>

        <div className="shrink-0 px-10 py-4 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-widest uppercase text-white/20">© 2026 Acre</span>
          <a href="mailto:acreforcoding@gmail.com"
            className="font-mono text-[9px] tracking-widest uppercase text-white/30 hover:text-white transition-colors">
            Get in touch → acreforcoding@gmail.com
          </a>
        </div>
      </div>

      {/* ── Mobile: natural scroll, stacked ── */}
      <div className="md:hidden flex flex-col min-h-screen pt-8 text-white">

        <div className="border-b border-white/10 px-6 py-4 flex items-baseline gap-4">
          <span className="font-kdam text-2xl font-bold tracking-wide">Acre</span>
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30">Biography</span>
        </div>

        {/* Photo — mobile */}
        <div className="relative border-b border-white/10 h-72">
          <Image src="/acre.jpeg" alt="Acre" fill className="object-cover object-center" priority />
        </div>

        <div className="border-b border-white/10 flex flex-col">
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30 px-6 pt-8 pb-6">About</p>
          <div className="px-6 pb-8 space-y-5 text-sm leading-relaxed text-white/55">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="grid grid-cols-2 auto-rows-[130px] divide-x divide-y divide-white/10 border-b border-white/10">
          {gridItems.map((item) => <GridCell key={item.num} item={item} />)}
        </div>

        <div className="px-6 py-4 flex flex-col gap-1">
          <span className="font-mono text-[9px] tracking-widest uppercase text-white/20">© 2026 Acre</span>
          <a href="mailto:acreforcoding@gmail.com"
            className="font-mono text-[9px] tracking-widest uppercase text-white/30">
            Get in touch → acreforcoding@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
