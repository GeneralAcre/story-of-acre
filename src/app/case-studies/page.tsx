import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import SectionReveal from "@/components/common/SectionReveal"

export const metadata = {
  title: "Case Studies — Acre",
  description: "Research and analysis of crypto markets, products, and tokenomics.",
}

const CASE_STUDIES = [
  {
    title: "Before the TGE: Why GRVT's Team and Tokenomics Converge Into the Strongest Risk & Reward Setup in DeFi Derivatives",
    category: "Research · DeFi Derivatives",
    image: "/CaseStudies/GRVT-Case-Cover.png",
    href: "https://drive.google.com/drive/u/1/folders/1U-g2Bg5uOLE9_D17HVlDj5tZpBvQ1Oce",
  },
  {
    title: "Megapot Odds Explained: What Are Your Real Chances of Winning?",
    category: "Research · Crypto Lottery",
    image: "/CaseStudies/Megapot-Case-Cover.png",
    href: "https://drive.google.com/drive/u/1/folders/15Bw_hWhzOG8n3qnmZTVzxRIXS94ShbxF",
  },
]

export default function CaseStudies() {
  return (
    <main className="min-h-screen overflow-x-hidden px-6 pb-16 pt-20 sm:pt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <SectionReveal className="mb-8 max-w-2xl sm:mb-12">
          <h1 className="font-kdam text-2xl leading-tight text-white sm:text-3xl md:text-5xl">Case Studies</h1>
          <p className="mt-4 font-mono text-sm leading-relaxed text-[#EDE1C3]/60 sm:mt-5">
            Research notes that unpack the market mechanics, risks, and incentives behind crypto products.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-8">
          {CASE_STUDIES.map((study, index) => (
            <SectionReveal key={study.title} delay={index * 0.1}>
              <article className="group grid min-h-[280px] grid-cols-[30%_70%] items-stretch overflow-hidden border border-[#FAC335]/20 bg-[#1B0B14]/60 transition-colors hover:border-[#FAC335]/50 sm:min-h-[320px] md:min-h-[360px]">
                <div className="relative w-full overflow-hidden bg-[#2A0E20]">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study cover`}
                    fill
                    sizes="(max-width: 768px) 30vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-start p-4 sm:p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#FAC335] sm:text-sm">{study.category}</p>
                  <h2 className="mt-3 font-kdam text-lg leading-snug text-white sm:mt-4 sm:text-2xl md:text-3xl">{study.title}</h2>
                  <Link
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 border border-[#FAC335] px-3 py-1.5 font-mono text-xs text-[#FAC335] transition-colors hover:bg-[#FAC335] hover:text-[#1A0015] sm:mt-6 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    Read case study
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </main>
  )
}
