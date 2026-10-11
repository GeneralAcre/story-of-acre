export const MARKETING = {
      title: "Marketing Portfolio",
      description:
        "Beyond code, I work on the marketing side of Web3 communities: planning campaigns, running brand events, managing merch, and producing the content that brings people in. Here is my work from 2025 to 2026.",
      areas: [
        "Marketing Campaigns",
        "Brand Events",
        "Product Management & Merchandising",
        "Content & Creative Production",
      ],
      website: "https://acre-marketing.vercel.app/",
    };

export interface Project {
  title: string
  hidden?: boolean // true = not shown on the site (data kept for later)
  website: string
  // Custom cover picture; replaces the recorded landing-page loop (and `npm run covers` skips it)
  cover?: string
  description: string
  category?: "Hackathon" | "University project" | "Interest"
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
  socials?: { label: string; href: string }[]
  overview?: { heading: string; body: string }[]
  contributions?: string[]
  // `image` turns a feature into a showcase row: screenshot beside the text.
  features?: { title: string; body: string; image?: string; subfeatures?: { title: string; body: string; definitions?: { term: string; description: string }[] }[] }[]
  // Stack used, each with what it does in this project
  tech?: { name: string; use: string }[]
  // Pictures go in public/projectPicture/<Project>/ and are referenced as "/projectPicture/<Project>/file.png"
  gallery?: { src: string; caption?: string }[]
  outcome?: string[]
}

