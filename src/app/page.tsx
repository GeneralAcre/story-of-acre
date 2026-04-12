import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TECH_STACK } from "@/constance/tech-stack";
import Hero from "./hero";
import ProjectCard from "../constance/page";
import ReviewCard from "@/constance/Card/ReviewCard";
import SmoothScroll from "./smoothScroll";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";
import { PROJECTS } from "@/constance/work";
import SectionReveal from "@/components/common/SectionReveal";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden overscroll-none scroll-smooth md:text-center">
      <SmoothScroll>
        <div className="left-1/2 right-1/2 top-0 z-10 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-col items-center *:z-10">
          <div className="absolute left-0 top-0 h-screen w-full" />

          <Hero />

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-8">

            {/* Tech Stack Section */}
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8 md:max-w-[64rem]">
              <Header title="Tech Stack" subtitle="Here are some of the technologies I'm familiar with." />
              <Marquee pauseOnHover className="[--duration:20s]">
                {TECH_STACK.map((techStackItem) => (
                  <ReviewCard key={techStackItem.title} {...techStackItem} />
                ))}
              </Marquee>
            </SectionReveal>

            {/* Projects Section */}
            <SectionReveal className="relative flex w-full flex-col gap-4 py-8 md:max-w-[64rem]">
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

          {/* Contact marquee */}
          <SectionReveal className="w-full">
            <VelocityScroll>CONTACT</VelocityScroll>
          </SectionReveal>

          <div className="px-8 w-full">
            <SectionReveal>
              <Footer />
            </SectionReveal>
          </div>

        </div>
      </SmoothScroll>
    </main>
  )
}
