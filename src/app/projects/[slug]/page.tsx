import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowUpRight, Globe, Trophy } from "lucide-react"
import { FaXTwitter, FaGithub, FaDiscord, FaYoutube, FaMedium, FaTelegram } from "react-icons/fa6"
import type { IconType } from "react-icons"
import { VISIBLE_PROJECTS, projectSlug } from "@/constance/work"
import { REGISTRY } from "@/constance/registry"
import SiteCover from "@/components/common/SiteCover"
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
const CATEGORY_STYLES = {
  Hackathon: "bg-[#480354] text-white", // dark amethyst
  "University project": "bg-[#CD8FDC] text-[#480354]", // wisteria
  Interest: "bg-[#86CDBB] text-[#480354]", // pearl aqua
} as const

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
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 rounded-md bg-black px-3 py-1.5 text-sm font-bold uppercase tracking-[0.15em] text-white">{label}</h2>
        <div className="h-px flex-1 bg-black/15" />
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

  const { title, website, cover, description, award, category, tags, role, timeline, team, links, socials, overview, contributions, features } = project
  const chain = project.chain ? REGISTRY.chain[project.chain] : undefined
  const org = project.w ? REGISTRY.organization[project.w] : undefined
  // The chain is what it runs on; the organization is the hackathon or university it was made for
  const affiliations = [
    ...(chain ? [{ label: "Built on", item: chain }] : []),
    ...(org ? [{ label: category === "University project" ? "Thesis at" : "Made for", item: org }] : []),
  ]

  // Role and Timeline always show (with a placeholder until filled in); Team only when set.
  const facts = [
    { label: "Role", value: role ?? "To be added", pending: !role },
    { label: "Timeline", value: timeline ?? "To be added", pending: !timeline },
    ...(team ? [{ label: "Team", value: team, pending: false }] : []),
  ]

  // Website buttons use the same colors as the category badge
  const websiteStyle = category ? CATEGORY_STYLES[category] : "bg-black text-white"
  const hostname = new URL(website).hostname.replace(/^www\./, "")
  const allLinks = [...(socials ?? []), ...(links ?? [])]

  return (
    <main className="theme-light min-h-screen overflow-x-hidden pb-16">
      {/* ── Cover: live preview, full width ── */}
      <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`} className="block">
        <SiteCover title={title} cover={cover} wide sizes="100vw" priority className="aspect-[16/10] w-full md:aspect-[5/2]" />
      </a>

      <div className="mt-8 flex w-full flex-col px-6 md:mt-10 md:px-8">

        {/* ── Case study ── */}
        <article className="flex flex-col gap-12 md:gap-14">

          {/* ── Intro ── */}
          <Section label="Project">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px] md:gap-12">
              <div className="flex min-w-0 flex-col gap-4">
                <h1 className="font-heading text-4xl font-bold leading-none md:text-6xl">{title}</h1>
                {(category || (tags && tags.length > 0)) && (
                  <div className="flex flex-wrap items-center gap-2">
                    {category && (
                      <span className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-medium ${CATEGORY_STYLES[category]}`}>
                        {category}
                      </span>
                    )}
                    {(tags ?? []).map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full border border-black/15 px-3 py-1 text-sm text-black/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="max-w-3xl text-lg leading-relaxed text-black/75">{description}</p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group hidden w-fit items-center gap-2 rounded-lg px-5 py-3 text-base font-medium transition-[filter] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB4B4E] focus-visible:ring-offset-2 md:inline-flex ${websiteStyle}`}
                >
                  <Globe className="size-4" aria-hidden="true" />
                  Visit {hostname}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-col gap-6">
                <dl className="grid grid-cols-[auto_auto] justify-between gap-x-4 gap-y-6 md:flex md:flex-col">
                  {award && (
                    <div className="col-span-2 flex flex-col gap-1.5">
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
                  {facts.map(({ label, value, pending }) => (
                    <div key={label} className="flex flex-col gap-1.5">
                      <dt className="text-base font-medium">{label}</dt>
                      <dd className={`text-sm md:text-base ${pending ? "italic text-black/35" : "text-black/60"}`}>{value}</dd>
                    </div>
                  ))}
                  {affiliations.map(({ label, item }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <dt className="text-base font-medium">{label}</dt>
                      <dd className="flex flex-wrap gap-2">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${BUTTON} border border-black/20 text-black hover:border-black`}
                        >
                          <Image src={item.logo} alt="" width={20} height={20} className="size-5 rounded-full object-contain" />
                          {item.title}
                        </a>
                      </dd>
                    </div>
                  ))}
                  {allLinks.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <dt className="text-base font-medium">Social</dt>
                      <dd className="flex flex-wrap gap-2">
                        {allLinks.map(({ label, href }) => {
                          const Icon = iconFor(href) ?? Globe
                          return (
                            <a
                              key={href}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${BUTTON} border border-black/20 text-black hover:border-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB4B4E] focus-visible:ring-offset-2`}
                            >
                              <Icon className="size-4" aria-hidden="true" />
                              {label}
                            </a>
                          )
                        })}
                      </dd>
                    </div>
                  )}
                  {/* Mobile: website button at the end of the details, in the right column */}
                  <div className="col-start-2 flex flex-col gap-2 md:hidden">
                    <dt className="text-base font-medium">Website</dt>
                    <dd>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${BUTTON} ${websiteStyle} transition-[filter] hover:brightness-95`}
                      >
                        Visit site
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
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

          {contributions && contributions.length > 0 && (
            <Section label="What I did">
              <ol className="flex flex-col">
                {contributions.map((item) => (
                  <li key={item} className="border-b border-black/10 py-5 text-lg leading-relaxed first:pt-0">
                    <span className="text-black/85">{item}</span>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          <Section label="Features">
            {features && features.length > 0 ? (
              <div className="flex flex-col gap-12 md:gap-16">
                {features.map(({ title: name, body, subfeatures }) => (
                  <div key={name} className="flex max-w-4xl flex-col gap-4">
                    <h3 className="text-2xl font-bold md:text-3xl">{name}</h3>
                    <p className="text-base leading-relaxed text-black/65 md:text-lg">{body}</p>
                    {subfeatures && subfeatures.length > 0 && (
                      <ul className="ml-2 flex flex-col gap-6 md:ml-4">
                        {subfeatures.map(({ title: subfeatureTitle, body: subfeatureBody, definitions }) => (
                          <li key={subfeatureTitle} className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold md:text-xl">{subfeatureTitle}</h4>
                            <p className="text-base leading-relaxed text-black/65 md:text-lg">{subfeatureBody}</p>
                            {definitions && definitions.length > 0 && (
                              <dl className="flex flex-col gap-3 rounded-lg border border-black/15 bg-black/[0.03] p-4 text-base leading-relaxed text-black/65 md:text-lg">
                                {definitions.map(({ term, description }) => (
                                  <div key={term}>
                                    <dt className="inline font-semibold text-black">{term}:</dt>{" "}
                                    <dd className="inline">{description}</dd>
                                  </div>
                                ))}
                              </dl>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : <Pending />}
          </Section>

        </article>
      </div>

    </main>
  )
}
