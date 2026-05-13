import Link from "next/link"
import Image from "next/image"
import { REGISTRY } from "@/constance/registry"
import { Link2, ExternalLink, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  image: string
  w?: string
  description: string
  website: string
  scope?: string
  chain?: string
  award?: { label: string; href: string }
}

export default function ProjectCard({
  description,
  image,
  scope,
  title,
  website,
  w,
  chain,
  award,
}: ProjectCardProps) {
  const isLogoOnly = title === "ETH Chula"
  const isLeftAlignedImage = title === "Mirage" || title === "Medusa"

  return (
    <div className="group w-full flex flex-col gap-6 text-left transition-transform duration-500 md:scale-90 md:hover:scale-100 md:flex-row md:odd:flex-row-reverse md:items-center md:gap-10">

      {/* ── Image column ── */}
      <div className="w-full md:w-[45%] shrink-0 flex items-center justify-center bg-transparent">
        {isLogoOnly ? (
          <Image src={image} alt={title} width={160} height={160} className="w-[130px] md:w-[160px] h-auto rounded-2xl" />
        ) : (
          <div className={`relative w-full max-w-[480px] h-[220px] md:h-[300px] rounded-2xl overflow-hidden`}>
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover ${isLeftAlignedImage ? "object-left" : "object-center"}`}
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        )}
      </div>

      {/* ── Text column ── */}
      <div className="w-full md:w-[55%] flex flex-col gap-2 min-w-0 text-left">
        <h3 className="font-mono text-xs text-[#D4A0C0] transition-opacity duration-500 group-hover:opacity-100 md:text-sm md:opacity-0">
          {scope}
        </h3>
        <h2 className="font-kdam text-2xl font-bold tracking-wide md:text-3xl break-words">
          {title}
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          {w && REGISTRY.organization[w] && (
            <Link href={REGISTRY.organization[w]?.website} target="_blank" rel="noopener noreferrer">
              <Badge className="gap-1 px-1" variant="secondary">
                <Image src={REGISTRY.organization[w]?.logo} alt={REGISTRY.organization[w]?.title} width={16} height={16} className="size-4 rounded-full" />
                {REGISTRY.organization[w]?.title}
              </Badge>
            </Link>
          )}
          {chain && REGISTRY.chain[chain] && (
            <Link href={REGISTRY.chain[chain]?.website} target="_blank">
              <Badge className="gap-1 px-1" variant="secondary">
                <Image src={REGISTRY.chain[chain]?.logo} alt={REGISTRY.chain[chain]?.title} width={16} height={16} className="size-4 rounded-full" />
                {REGISTRY.chain[chain]?.title}
              </Badge>
            </Link>
          )}
        </div>

        <p className="text-sm text-muted-foreground md:text-base md:leading-6 break-words">
          {description}
        </p>

        {award && (
          <a
            href={award.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/award inline-flex items-start gap-2 self-start text-sm md:text-sm text-white/70 transition hover:text-white"
          >
            <Trophy className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="group-hover/award:underline underline-offset-2 leading-snug">
              {award.label.split(" — ").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <><span className="mx-1">—</span><wbr /></>
                  )}
                </span>
              ))}
            </span>
            <ExternalLink className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
          </a>
        )}

        <div className="flex flex-wrap items-center gap-3 mt-1">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#FAC335] px-4 py-2 text-sm font-medium text-[#FAC335] bg-transparent transition-all duration-500 ease-in-out lg:opacity-0 group-hover:opacity-100 hover:bg-[#FAC335] hover:text-[#1A0015]"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 className="ml-2 size-3" />Visit
          </Link>
        </div>
      </div>

    </div>
  )
}