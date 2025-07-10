import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TECH_STACK } from "@/constance/tech-stack";
import Hero from "./hero";
{/* import { Separator } from "../components/ui/separator";
import ProjectCard from "../constance/projects/page"*/}
import ReviewCard from "@/constance/Card/ReviewCard";
import SmoothScroll from "./smoothScroll";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden overscroll-none scroll-smooth md:text-center">
      <SmoothScroll>
      <div className="left-1/2 right-1/2 top-0 z-10 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-col items-center bg-background *:z-10">
      <div className="absolute left-0 top-0 h-screen w-full"></div>
        
        <Hero />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      

      <div className="relative flex w-full flex-col gap-2 py-8 md:max-w-[64rem] md:gap-4 items-center">
        <Header title="Tech Stack" subtitle="Here are some of the technologies I'm familiar with."/>
      </div>

        <Marquee pauseOnHover className="[--duration:20s]">
          {TECH_STACK .map((techStackItem) => (
            <ReviewCard key={techStackItem .title} {...techStackItem} />
          ))}
        </Marquee>

      <div className="relative flex w-full flex-col gap-2 py-8 md:max-w-[64rem] md:gap-4 items-center">
        <Header title="Projects" subtitle="Additional projects that I've worked on or contributed to."/>
      </div>
      {/* Pass only string cause we do not want to define variable again just pass it*/}


        <VelocityScroll>CONTACT</VelocityScroll>
      </div>
      <Footer/>
      </div>
      </SmoothScroll>

    </main>
    
  )
}
 
 
 