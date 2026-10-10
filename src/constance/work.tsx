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
  painPoints?: string[]
  contributions?: string[]
  // `image` turns a feature into a showcase row: screenshot beside the text.
  // `why` = why we need it, `fixes` = the problem it fixes.
  features?: { title: string; body: string; image?: string; why?: string; fixes?: string }[]
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
          body: "Sports collectibles are built around players and final scores. But what fans actually remember is the moment: the late winner, the record broken, the upset nobody saw coming. Those moments have no way to be owned.",
        },
        {
          heading: "The Solution",
          body: "Moment turns live match outcomes and historic milestones into collectible cards on Solana. Fans draw cards from the matches they watched and keep the plays they never want to forget.",
        },
      ],
      painPoints: [
        "Fans want to collect the moments of a match, not just a player card or the final score.",
        "The plays people remember most disappear after the final whistle, with nothing to keep.",
      ],
      features: [
        { title: "Match packs", body: "Pick a pack (Event, Match, or Player) and open a sealed card tied to a real World Cup moment. Each pack costs 0.01–0.05 devnet SOL.",
          image: "/projectPicture/Moment/draw-packs.png",
          why: "Fans connect with moments, not stat lines. Packs built around events and matches let them collect the part of the game they actually remember.",
          fixes: "Sports collectibles that only offer player cards and final scores." },
        { title: "Sealed on-chain draw", body: "Every pull is a real Solana transaction, resolved on MagicBlock's Ephemeral Rollup.",
          why: "A draw has to feel instant, but it also has to be on-chain to be trusted.",
          fixes: "Slow, expensive base-layer transactions that kill the pack-opening moment." },
        { title: "Verifiable randomness", body: "Rarity and card seed come from an oracle VRF you can check on-chain.",
          why: "Collectors only value rare cards if they believe the odds are fair.",
          fixes: "Hidden server-side randomness that nobody can audit." },
        { title: "Mint as a real NFT", body: "Claim any pull as an SPL token on the base layer: durable, transferable, and visible in any wallet.",
          why: "A collectible is only yours if you can hold, move, or sell it outside the app.",
          fixes: "Cards locked inside one platform's database." },
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
          body: "On-chain lending can't tell a long-standing, reliable wallet from one created yesterday. Every borrower gets treated the same, so good history earns nothing.",
        },
        {
          heading: "The Solution",
          body: "Medusa reads a Solana wallet's balance, token accounts, age, and recent transaction signals, and turns them into a readable credit score, a risk level, and an NFT badge that shows how trustworthy the wallet is.",
        },
      ],
      painPoints: [
        "Lenders have no simple way to judge a wallet's history before lending.",
        "Borrowers with a clean track record get the same terms as brand-new wallets.",
        "Raw transaction data is unreadable for most people.",
      ],
      features: [
        { title: "Wallet profile", body: "Connect or paste a Solana wallet to see its credibility score, successful transactions, active days, protocol usage, and wallet age.",
          image: "/projectPicture/Medusa/profile.png",
          why: "Trust needs evidence. A profile puts a wallet's history in one place, in plain language.",
          fixes: "Having to dig through block explorers to judge a wallet." },
        { title: "Score simulator & DeFi rates", body: "Preview how staking SOL, repaying a loan, or holding longer would move a score, and compare the APR it unlocks across Solend, Kamino, and MarginFi.",
          image: "/projectPicture/Medusa/simulator.png",
          why: "A score is only useful if people know how to improve it and what it's worth.",
          fixes: "Credit scores that feel like a black box with no clear next step." },
        { title: "Public leaderboard", body: "Ranks top-scoring wallets, with anonymous defaults and opt-in display names.",
          image: "/projectPicture/Medusa/leaderboard.png",
          why: "Seeing strong wallets sets a benchmark and gives people a reason to build good history.",
          fixes: "No visible reward for being a reliable borrower." },
        { title: "Point-based NFT badges", body: "Four badge levels, from High Risk to Prime, earned by points. Higher levels need stronger on-chain evidence.",
          image: "/projectPicture/Medusa/badge.png",
          why: "A badge makes a wallet's reputation portable, so other apps can read it at a glance.",
          fixes: "Reputation that stays trapped inside one dashboard." },
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
          body: "Trading card collectors have to search across multiple websites to compare prices and find reliable information. That makes it difficult to know whether a card is fairly priced.",
        },
        {
          heading: "The Solution",
          body: "CardMart is one place to see what a graded card is really worth and then buy or sell it safely. Real sale prices sit next to a peer-to-peer marketplace where payment is held in escrow until the card passes inspection, and every card carries an on-chain certificate backed by the physical card in the vault.",
        },
      ],
      painPoints: [
        "Collectors have to visit many websites to find card prices and information.",
        "Scattered listings make it difficult to compare prices and judge a fair market price.",
        "Buying from strangers is risky: there's no guarantee the card matches the listing or that the seller will deliver.",
      ],
      features: [
        { title: "Market data", body: "Price history from completed sales, by grade, compared against eBay and TCGplayer.",
          image: "/projectPicture/CardMart/market-data.png",
          why: "Without real sale history, collectors guess, or trust whatever price the seller asks. Completed sales by grade show what a fair price looks like before anyone buys or lists.",
          fixes: "Checking eBay, TCGplayer, and Facebook groups one by one to price a single card." },
        { title: "Protected payments", body: "Buyer funds sit in on-chain escrow and are only released after the card passes warehouse inspection. If it doesn't match the listing, the buyer is refunded.",
          image: "/projectPicture/CardMart/protected-payments.png",
          why: "Trading with strangers online is where collectors get scammed. Holding the money until the card is inspected removes the risk for both sides: the buyer gets the right card, the seller gets paid.",
          fixes: "Fake or misdescribed cards, and sellers who take the money and never ship." },
        { title: "Digital certificate", body: "Every card gets a certificate on the blockchain, backed by the physical card stored in the vault." },
        { title: "Live auctions", body: "Real-time bidding with start times, reserve prices, and escrow settlement.",
          image: "/projectPicture/CardMart/live-auctions.png",
          why: "Rare cards don't have a fixed price. Auctions let the market decide, and settling through the same escrow keeps an auction as safe as a normal sale.",
          fixes: "Informal comment-section auctions with no reserve price and no payment protection." },
        { title: "Buying agent", body: "Watches new listings for a card, grade, and max price you set, and never pays over your limit.",
          image: "/projectPicture/CardMart/buying-agent.png",
          why: "Good deals on a specific card and grade disappear fast. The agent watches every new listing so collectors don't have to refresh marketplaces all day, and it never goes over their budget.",
          fixes: "Missing a good listing because you weren't online when it went up." },
        { title: "No wallet needed", body: "Sign in and a wallet is created for you automatically. Signing in is free; you only pay when you list or buy." },
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
        "See what your card is really worth, then buy and sell it safely. CardMart combines real market prices for graded cards with escrow-protected trading and an on-chain certificate for every card.",
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
          body: "Communities run events all the time, but showing up leaves no lasting record. Organizers can't easily see who keeps coming back, and members have nothing to show for their involvement.",
        },
        {
          heading: "The Solution",
          body: "AcreLabs lets any community issue its own badges and member cards on Avalanche. Members claim a badge for each event, collect member cards, and earn points on a shared leaderboard.",
        },
      ],
      painPoints: [
        "Event attendance disappears once the event ends.",
        "Organizers can't tell one-time visitors from loyal members.",
        "Basic check-ins don't capture contributions, loyalty, or partnerships.",
      ],
      features: [
        { title: "Claimable event badges", body: "Every event gets its own badge. Members claim it while it's open; it closes after the event.",
          image: "/projectPicture/AcreLabs/claim-badge.png",
          why: "A badge is proof you were there that lasts beyond the photo album.",
          fixes: "Attendance that leaves no record once the event is over." },
        { title: "Community member cards", body: "Pick a community and get your own ID-style card with your name, X handle, and photo, or create cards for your own community.",
          image: "/projectPicture/AcreLabs/member-card.png",
          why: "Members want a visible way to say they belong, and communities want a way to recognize them.",
          fixes: "Membership that only exists in a Telegram or Discord group." },
        { title: "Leaderboard", body: "10 points per badge claimed and 5 per member card. Top collectors are ranked across AcreLabs.",
          image: "/projectPicture/AcreLabs/leaderboard.png",
          why: "Points turn showing up into something people can see and compete on.",
          fixes: "No reward for the members who keep coming back." },
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
        { title: "Themed decks", body: "Three live decks (Life, Relationship, and Meme), each with its own art and price from 0.001 SOL.",
          image: "/projectPicture/Obsession/decks.png",
          why: "Different questions need different answers. Themed decks match the reading to the question.",
          fixes: "One-size-fits-all fortune apps that feel generic." },
        { title: "Sealed on-chain draw", body: "Every pull is drawn on-chain, powered by MagicBlock.",
          why: "A fortune only feels meaningful if the draw is fair.",
          fixes: "Gacha games where nobody can check the odds." },
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
      category: "Hackathon",
      w: "IslandDAO",
      chain: "Solana",
      role: "Project Owner",
      timeline: "June – October 2026",
      socials: [{ label: "created_alpha", href: "https://x.com/created_alpha" }],
      tags: ["AI chat", "Social skills", "Solana"],
      features: [
        { title: "Real-time AI conversations", body: "Practice approaching and talking to someone through live AI chat.",
          why: "Confidence comes from practice, and practice is hard to get without real stakes.",
          fixes: "Freezing up in real conversations because you've never rehearsed one." },
        { title: "AURA reputation token", body: "Every interaction earns or costs AURA, a reputation token stored on Solana that tracks your skill over time.",
          why: "Progress you can see keeps people practicing.",
          fixes: "No way to measure whether you're actually getting better." },
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
          body: "Event check-ins are easy to fake. One person can claim with many wallets, so attendance records and rewards can't be trusted, and a builder's real participation never adds up to anything.",
        },
        {
          heading: "The Solution",
          body: "Signal attaches to any Luma or Eventbrite event. Attendees scan a QR code, verify they're human with World ID, and check in on-chain. Every check-in becomes a permanent Proof of Presence and builds their Signal Score.",
        },
      ],
      painPoints: [
        "Bots and multi-wallet farmers drain event rewards meant for real attendees.",
        "Organizers can't verify who actually showed up.",
        "Builders have no portable record of the events and communities they've been part of.",
      ],
      features: [
        { title: "Proof of Presence for any event", body: "Attach Signal to an existing Luma or Eventbrite event. It deploys on Solana, Avalanche, Base, and more, and generates a check-in QR in one transaction.",
          image: "/projectPicture/Signal/hero.png",
          why: "Organizers already use Luma and Eventbrite. Signal works on top of them instead of asking everyone to switch tools.",
          fixes: "Having to rebuild an event on a new platform just to get on-chain check-ins." },
        { title: "Attach. Scan. Earn.", body: "Attach to an event, scan and verify with World ID (one human, one check-in), then earn an NFT and a higher Signal Score.",
          image: "/projectPicture/Signal/three-steps.png",
          why: "Rewards only matter if each one goes to a real person, once.",
          fixes: "Sybil attacks: one person farming many check-ins with many wallets." },
        { title: "Multi-chain live events", body: "Browse and filter events across Solana, Avalanche, Base, Polygon, and Ethereum, then check in and claim your NFT.",
          image: "/projectPicture/Signal/live-events.png",
          why: "Communities live on different chains. A presence layer has to follow them there.",
          fixes: "Attendance tools locked to a single chain." },
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
        { title: "Arcade start screen", body: "A pixel-art Nana Plaza scene with score counters, music, and an Insert Coin start, styled like a classic arcade cabinet.",
          image: "/projectPicture/GirlOrLadyboy/arcade.png",
          why: "The look sets the tone: it's a light, playful game, not a serious test.",
          fixes: "Quiz-style games that feel like filling in a form." },
        { title: "Story intro", body: "A short visual-novel opening sets the scene on Sukhumvit Soi 4 at 2 a.m. before the game begins.",
          image: "/projectPicture/GirlOrLadyboy/story.png",
          why: "A few lines of story pull players into the setting before the first question.",
          fixes: "Games that drop you in with no context." },
        { title: "Spotter's field guide", body: "A Tips & Trick page explains the cultural background of kathoey in Thailand and the visual cues, from easy to hard.",
          image: "/projectPicture/GirlOrLadyboy/field-guide.png",
          why: "Players improve when they understand what to look for.",
          fixes: "Guessing blindly with no way to learn." },
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
