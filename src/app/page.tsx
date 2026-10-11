import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TECH_STACK } from "@/constance/tech-stack";
import Hero from "./hero";
import FeaturedProject from "../constance/FeaturedProject";
import ProjectTile from "../constance/ProjectTile";
import ReviewCard from "@/constance/Card/ReviewCard";
import SmoothScroll from "./smoothScroll";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { MARKETING, VISIBLE_PROJECTS } from "@/constance/work";
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
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8">
              <Header title="Tech Stack" subtitle="Here are some of the technologies I'm familiar with." />
              <Marquee pauseOnHover className="-mx-8 w-[calc(100%+4rem)] [--duration:20s]">
                {TECH_STACK.map((techStackItem) => (
                  <ReviewCard key={techStackItem.title} {...techStackItem} />
                ))}
              </Marquee>
            </SectionReveal>

            {/* Marketing Section */}
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8">
              <Header title="Marketing" subtitle="Campaigns, events, and creative work beyond code." />
              <div className="h-4" />
              <FeaturedProject {...MARKETING} />
            </SectionReveal>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-20" />
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8">
              <Header title="Projects" subtitle="Additional projects that I've worked on or contributed to." />
              <div className="h-4" />
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {VISIBLE_PROJECTS.map((project, i) => (
                  <SectionReveal key={project.title} delay={(i % 3) * 0.1}>
                    <ProjectTile {...project} />
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
