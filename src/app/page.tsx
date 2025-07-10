import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TECH_STACK } from "@/constance/tech-stack";
import Hero from "./hero";
import { Separator } from "../components/ui/separator";
import MyProjectsSection from "../constance/projects/page"
import ReviewCard from "@/constance/Card/ReviewCard";
import SmoothScroll from "./smoothScroll";
import { Header } from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <main>
      <SmoothScroll>
      <Hero />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      

      <Header title="Tech Stack" subtitle="Here are some of the technologies I'm familiar with."/>
        <Marquee pauseOnHover className="[--duration:20s]">
          {TECH_STACK .map((techStackItem) => (
            <ReviewCard key={techStackItem .title} {...techStackItem} />
          ))}
        </Marquee>


      <Header title="Projects" subtitle="Additional projects that I've worked on or contributed to"/>
      {/* Pass only string cause we do not want to define variable again just pass it*/}

          <MyProjectsSection/>
        <VelocityScroll>CONTACT</VelocityScroll>
      </div>
      </SmoothScroll>
      <Footer/>
    </main>
    
  )
}
 
 
 