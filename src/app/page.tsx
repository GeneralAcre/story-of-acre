import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TECH_STACK } from "@/constance/tech-stack";
import Hero from "./hero";
import ProjectCard from "../constance/page";
import ReviewCard from "@/constance/Card/ReviewCard";
import SmoothScroll from "./smoothScroll";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { MARKETING, PROJECTS } from "@/constance/work";
import SectionReveal from "@/components/common/SectionReveal";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden md:overscroll-none md:scroll-smooth md:text-center">
      <SmoothScroll>
        <div className="left-1/2 right-1/2 top-0 z-10 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-col items-center *:z-10">
          <div className="absolute left-0 top-0 h-screen w-full" />

          <Hero />

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-8">

            {/* Tech Stack Section */}
            <SectionReveal className="relative flex w-full flex-col gap-4 px-4 py-8 md:max-w-7xl md:px-0">
              <Header title="Tech Stack" subtitle="Here are some of the technologies I'm familiar with." />
              <Marquee pauseOnHover className="[--duration:20s]">
                {TECH_STACK.map((techStackItem) => (
                  <ReviewCard key={techStackItem.title} {...techStackItem} />
                ))}
              </Marquee>
            </SectionReveal>

            {/* Marketing Section */}
            <SectionReveal className="relative -mx-8 flex w-[calc(100%+4rem)] flex-col gap-6 bg-[#FAC335] px-8 py-8 text-[#3A0736] md:gap-8 md:px-8 md:py-10">
              <div className="mx-auto flex w-full max-w-7xl items-center gap-4">
                <div className="h-px flex-1 bg-[#3A0736]/30" />
                <h2 className="font-kdam text-2xl font-extrabold md:text-3xl">Marketing</h2>
                <div className="h-px flex-1 bg-[#3A0736]/30" />
              </div>
              <div className="mx-auto w-full max-w-7xl">
                <ProjectCard {...MARKETING} featured />
              </div>
            </SectionReveal>

            {/* Projects Section */}
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8 md:max-w-7xl">
              <Header title="Projects" subtitle="Additional projects that I've worked on or contributed to." />
              <div className="h-4" />
              <div className="space-y-6 md:space-y-8">
                {PROJECTS.map((project, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
                    <ProjectCard {...project} />
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>

          </div>

          <div className="w-full">
            <SectionReveal>
              <Footer />
            </SectionReveal>
          </div>

        </div>
      </SmoothScroll>
    </main>
  )
}