export const PROJECTS: Project[] = [
    {
      title: "Moment",
      category: "Hackathon",
      chain: "Solana",
      tags: ["Sports collectibles", "Solana"],
      role: "Project Owner",
      timeline: "July 2026 (1-week hackathon)",
      overview: [
        {
          heading: "The Problem",
          body: "Sports collectibles are built around players and final scores. But what fans actually remember is the moment: the late winner, the record broken, the upset nobody saw coming. Those plays disappear after the final whistle, with nothing to keep.",
        },
        {
          heading: "The Solution",
          body: "Moment turns live match outcomes and historic milestones into collectible cards on Solana. Fans draw cards from the matches they watched and keep the plays they never want to forget.",
        },
      ],
      features: [
        { title: "Match packs", body: "Fans remember moments, not stat lines, so packs are built around them. Pick an Event, Match, or Player pack and open a sealed card tied to a real World Cup moment, for 0.01–0.05 devnet SOL.",
          image: "/projectPicture/Moment/draw-packs.png" },
        { title: "Sealed on-chain draw", body: "Every pull is a real Solana transaction, resolved on MagicBlock's Ephemeral Rollup. Opening a pack feels instant but stays on-chain and trusted, without slow, expensive base-layer transactions." },
        { title: "Verifiable randomness", body: "Rarity and card seed come from an oracle VRF you can check on-chain. Collectors only value rare cards if the odds are fair, and nobody has to trust hidden server-side randomness." },
        { title: "Mint as a real NFT", body: "Claim any pull as an SPL token on the base layer. It's durable, transferable, and visible in any wallet, so the card is truly yours to hold, move, or sell instead of being locked in one platform's database." },
      ],
      tech: [
        { name: "React", use: "Pack selection, draw flow, and collection UI" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Solana web3.js", use: "Sends draw and mint transactions" },
        { name: "Solana Wallet Adapter", use: "Connects Phantom and other Solana wallets" },
        { name: "MagicBlock Ephemeral Rollups", use: "Real-time draws without base-layer latency" },
        { name: "Oracle VRF", use: "Verifiable randomness for rarity and card seed" },
      ],
      outcome: [
        "Runner-Up at the TXODD World Cup Hackathon, Superteam Thailand.",
        "Live match outcomes and historic milestones, turned into collectibles on Solana.",
        "A fresh use of sports data beyond scores and predictions, with room to grow after the World Cup.",
      ],
      description:
        "Collect the moments that move the match. Moment turns live World Cup outcomes and historic milestones into on-chain collectible cards on Solana.",
      website: "https://moment-card.vercel.app/",
      award: { label: "TXODD World Cup Hackathon : Superteam Thailand Runner-Up", href: "https://x.com/SuperteamTH/status/2081648418481746298?s=20" },
    },
    {
      title: "Medusa",
      category: "Hackathon",
      w: "dev3pack",
      chain: "Solana",
      role: "Project Owner",
      timeline: "April 2026 (3-day hackathon)",
      tags: ["DeFi", "Credit scoring", "Wallet reputation"],
      overview: [
        {
          heading: "The Problem",
          body: "On-chain lending can't tell a long-standing, reliable wallet from one created yesterday. Lenders have no simple way to judge a wallet's history, raw transaction data is unreadable for most people, and borrowers with a clean track record get the same terms as brand-new wallets.",
        },
        {
          heading: "The Solution",
          body: "Medusa reads a Solana wallet's balance, token accounts, age, and recent transaction signals, and turns them into a readable credit score, a risk level, and an NFT badge that shows how trustworthy the wallet is.",
        },
      ],
      features: [
        { title: "Wallet profile", body: "Connect or paste a Solana wallet to see its credibility score, successful transactions, active days, protocol usage, and wallet age. Its whole history sits in one place, in plain language, so nobody has to dig through block explorers to judge it.",
          image: "/projectPicture/Medusa/profile.png" },
        { title: "Score simulator & DeFi rates", body: "Preview how staking SOL, repaying a loan, or holding longer would move a score, and compare the APR it unlocks across Solend, Kamino, and MarginFi. The score stops being a black box: people see how to improve it and what it's worth.",
          image: "/projectPicture/Medusa/simulator.png" },
        { title: "Public leaderboard", body: "Ranks top-scoring wallets, with anonymous defaults and opt-in display names. Seeing strong wallets sets a benchmark and gives reliable borrowers a visible reward for their history.",
          image: "/projectPicture/Medusa/leaderboard.png" },
        { title: "Point-based NFT badges", body: "Four badge levels, from High Risk to Prime, earned by points, with higher levels needing stronger on-chain evidence. The badge makes a wallet's reputation portable, so other apps can read it at a glance.",
          image: "/projectPicture/Medusa/badge.png" },
      ],
      tech: [
        { name: "Next.js", use: "App framework and page routing" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Solana web3.js (RPC)", use: "Reads wallet balance, token accounts, age, and transaction history to compute the score" },
        { name: "Solana Wallet Adapter", use: "Wallet connection for profiles and badge minting" },
      ],
      outcome: [
        "Runner-Up Thailand at the dev3pack Global Hackathon.",
      ],
      description:
        "Medusa Score is a decentralized credit identity layer for the Solana ecosystem. We transform raw on-chain data transaction history, liquidation events, and protocol loyalty into a verifiable credit score. ",
      website: "https://medusa-score.vercel.app/",
      award: { label: "dev3pack Global Hackathon : Runner-Up Thailand ", href: "https://hack.dev3pack.xyz/projects/jx793eyva2cqv8vv0526r11dr586dtcm" },
    },
        {
      title: "CardMart",
      category: "University project",
      w: "ID Chula",
      chain: "Solana",
      tags: ["Trading cards", "TCG marketplace", "Price discovery"],
      role: "Project Owner",
      timeline: "August 2026 – Present",
      socials: [{ label: "cardmartapp", href: "https://x.com/cardmartapp" }],
      overview: [
        {
          heading: "The Problem",
          body: "Collectors can't find real price data. They spend hours checking eBay and SNKRDUNK to price a single card, then drive to a local store or event just to sell it. And there's no easy way to tell which cards are likely to gain value.",
        },
        {
          heading: "The Solution",
          body: "CardMart puts real market prices, news, and trading in one app. Open it to see what cards actually sell for, then buy or sell raw or graded cards. Keep a card in the vault with an on-chain record, or have it shipped to your home, and see who holds a card and what they trade.",
        },
      ],
      features: [
        { title: "Market", body: "Find cards, compare prices, and follow market activity in one place.", subfeatures: [
          { title: "Buy & sell", body: "Browse listings or sell your own cards. Message sellers to ask questions or request close-up photos and videos.", definitions: [
            { term: "Raw card", description: "A card that has not been professionally checked or scored." },
            { term: "Graded card", description: "A card assessed by a grader. The grading company assigns it a numeric score (such as PSA 9 or PSA 10) and seals it in a protective case." },
            { term: "Grader", description: "A trained specialist who checks a card’s condition and verifies its authenticity." },
          ] },
          { title: "Heatmap", body: "Each tile represents a card series. Larger tiles mean more trading volume, and the color shows whether prices are rising or falling. Choose 24 hours, 7 days, or 30 days to see changes over one day, one week, or one month." },
          { title: "Sale price history", body: "See completed sales and compare actual prices by card condition and grade, instead of relying on asking prices." },
          { title: "Auctions & safe checkout", body: "Set a start time and reserve price for an auction, or bid in real time. Escrow holds payment until the card arrives and is checked. If it does not match the listing, the buyer can be refunded. Keep the card in the vault or have it shipped to your home." },
        ] },
        { title: "AI buying assistant", body: "Set the card, grade, and maximum price you want. The assistant watches new listings, compares asking prices with recent sales, and can buy within your limit. It notifies you when it finds a match, so you do not have to monitor listings all day." },
        { title: "Leaderboard", body: "See the top traders of the week and follow what they buy and sell. Check market activity and find out when prices move." },
      ],
      tech: [
        { name: "Next.js", use: "App framework and page routing" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Framer Motion", use: "Interface animation" },
        { name: "Recharts", use: "Price history charts" },
        { name: "Privy", use: "Sign-in with an embedded wallet created automatically" },
        { name: "Solana web3.js", use: "On-chain escrow and digital certificates" },
      ],
      description:
        "See what your card is really worth, then buy and sell it safely. CardMart combines real market prices for raw and graded cards with escrow-protected trading, auctions, and an AI buying agent.",
      website: "https://www.cardmarts.xyz/",
    },
          {
      title: "AcreLabs",
      category: "Interest",
      chain: "Avalanche",
      role: "Project Owner",
      timeline: "July 2026 – Present",
      socials: [{ label: "acrelabsw", href: "https://x.com/acrelabsw" }],
      tags: ["POAP", "Community", "Loyalty"],
      overview: [
        {
          heading: "The Problem",
          body: "Communities run events all the time, but attendance disappears once the event ends. Organizers can't tell one-time visitors from loyal members, basic check-ins don't capture contributions or partnerships, and members have nothing to show for their involvement.",
        },
        {
          heading: "The Solution",
          body: "AcreLabs lets any community issue its own badges and member cards on Avalanche. Members claim a badge for each event, collect member cards, and earn points on a shared leaderboard.",
        },
      ],
      features: [
        { title: "Claimable event badges", body: "Every event gets its own badge, open to claim during the event and closed after. It's proof you were there that lasts long after the event is over.",
          image: "/projectPicture/AcreLabs/claim-badge.png" },
        { title: "Community member cards", body: "Pick a community and get your own ID-style card with your name, X handle, and photo, or create cards for your own community. Members get a visible way to say they belong beyond a Telegram or Discord group, and communities get a way to recognize them.",
          image: "/projectPicture/AcreLabs/member-card.png" },
        { title: "Leaderboard", body: "Earn 10 points per badge claimed and 5 per member card, with top collectors ranked across AcreLabs. Showing up becomes something people can see and compete on, and the members who keep coming back get rewarded.",
          image: "/projectPicture/AcreLabs/leaderboard.png" },
        { title: "Create your own badge", body: "Any organizer can connect a wallet and issue badges for their event." },
      ],
      tech: [
        { name: "Next.js", use: "App framework and page routing" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Avalanche C-Chain", use: "Where badges and member cards are issued" },
        { name: "wagmi / viem", use: "Contract calls for claiming and creating badges" },
        { name: "Privy", use: "Wallet sign-in" },
        { name: "IPFS (Pinata)", use: "Stores badge artwork and metadata" },
      ],
      description:
        "A native Avalanche loyalty and POAP protocol for issuing custom participation badges. Moving beyond basic event check-ins, it tracks community contributions, loyalty, and partnerships for projects",
      website: "https://www.acrelabs.fun/",
    },
    {
      title: "Obsession",
      category: "Hackathon",
      w: "MagicBlock",
      chain: "Solana",
      role: "Project Owner",
      timeline: "July 2026 (1-week hackathon)",
      tags: ["Gacha", "Fortune cards", "Solana"],
      overview: [
        {
          heading: "The Idea",
          body: "Everyone has a question they can't stop thinking about. Obsession turns it into a keepsake: pick a deck, open a sealed pack, and get an original fortune card for your collection.",
        },
        {
          heading: "How it works",
          body: "Madame Obsession gathers hopes, hunches, and doubts into sealed capsule decks. Each pull is drawn on-chain and the card is yours to keep.",
        },
      ],
      features: [
        { title: "Themed decks", body: "Three live decks (Life, Relationship, and Meme), each with its own art and price from 0.001 SOL. Different questions need different answers, so each deck matches the reading to the question instead of feeling generic.",
          image: "/projectPicture/Obsession/decks.png" },
        { title: "Sealed on-chain draw", body: "Every pull is drawn on-chain, powered by MagicBlock. A fortune only feels meaningful if the draw is fair, and anyone can check the odds." },
        { title: "Collection", body: "Every card you pull is kept in your collection, so you can return when the answer changes." },
      ],
      tech: [
        { name: "Vite + React", use: "Front end and draw flow" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Solana web3.js", use: "Pack purchase and draw transactions" },
        { name: "Solana Wallet Adapter", use: "Wallet connection" },
        { name: "MagicBlock", use: "On-chain draw engine" },
      ],
      description:
        "Obsession is a fully on-chain fortune-card gacha on Solana. For entertainment only. Not financial, legal, or relationship advice.",
      website: "https://gacha-er.vercel.app/",
    },
    {
      title: "Proof Of Alpha",
      cover: "/projectPicture/proof-of-alpha/cover-hd.jpg",
      category: "Hackathon",
      w: "IslandDAO",
      chain: "Solana",
      role: "Project Owner",
      timeline: "June – October 2026",
      socials: [{ label: "created_alpha", href: "https://x.com/created_alpha" }],
      tags: ["AI chat", "Social skills", "Solana"],
      features: [
        { title: "Real-time AI conversations", body: "Practice approaching and talking to someone through live AI chat. Confidence comes from practice, so you can rehearse without real stakes and stop freezing up in real conversations." },
        { title: "AURA reputation token", body: "Every interaction earns or costs AURA, a reputation token stored on Solana that tracks your skill over time. Seeing your progress shows whether you're actually getting better and keeps you practicing." },
        { title: "Upgrade or trade", body: "AURA can be upgraded or traded, so your skill has value outside the game." },
        { title: "Mobile-first wallet login", body: "Works with Solana wallets on Saga and Seeker phones, or Phantom and Backpack on desktop." },
      ],
      tech: [
        { name: "Next.js", use: "App framework" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Solana Wallet Adapter", use: "Wallet login on Saga, Seeker, Phantom, and Backpack" },
        { name: "Solana", use: "Stores the AURA reputation token" },
      ],
      description:
        "Proof of Alpha is an on-chain game where you practice approaching and talking to girls through real-time AI chat : every interaction earns or costs you AURA, a reputation token that's stored on Solana, tracks your skill over time, and can be upgraded or traded.",
      website: "https://proof-of-alpha-live.vercel.app/",
    },
    {
      title: "Signal",
      category: "Hackathon",
      w: "Colosseum",
      chain: "Solana",
      role: "Project Owner",
      timeline: "April – June 2026 (1-month hackathon)",
      socials: [{ label: "Signal_thailand", href: "https://x.com/Signal_thailand" }],
      tags: ["Proof of Presence", "Identity", "Multi-chain"],
      overview: [
        {
          heading: "The Problem",
          body: "Event check-ins are easy to fake. Bots and multi-wallet farmers drain rewards meant for real attendees, organizers can't verify who actually showed up, and builders have no portable record of the events and communities they've been part of.",
        },
        {
          heading: "The Solution",
          body: "Signal attaches to any Luma or Eventbrite event. Attendees scan a QR code, verify they're human with World ID, and check in on-chain. Every check-in becomes a permanent Proof of Presence and builds their Signal Score.",
        },
      ],
      features: [
        { title: "Proof of Presence for any event", body: "Attach Signal to an existing Luma or Eventbrite event. It deploys on Solana, Avalanche, Base, and more, and generates a check-in QR in one transaction, so organizers keep the tools they already use instead of rebuilding the event on a new platform.",
          image: "/projectPicture/Signal/hero.png" },
        { title: "Attach. Scan. Earn.", body: "Attach to an event, scan and verify with World ID, then earn an NFT and a higher Signal Score. One human gets one check-in, so rewards go to real people and nobody can farm check-ins with many wallets.",
          image: "/projectPicture/Signal/three-steps.png" },
        { title: "Multi-chain live events", body: "Browse and filter events across Solana, Avalanche, Base, Polygon, and Ethereum, then check in and claim your NFT. Communities live on different chains, and Signal follows them there instead of locking attendance to one.",
          image: "/projectPicture/Signal/live-events.png" },
        { title: "Builder Passport", body: "A portable on-chain identity tied to your wallet, earned across every event and platform." },
      ],
      tech: [
        { name: "Next.js", use: "App framework and page routing" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Solana web3.js + Wallet Adapter", use: "Check-ins and Proof of Presence NFTs on Solana" },
        { name: "wagmi / viem", use: "Check-ins on Avalanche and other EVM chains" },
        { name: "World ID", use: "Proof of humanity: one human, one check-in" },
        { name: "Luma / Eventbrite", use: "Imports existing events" },
        { name: "IPFS (Pinata)", use: "Stores NFT metadata" },
      ],
      description:
        "An on-chain identity protocol that tracks and verifies ecosystem engagement. By transforming participation into a transparent, verifiable record, it provides a Proof-of-Presence layer that measures how active a contributor truly is within a network.",
      website: "https://signal-builders.vercel.app/",
    },
    {
      title: "Girl or Ladyboy",
      category: "Hackathon",
      w: "Cursor",
      role: "Project Owner",
      timeline: "April 2026",
      tags: ["Game", "Pixel art", "Arcade"],
      features: [
        { title: "Arcade start screen", body: "A pixel-art Nana Plaza scene with score counters, music, and an Insert Coin start, styled like a classic arcade cabinet. The look sets a light, playful tone, so it feels like a game, not a form to fill in.",
          image: "/projectPicture/GirlOrLadyboy/arcade.png" },
        { title: "Story intro", body: "A short visual-novel opening sets the scene on Sukhumvit Soi 4 at 2 a.m., pulling players into the setting before the first question.",
          image: "/projectPicture/GirlOrLadyboy/story.png" },
        { title: "Spotter's field guide", body: "A Tips & Trick page explains the cultural background of kathoey in Thailand and the visual cues to look for, from easy to hard, so players learn and improve instead of guessing blindly.",
          image: "/projectPicture/GirlOrLadyboy/field-guide.png" },
        { title: "Score tracking", body: "Arcade-style 1UP and high-score counters track how well you do." },
      ],
      tech: [
        { name: "Next.js", use: "App framework and page routing" },
        { name: "Tailwind CSS", use: "Styling" },
        { name: "Three.js", use: "WebGL graphics" },
      ],
      description:
        "Game that challenges players to guess whether the character on screen is a real girl or a ladyboy. Test your perception through a pixel-art styled interface with score tracking and classic arcade aesthetics.",
      website: "https://girlorladyboy.vercel.app/",
    },
    {
      title: "WhaleSight",
      hidden: true,
      w: "Pacifica",
      chain: "Solana",
      role: "Project Owner",
      timeline: "2026",
      description:
        "An intelligent whale tracking platform for on-chain analytics. Monitors institutional crypto wallet movements and decodes large-player sentiment in real-time to help investors understand market behavior.",
      website: "https://whale-sight.vercel.app/",
    },
    {
      title: "Mirage",
      hidden: true,
      chain: "Polkadot",
      role: "Project Owner",
      timeline: "2026",
      description:
        "Mirage is a dynamic NFT on Polkadot from a 4x4 Polkadot pixel, your staked assets evolve a dynamic NFT. Earn $XP, watch your Mirage grow, and prepare for living testament to your ecosystem journey.",
      website: "https://polkadot-2025-react-sfna.vercel.app/",
    },
    {
      title: "Titanic Survial Prediction",
      hidden: true,
      w: "ID Chula",
      role: "Project Owner",
      timeline: "2026",
      description:
      "Predicting Titanic survival rates, this site analyzes data to identify characteristics of survivors and the factors involved.",
      website: "https://titanic-survival-prediction-peach.vercel.app/",
    },
  ]
  



export const VISIBLE_PROJECTS = PROJECTS.filter((p) => !p.hidden)

export const projectSlug = (title: string) =>
  title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
