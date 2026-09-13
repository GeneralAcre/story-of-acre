import SectionReveal from "@/components/common/SectionReveal"
import Footer from "@/components/common/footer"
import ContributionGrid from "./ContributionGrid"
import { Marquee } from "@/components/magicui/marquee"

export const metadata = {
  title: "Contribution — Acre",
  description: "Community contributions, events, and things I've helped build or support.",
}

const KEYWORDS = ["Events", "Workshops", "Hackathons", "Meetups", "Ecosystem Growth", "Student Clubs", "Fellowships"]

type ShapeType = "hexagon" | "circle" | "square"
const SHAPES: ShapeType[] = ["hexagon", "circle", "square"]

function KeywordShape({ type }: { type: ShapeType }) {
  if (type === "circle") {
    return <span className="inline-block size-2.5 shrink-0 rounded-full bg-[#4A043A]" />
  }
  if (type === "square") {
    return <span className="inline-block size-2.5 shrink-0 bg-[#4A043A]" />
  }
  return (
    <span
      className="inline-block size-3 shrink-0 bg-[#4A043A]"
      style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
    />
  )
}

export default function Contribution() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden pt-16 sm:pt-8 pb-16 px-6">
      <div className="relative flex w-full flex-col items-center justify-center max-w-5xl">

        <SectionReveal className="w-full mb-8">
          <h1 className="font-[family-name:var(--font-kdam-next)] text-2xl sm:text-3xl text-white leading-tight mb-4">
            Building Communities, Leading Events
          </h1>
          {/* Mobile: infinite scrolling marquee */}
          <div className="mb-6 w-screen bg-[#FAC335] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] sm:hidden">
            <Marquee className="py-6 [--duration:18s] [--gap:2rem]">
              {KEYWORDS.map((kw, i) => (
                <span key={kw} className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-wide text-[#4A043A]">
                  <KeywordShape type={SHAPES[i % SHAPES.length]} />
                  {kw}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Tablet/desktop: static wrapped bar */}
          <div className="mb-6 hidden w-screen flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-[#FAC335] px-6 py-6 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] sm:flex sm:justify-between sm:px-12 sm:py-8">
            {KEYWORDS.map((kw, i) => (
              <span key={kw} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-[#4A043A] sm:text-sm">
                <KeywordShape type={SHAPES[i % SHAPES.length]} />
                {kw}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#EDE1C3]/60 font-mono w-full leading-relaxed">
            Beyond writing code, I show up — organizing events, running workshops, founding clubs, and supporting the communities that make web3 worth building in. These are the things I've helped make happen.
          </p>
        </SectionReveal>

        <ContributionGrid />

        <div className="mt-16 w-full sm:mt-20">
          <SectionReveal>
            <Footer />
          </SectionReveal>
        </div>

      </div>
    </main>
  )
}
