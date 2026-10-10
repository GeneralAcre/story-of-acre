import Image from "next/image"
import { Blocks } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiNextdotjs, SiTailwindcss, SiThreedotjs, SiReact, SiVite, SiSolana,
  SiFramer, SiIpfs, SiWagmi, SiEventbrite,
} from "react-icons/si"

// Matched against the lowercased tech name; first match wins, so put specific names first.
const ICONS: [string, IconType][] = [
  ["next", SiNextdotjs],
  ["tailwind", SiTailwindcss],
  ["three", SiThreedotjs],
  ["vite", SiVite],
  ["react", SiReact],
  ["solana", SiSolana],
  ["framer", SiFramer],
  ["ipfs", SiIpfs],
  ["wagmi", SiWagmi],
  ["eventbrite", SiEventbrite],
]

// Brands Simple Icons doesn't ship, served from /public instead
const IMAGES: [string, string][] = [
  ["avalanche", "/projectPicture/Avalanche/Avalanche_Logomark.png"],
  ["magicblock", "/projectPicture/Project-logo/MagicBlock-Logomark-Black.png"],
]

export default function TechLogo({ name, className = "size-5" }: { name: string; className?: string }) {
  const key = name.toLowerCase()

  const image = IMAGES.find(([k]) => key.includes(k))?.[1]
  if (image) return <Image src={image} alt="" width={20} height={20} className={`${className} object-contain`} />

  const Icon = ICONS.find(([k]) => key.includes(k))?.[1] ?? Blocks
  return <Icon className={className} aria-hidden="true" />
}
