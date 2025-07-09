import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TECH_STACK } from "@/constance/tech-stack";
import Header from "../constance/Title"
import { Separator } from "../components/ui/separator";
import MyProjectsSection from "../constance/projects/page"

export default function Home() {
  return (
    <div>
      <Header/>


      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <SparklesText>My Work</SparklesText>
      <Separator />
        <Marquee pauseOnHover className="[--duration:20s]">
          {TECH_STACK .map((techStackItem) => (
            <ReviewCard key={techStackItem .title} {...techStackItem} />
          ))}
        </Marquee>



          <MyProjectsSection/>
        <VelocityScroll>CONTACT</VelocityScroll>
      </div>

    </div>
    
  )
}
 
 
 
const ReviewCard = ({title,description,}: {title: string;description: string;}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        " bg-black hover:bg-black/90",)}>

      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{title}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{description}</blockquote>
    </figure>
  )
};
 