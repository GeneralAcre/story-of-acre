export const MARKETING = {
      title: "Marketing Portfolio",
      description:
        "A portfolio showcasing my marketing work, campaigns, and creative projects.",
      website: "https://acre-marketing.vercel.app/",
    };

export interface Project {
  title: string
  hidden?: boolean // true = not shown on the site (data kept for later)
  website: string
  description: string
  chain?: string
  w?: string
  award?: { label: string; href: string }
  // Case-study details for the project page. Every field is optional;
  // a section only shows once it has content.
  tags?: string[]
  role?: string
  timeline?: string
  team?: string
  links?: { label: string; href: string }[]
  overview?: { heading: string; body: string }[]
  painPoints?: string[]
  contributions?: string[]
  features?: { title: string; body: string }[]
  // Pictures go in public/projectPicture/<Project>/ and are referenced as "/projectPicture/<Project>/file.png"
  gallery?: { src: string; caption?: string }[]
  outcome?: string[]
}

export const PROJECTS: Project[] = [
    {
      title: "Moment",
      chain: "Solana",
      tags: ["Hackathon", "Solana", "Shipped"],
      role: "Founder",
      timeline: "July 2026",
      painPoints: [
        "Fans want to collect the moments of a match, not just the score or a player card.",
      ],
      features: [
        { title: "Sealed on-chain draw", body: "Every pull is a real Solana transaction, resolved on MagicBlock's Ephemeral Rollup." },
        { title: "Verifiable randomness", body: "Rarity and card seed come from an oracle VRF you can check on-chain." },
        { title: "Mint as a real NFT", body: "Claim any pull as an SPL token on the base layer: durable, transferable, and visible in any wallet." },
      ],
      outcome: [
        "Turned live match outcomes and historic milestones into digital collectibles on Solana.",
        "A fresh use of sports data beyond scores and predictions, with room to grow after the World Cup.",
      ],
      description:
        "Moment is an on-chain card platform on Solana for capturing and sharing moments as collectible cards.",
      website: "https://moment-card.vercel.app/",
      award: { label: "TXODD World Cup Hackathon : Superteam Thailand Runner-Up", href: "https://x.com/SuperteamTH/status/2081648418481746298?s=20" },
    },
    {
      title: "Medusa",
      w: "dev3pack",
      chain: "Solana",
      description:
        "Medusa Score is a decentralized credit identity layer for the Solana ecosystem. We transform raw on-chain data transaction history, liquidation events, and protocol loyalty into a verifiable credit score. ",
      website: "https://medusa-score.vercel.app/",
      award: { label: "dev3pack Global Hackathon : Runner-Up Thailand ", href: "https://hack.dev3pack.xyz/projects/jx793eyva2cqv8vv0526r11dr586dtcm" },
    },
        {
      title: "CardMart",
      w: "ID Chula",
      chain: "Solana",
      description:
        "CardMart is an all-in-one data platform for trading card games (TCGs), bringing TCG information together in one place.",
      website: "https://id-thesis.vercel.app/",
    },
          {
      title: "AcreLabs",
      chain: "Avalanche",
      description:
        "A native Avalanche loyalty and POAP protocol for issuing custom participation badges. Moving beyond basic event check-ins, it tracks community contributions, loyalty, and partnerships for projects",
      website: "https://acre-labs.vercel.app/",
    },
    {
      title: "Obsession",
      w: "MagicBlock",
      chain: "Solana",
      description:
        "Obsession is a fully on-chain fortune-card gacha on Solana. For entertainment only. Not financial, legal, or relationship advice.",
      website: "https://gacha-er.vercel.app/",
    },
    {
      title: "Proof Of Alpha",
      w: "IslandDAO",
      chain: "Solana",
      description:
        "Proof of Alpha is an on-chain game where you practice approaching and talking to girls through real-time AI chat : every interaction earns or costs you AURA, a reputation token that's stored on Solana, tracks your skill over time, and can be upgraded or traded.",
      website: "https://proof-of-alpha-live.vercel.app/",
    },
    {
      title: "Signal",
      w: "Colosseum",
      chain: "Solana",
      description:
        "An on-chain identity protocol that tracks and verifies ecosystem engagement. By transforming participation into a transparent, verifiable record, it provides a Proof-of-Presence layer that measures how active a contributor truly is within a network.",
      website: "https://bangkok-node.vercel.app/",
    },
    {
      title: "Girl or Ladyboy",
      w: "Cursor",
      description:
        "Game that challenges players to guess whether the character on screen is a real girl or a ladyboy. Test your perception through a pixel-art styled interface with score tracking and classic arcade aesthetics.",
      website: "https://girlorladyboy.vercel.app/",
    },
    {
      title: "WhaleSight",
      hidden: true,
      w: "Pacifica",
      chain: "Solana",
      description:
        "An intelligent whale tracking platform for on-chain analytics. Monitors institutional crypto wallet movements and decodes large-player sentiment in real-time to help investors understand market behavior.",
      website: "https://whale-sight.vercel.app/",
    },
    {
      title: "Mirage",
      hidden: true,
      chain: "Polkadot",
      description:
        "Mirage is a dynamic NFT on Polkadot from a 4x4 Polkadot pixel, your staked assets evolve a dynamic NFT. Earn $XP, watch your Mirage grow, and prepare for living testament to your ecosystem journey.",
      website: "https://polkadot-2025-react-sfna.vercel.app/",
    },
    {
      title: "Titanic Survial Prediction",
      hidden: true,
      w: "ID Chula",
      description:
      "Predicting Titanic survival rates, this site analyzes data to identify characteristics of survivors and the factors involved.",
      website: "https://titanic-survival-prediction-peach.vercel.app/",
    },
  ]
  



export const VISIBLE_PROJECTS = PROJECTS.filter((p) => !p.hidden)

export const projectSlug = (title: string) =>
  title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
