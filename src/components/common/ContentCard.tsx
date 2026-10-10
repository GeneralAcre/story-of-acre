interface ContentCardProps {
  category: string
  date: string
  readTime: string
  title: string
  description: string
  href?: string
  pdfPath?: string
}

export default function ContentCard({ category, date, readTime, title, description, href, pdfPath }: ContentCardProps) {
  const target = href ?? pdfPath

  return (
    <article className="group w-full overflow-hidden rounded-[2rem] border border-[#FFFFFF]/20 bg-[#000000]/90 p-5 shadow-[0_18px_45px_-28px_rgba(255,255,255,0.12)] transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#EEEEEE]">
        <span className="rounded-full border border-[#FFFFFF]/40 bg-[#FFFFFF]/10 px-2 py-0.5">{category}</span>
        <span className="text-[#999999]">{date} • {readTime}</span>
      </div>

      <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#EEEEEE] md:text-base">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {target && (
          <a
            href={target}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#FFFFFF] bg-transparent px-4 py-2 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#FFFFFF] hover:text-[#000000]"
          >
            Read More
          </a>
        )}
      </div>
    </article>
  )
}
