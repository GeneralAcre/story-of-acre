import { ArrowUpRight } from "lucide-react"
import LivePreview from "@/components/common/LivePreview"

interface FeaturedProjectProps {
  title: string
  description: string
  website: string
}

export default function FeaturedProject({ title, description, website }: FeaturedProjectProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid w-full grid-cols-1 items-center gap-6 text-left md:grid-cols-[3fr_2fr] md:gap-10"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <LivePreview
          url={website}
          title={title}
          className="aspect-[16/10] w-full transition-shadow duration-300 group-hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.12)]"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-3 md:gap-4">
        <h3 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h3>
        <p className="text-base leading-relaxed text-white/60 md:text-lg">{description}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-white group-hover:text-black">
          Visit portfolio
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}
