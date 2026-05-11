import { Header } from "@/components/common/header"
import SectionReveal from "@/components/common/SectionReveal"
import ContentCard from "@/components/common/ContentCard"

export const metadata = {
  title: "Content — Acre",
  description: "Featured writing presented in a compact card format for easy browsing.",
}

const CONTENT_CARDS = [
  {
    category: "Cryptocurrency",
    date: "April 2026",
    readTime: "5 min read",
    title: "Megapot vs Thai Government Lottery: Which Offers Better Odds?",
    description:
      "The article talks about the odd connection between crypto lottery projects and the Thai lottery.",
    href: "https://medium.com/@acreforcoding/megapot-vs-thai-government-lottery-which-offers-better-odds-60272cb65fcc",
  },
    {
    category: "Cryptocurrency",
    date: "April 2026",
    readTime: "6 min read",
    title: "Before the TGE Why GRVT's Team and Tokenomics Converge Into the Strongest Risk",
    description:
      "The article talks about the odd connection between crypto lottery projects and the Thai lottery.",
    pdfPath: "/documents/grvt-content.pdf",
  },
]

export default function Content() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden pt-8 pb-16 px-6">
      <div className="relative flex w-full flex-col items-center justify-center max-w-4xl">

        <SectionReveal className="relative flex w-full flex-col gap-4">
          <Header
            title="Content"
            subtitle="The core of my content focuses on Web3 marketing strategies and the unique mechanics that drive engagement within crypto ecosystems."
          />
        </SectionReveal>

        <div className="grid w-full gap-4 py-4">
          {CONTENT_CARDS.map((content, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <ContentCard {...content} />
            </SectionReveal>
          ))}
        </div>

      </div>
    </main>
  )
}
