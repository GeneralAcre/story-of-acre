import Image from "next/image"
import { notFound } from "next/navigation"
import { Globe, Trophy } from "lucide-react"
import { FaXTwitter, FaGithub, FaDiscord, FaYoutube, FaMedium, FaTelegram } from "react-icons/fa6"
import type { IconType } from "react-icons"
import { VISIBLE_PROJECTS, projectSlug } from "@/constance/work"
import { REGISTRY } from "@/constance/registry"
import LivePreview from "@/components/common/LivePreview"
import AwardLabel from "@/components/common/AwardLabel"

type Params = Promise<{ slug: string }>

const findProject = (slug: string) => VISIBLE_PROJECTS.find((p) => projectSlug(p.title) === slug)

const LINK_ICONS: [RegExp, IconType][] = [
  [/(x|twitter)\.com/, FaXTwitter],
  [/github\.com/, FaGithub],
  [/discord\.(gg|com)/, FaDiscord],
  [/(youtube\.com|youtu\.be)/, FaYoutube],
  [/medium\.com/, FaMedium],
  [/t\.me/, FaTelegram],
]
const iconFor = (href: string) => LINK_ICONS.find(([re]) => re.test(href))?.[1]

const BUTTON = "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"

export function generateStaticParams() {
  return VISIBLE_PROJECTS.map((p) => ({ slug: projectSlug(p.title) }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const project = findProject((await params).slug)
  if (!project) return {}
  return { title: `${project.title} — Acre`, description: project.description }
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="border-b border-black/15 pb-3">
        <h2 className="text-sm text-black/50">{label}</h2>
      </div>
      {children}
    </section>
  )
}

// Placeholder for sections whose content hasn't been written yet.
function Pending() {
  return <p className="text-base italic text-black/35">To be added</p>
}

export default async function ProjectPage({ params }: { params: Params }) {
  const project = findProject((await params).slug)
  if (!project) notFound()

  const { title, website, description, award, tags, role, timeline, team, links, overview, painPoints, contributions, features, gallery, outcome } = project
  const chain = project.chain ? REGISTRY.chain[project.chain] : undefined
  const org = project.w ? REGISTRY.organization[project.w] : undefined
  const builtWith = [chain, org].filter((item) => item !== undefined)

  // Role and Timeline always show (with a placeholder until filled in); Team only when set.
  const facts = [
    { label: "Role", value: role ?? "To be added", pending: !role },
    { label: "Timeline", value: timeline ?? "To be added", pending: !timeline },
    ...(team ? [{ label: "Team", value: team, pending: false }] : []),
  ]

  const allLinks = [{ label: "Website", href: website }, ...(links ?? [])]

  return (
    <main className="theme-light min-h-screen overflow-x-hidden pb-16">
      {/* ── Cover: live preview, full width ── */}
      <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`} className="block">
        <LivePreview url={website} title={title} className="aspect-[16/10] w-full md:aspect-[5/2]" />
      </a>

      <div className="mt-8 flex w-full flex-col px-6 md:mt-10 md:px-8">

        {/* ── Case study ── */}
        <article className="flex flex-col gap-12 md:gap-14">

          {/* ── Intro ── */}
          <Section label="Project">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px] md:gap-12">
              <div className="flex min-w-0 flex-col gap-4">
                <h1 className="font-heading text-4xl font-bold leading-none md:text-6xl">{title}</h1>
                {tags && tags.length > 0 && (
                  <p className="text-lg text-black/55 md:text-xl">{tags.join(" · ")}</p>
                )}
                <p className="max-w-3xl text-lg leading-relaxed text-black/75">{description}</p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {allLinks.map(({ label, href }, i) => {
                    const Icon = iconFor(href) ?? Globe
                    return (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${BUTTON} ${i === 0 ? "bg-black text-white hover:bg-black/80" : "border border-black/20 text-black hover:border-black"}`}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                        {label}
                      </a>
                    )
                  })}
                </div>

                <dl className="flex flex-col gap-6">
                  {facts.map(({ label, value, pending }) => (
                    <div key={label} className="flex flex-col gap-1.5">
                      <dt className="text-base font-medium">{label}</dt>
                      <dd className={`text-base ${pending ? "italic text-black/35" : "text-black/60"}`}>{value}</dd>
                    </div>
                  ))}
                  {award && (
                    <div className="flex flex-col gap-1.5">
                      <dt className="text-base font-medium">Award</dt>
                      <dd>
                        <a
                          href={award.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-start gap-2 text-base"
                        >
                          <Trophy className="mt-1 size-4 shrink-0 text-black" aria-hidden="true" />
                          <span className="underline-offset-4 group-hover:underline"><AwardLabel label={award.label} color="#000000" /></span>
                        </a>
                      </dd>
                    </div>
                  )}
                  {builtWith.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <dt className="text-base font-medium">Built with</dt>
                      <dd className="flex flex-wrap gap-2">
                        {builtWith.map((item) => (
                          <a
                            key={item.title}
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${BUTTON} border border-black/20 text-black hover:border-black`}
                          >
                            <Image src={item.logo} alt="" width={20} height={20} className="size-5 rounded-full" />
                            {item.title}
                          </a>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </Section>

          {overview && overview.length > 0 && (
            <Section label="Overview">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                {overview.map(({ heading, body }) => (
                  <div key={heading} className="flex flex-col gap-3">
                    <h3 className="text-xl font-medium">{heading}</h3>
                    <p className="text-base leading-relaxed text-black/65">{body}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section label="Pain points">
            {painPoints && painPoints.length > 0 ? (
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {painPoints.map((item, i) => (
                  <li key={i} className="border-l-2 border-black pl-4 text-lg leading-relaxed text-black/80">{item}</li>
                ))}
              </ul>
            ) : <Pending />}
          </Section>

          {contributions && contributions.length > 0 && (
            <Section label="What I did">
              <ol className="flex flex-col">
                {contributions.map((item, i) => (
                  <li key={i} className="flex gap-4 border-b border-black/10 py-5 text-lg leading-relaxed first:pt-0 md:gap-6">
                    <span className="shrink-0 tabular-nums text-black/40">[{String(i + 1).padStart(2, "0")}]</span>
                    <span className="text-black/85">{item}</span>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          <Section label="Features">
            {features && features.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {features.map(({ title: name, body }) => (
                  <div key={name} className="flex flex-col gap-3 rounded-xl bg-black/[0.04] p-6 md:p-8">
                    <h3 className="text-lg font-bold uppercase tracking-wide">{name}</h3>
                    <p className="text-base leading-relaxed text-black/60">{body}</p>
                  </div>
                ))}
              </div>
            ) : <Pending />}
          </Section>

          {gallery && gallery.length > 0 && (
            <Section label="Gallery">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {gallery.map(({ src, caption }, i) => (
                  <figure key={src} className={`flex flex-col gap-2 ${i === 0 ? "md:col-span-2" : ""}`}>
                    <Image
                      src={src}
                      alt={caption ?? `${title} screenshot ${i + 1}`}
                      width={1600}
                      height={1000}
                      sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="h-auto w-full rounded-xl border border-black/10"
                    />
                    {caption && <figcaption className="text-sm text-black/50">{caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </Section>
          )}

          <Section label="Outcome">
            {outcome && outcome.length > 0 ? (
              <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {outcome.map((item, i) => (
                  <li key={i} className="font-heading text-2xl font-medium leading-snug md:text-3xl">{item}</li>
                ))}
              </ul>
            ) : <Pending />}
          </Section>
        </article>
      </div>

    </main>
  )
}
