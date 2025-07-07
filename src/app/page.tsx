import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SparklesText } from "@/components/magicui/sparkles-text";


export default function Home() {
  return (
    <div>
      <Button>Click me</Button>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

        <VelocityScroll>CONTACT</VelocityScroll>
        <SparklesText>My Work</SparklesText>
      </div>

    </div>
    
  )
}
 
const reviews = [
  {
    name: "Javascript",
    body: "I've never seen anything like this before. It's amazing. I love it."
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing."
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "Jane",
    body: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "Jenny",
    body: "I'm at a loss for words. This is amazing. I love it."
  },
  {
    name: "James",
    body: "I'm at a loss for words. This is amazing. I love it."
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-600 bg-black hover:bg-gray-900 text-white",)}>

      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  )
};
 