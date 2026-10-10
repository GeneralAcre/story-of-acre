import Link from "next/link"
import { Trophy } from "lucide-react"
import { projectSlug } from "@/constance/work"
import SiteCover from "@/components/common/SiteCover"

interface ProjectTileProps {
  index: number
  title: string
  website: string
  cover?: string
  award?: { label: string; href: string }
}

// "Event : Result" → { event, result }
const splitAward = (label: string) => {
  const [event, ...rest] = label.split(":")
  const result = rest.join(":").trim()
  return result ? { event: event.trim(), result } : { event: "", result: event.trim() }
}

export default function ProjectTile({ index, title, cover, award }: ProjectTileProps) {
  const { event, result } = award ? splitAward(award.label) : { event: "", result: "" }

  return (
    <Link href={`/projects/${projectSlug(title)}`} className="group flex flex-col gap-2.5 text-left md:gap-3">
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <SiteCover
          title={title}
          cover={cover}
          className="aspect-[4/3] w-full transition-shadow duration-300 group-hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.12)]"
        />
      </div>

      <div className="flex flex-col gap-2 px-0.5">
        <h3 className="flex gap-2 text-2xl font-bold leading-tight text-white md:text-xl lg:text-2xl">
          <span className="shrink-0 tabular-nums">[{String(index + 1).padStart(2, "0")}]</span>
          <span>{title}</span>
        </h3>
        {award && (
          <div className="flex items-start gap-2.5 text-[#FAC335]">
            <Trophy className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-bold leading-snug md:text-lg">{result}</span>
              {event && <span className="text-sm leading-snug text-[#FAC335]/70">{event}</span>}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
