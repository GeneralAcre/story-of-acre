import Link from "next/link"
import { REGISTRY } from "@/constance/registry"
import { Link2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  image: string
  w?: string
  description: string
  website: string
  scope?: string
  chain?: string
}

export default function ProjectCard({
  description,
  image,
  scope,
  title,
  website,
  w,
  chain,
}: ProjectCardProps) {
  const isSvg = image.endsWith(".svg")
  const isLogoOnly = isSvg || title === "ETH Chula"

  return (
    <div className="group w-full flex flex-col gap-6 text-left transition-transform duration-500 md:scale-90 md:hover:scale-100 md:flex-row md:odd:flex-row-reverse md:items-center md:gap-10">

      {/* ── Image column ── */}
      <div className="w-full md:w-[45%] shrink-0 flex items-center justify-center">
        {isSvg ? (
          <img src={image} alt={title} className="w-[200px] md:w-[260px] h-auto" />
        ) : isLogoOnly ? (
          <img src={image} alt={title} className="w-[130px] md:w-[160px] h-auto rounded-2xl" />
        ) : (
          <img src={image} alt={title} className="w-full max-w-[480px] rounded-2xl object-cover" />
        )}
      </div>

      {/* ── Text column ── */}
      <div className="w-full md:w-[55%] flex flex-col gap-2 min-w-0 text-left">
        <h3 className="font-mono text-xs text-[#D4A0C0] transition-opacity duration-500 group-hover:opacity-100 md:text-sm md:opacity-0">
          {scope}
        </h3>
        <h2 className="font-Inter text-2xl font-bold tracking-wide md:text-3xl break-words">
          {title}
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          {w && REGISTRY.organization[w] && (
            <Link href={REGISTRY.organization[w]?.website} target="_blank" rel="noopener noreferrer">
              <Badge className="gap-1 px-1" variant="secondary">
                <img src={REGISTRY.organization[w]?.logo} alt={REGISTRY.organization[w]?.title} className="size-4 rounded-full" />
                {REGISTRY.organization[w]?.title}
              </Badge>
            </Link>
          )}
          {chain && REGISTRY.chain[chain] && (
            <Link href={REGISTRY.chain[chain]?.website} target="_blank">
              <Badge className="gap-1 px-1" variant="secondary">
                <img src={REGISTRY.chain[chain]?.logo} alt={REGISTRY.chain[chain]?.title} className="size-4 rounded-full" />
                {REGISTRY.chain[chain]?.title}
              </Badge>
            </Link>
          )}
        </div>

        <p className="text-sm text-muted-foreground md:text-base md:leading-6 break-words">
          {description}
        </p>

        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-fit rounded-full transition-opacity duration-500 group-hover:opacity-100 md:opacity-0 mt-1"
          )}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link2 className="ml-2 size-3" />Visit
        </Link>
      </div>

    </div>
  )
}