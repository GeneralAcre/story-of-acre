interface ContentCardProps {
  category: string
  date: string
  readTime: string
  title: string
  description: string
  href: string
}

export default function ContentCard({ category, date, readTime, title, description, href }: ContentCardProps) {
  return (
    <article className="group w-full overflow-hidden rounded-[2rem] border border-[#FAC335]/20 bg-[#1B0B14]/90 p-5 shadow-[0_18px_45px_-28px_rgba(252,196,34,0.75)] transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#E6C68E]">
        <span className="rounded-full border border-[#FAC335]/40 bg-[#FAC335]/10 px-2 py-0.5">{category}</span>
        <span className="text-[#D9C7A1]">{date} • {readTime}</span>
      </div>

      <h3 className="mt-4 font-kdam text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#EDE1C3] md:text-base">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#FAC335] bg-transparent px-4 py-2 text-sm font-semibold text-[#FAC335] transition hover:bg-[#FAC335] hover:text-[#1A0015]"
        >
          Read More
        </a>
      </div>
    </article>
  )
}
