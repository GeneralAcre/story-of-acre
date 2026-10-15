import Link from "next/link"
import { ArrowRight, Trophy } from "lucide-react"
import { projectSlug } from "@/constance/work"
import SiteCover from "@/components/common/SiteCover"

interface ProjectTileProps {
  title: string
  cover?: string
  award?: { label: string; href: string }
}

// "Event : Result" → { event, result }
const splitAward = (label: string) => {
  const [event, ...rest] = label.split(":")
  const result = rest.join(":").trim()
  return result ? { event: event.trim(), result } : { event: "", result: event.trim() }
}

export default function ProjectTile({ title, cover, award }: ProjectTileProps) {
  const { event, result } = award ? splitAward(award.label) : { event: "", result: "" }

  return (
    <div className="group flex flex-col gap-2.5 text-left md:gap-3">
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <Link href={`/projects/${projectSlug(title)}`} aria-label={`View ${title} project details`}>
          <SiteCover
            title={title}
            cover={cover}
            className="aspect-[4/3] w-full transition-shadow duration-300 group-hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.12)]"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-2 px-0.5">
        <h3 className="flex items-center justify-between gap-3 text-2xl font-bold leading-tight text-white md:text-xl lg:text-2xl">
          <Link href={`/projects/${projectSlug(title)}`} className="hover:text-white/80">{title}</Link>
          <Link
            href={`/projects/${projectSlug(title)}`}
            aria-label={`View ${title} project details`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#CD8FDC]/70 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-[#CD8FDC] hover:bg-[#CD8FDC]/10 hover:text-white"
          >
            Visit <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </h3>
        {award && (
          <div className="flex items-start gap-2.5 text-[#CD8FDC]">
            <Trophy className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-bold leading-snug md:text-lg">{result}</span>
              {event && <span className="text-base font-bold leading-snug md:text-lg">{event}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
