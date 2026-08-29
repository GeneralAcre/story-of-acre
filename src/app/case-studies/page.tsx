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
    challenge: "Evaluate the setup around GRVT before its token generation event, where execution, incentives, and market structure all matter.",
    approach: "Examines the team's positioning alongside the protocol's tokenomics to identify the factors shaping the thesis.",
    outcome: "A structured view of the risks and potential upside in GRVT's pre-TGE derivatives-market setup.",
    href: "https://drive.google.com/drive/u/1/folders/1U-g2Bg5uOLE9_D17HVlDj5tZpBvQ1Oce",
  },
  {
    title: "Megapot Odds Explained: What Are Your Real Chances of Winning?",
    category: "Research · Crypto Lottery",
    image: "/CaseStudies/Megapot-Case-Cover.png",
    challenge: "Move past headline jackpot figures to understand what the odds actually mean for a Megapot participant.",
    approach: "Breaks down the probability behind the game and puts potential outcomes into practical context.",
    outcome: "A clearer, more grounded way to assess the real chance of winning before taking part.",
    href: "https://drive.google.com/drive/u/1/folders/15Bw_hWhzOG8n3qnmZTVzxRIXS94ShbxF",
  },
]

export default function CaseStudies() {
  return (
    <main className="min-h-screen overflow-x-hidden px-6 pb-16 pt-20 sm:pt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <SectionReveal className="mb-12 max-w-2xl">
          <h1 className="font-kdam text-3xl leading-tight text-white sm:text-5xl">Case Studies</h1>
          <p className="mt-5 font-mono text-sm leading-relaxed text-[#EDE1C3]/60">
            Research notes that unpack the market mechanics, risks, and incentives behind crypto products.
          </p>
        </SectionReveal>

        <div className="flex flex-col gap-8">
          {CASE_STUDIES.map((study, index) => (
            <SectionReveal key={study.title} delay={index * 0.1}>
              <article className="group overflow-hidden border border-[#FAC335]/20 bg-[#1B0B14]/60 transition-colors hover:border-[#FAC335]/50 md:grid md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
                <div className="relative min-h-64 overflow-hidden bg-[#2A0E20] md:min-h-full">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-5 left-5 font-kdam text-5xl text-[#FAC335] drop-shadow-md">{study.number}</span>
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#FAC335]">{study.category}</p>
                  <h2 className="mt-3 font-kdam text-3xl text-white">{study.title}</h2>
                  <dl className="mt-7 space-y-5 font-mono text-sm leading-relaxed">
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-white/35">Challenge</dt>
                      <dd className="text-[#EDE1C3]/70">{study.challenge}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-white/35">Approach</dt>
                      <dd className="text-[#EDE1C3]/70">{study.approach}</dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-[0.16em] text-white/35">Outcome</dt>
                      <dd className="text-[#EDE1C3]/70">{study.outcome}</dd>
                    </div>
                  </dl>
                  <Link
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 border border-[#FAC335] px-4 py-2 font-mono text-sm text-[#FAC335] transition-colors hover:bg-[#FAC335] hover:text-[#1A0015]"
                  >
                    Read case study <ArrowUpRight className="size-4" aria-hidden="true" />
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
