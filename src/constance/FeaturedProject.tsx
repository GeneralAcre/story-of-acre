import { ArrowUpRight } from "lucide-react"
import SiteCover from "@/components/common/SiteCover"

interface FeaturedProjectProps {
  title: string
  description: string
  website: string
  areas?: string[]
}

export default function FeaturedProject({ title, description, website, areas = [] }: FeaturedProjectProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-x-5 gap-y-8 text-left sm:grid-cols-2 lg:grid-cols-3">
      {/* ── Tile: same size and style as the project tiles ── */}
      <a href={website} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2.5 md:gap-3">
        <div className="transition-transform duration-300 group-hover:-translate-y-1">
          <SiteCover
            title={title}
            className="aspect-[4/3] w-full transition-shadow duration-300 group-hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.12)]"
          />
        </div>
        <h3 className="px-0.5 text-2xl font-bold leading-tight text-white md:text-xl lg:text-2xl">{title}</h3>
      </a>

      {/* ── What I do ── */}
      <div className="flex flex-col gap-6 lg:col-span-2 lg:pl-6">
        <p className="text-lg leading-relaxed text-white/70 md:text-xl">{description}</p>

        {areas.length > 0 && (
          <ol className="flex flex-col border-t border-white/15">
            {areas.map((area) => (
              <li key={area} className="group flex gap-4 border-b border-white/15 py-4 text-lg transition-colors hover:border-[#CD8FDC]/60 md:text-xl">
                <span className="font-medium text-white transition-colors group-hover:text-[#CD8FDC]">{area}</span>
              </li>
            ))}
          </ol>
        )}

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          Visit portfolio
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
