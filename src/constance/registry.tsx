export const REGISTRY = {
    chain: {
      Personal: {
        title: "Personal Project",
        description:
          "It's my beloved project",
        logo: "/projectPicture/MyDefaultProfile.jpg",
        website: "https://acre-sanpaphat.vercel.app/",
      },
      ID: {
        title: "ID Chula",
        description:
          "Department of Industrial Design",
        logo: "https://static.wixstatic.com/media/cf3b7e_6fe3d60eb28c4ee7878f303ef3a63090~mv2.jpg/v1/fill/w_252,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoid.jpg",
        website: "https://www.idchulalongkorn.com/",
      },
      ISD: {
        title: "ISD Chula",
        description:
          "We are a group of students who are passionate about technology who work together to develop and maintain various projects that benefit the Chulalongkorn University community.",
        logo: "/projectPicture/ISD-Logo.png",
        website: "https://github.com/isd-sgcu",
      },
      Ethereum: {
        title: "Ethereum",
        description:
          "Ethereum is the main platform for thousands of apps and blockchains, all powered by the Ethereum protocol.",
        logo: "/projectPicture/eth-logo.png",
        website: "https://ethereum.org/en/",
      },
      Polkadot: {
        title: "Polkadot",
        description:
          "Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens.",
        logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        website: "https://polkadot.network/",
      },
      Solana: {
        title: "Solana",
        description:
          "Solana is a high-performance blockchain supporting builders around the world.",
        logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        website: "https://solana.com/",
      },
    },

    organization: {
      "Cursor": {
        title: "Cursor",
        description:
          "Cursor is the AI-first code editor built for pair-programming with AI.",
        logo: "https://www.cursor.com/favicon.ico",
        website: "https://cursor.com",
      },
      "Pacifica": {
        title: "Pacifica",
        description:
          "Real-time intent analysis platform for decoding whale behavior through social alpha.",
        logo: "/projectPicture/Whalesight/Pacifica-icon.png",
        website: "https://whale-sight.vercel.app/",
      },
      "Colosseum": {
        title: "Colosseum",
        description:
          "An association to the Colosseum hackathon and Solana devnet event.",
        logo: "/projectPicture/Solana/Symbol-Black.png",
        website: "https://colosseum.com/",
      },
      "dev3pack": {
        title: "dev3pack",
        description:
          "A Web3 developer collective building on Solana.",
        logo: "/projectPicture/Medusa/Logo dev3pack transparent.png",
        website: "https://hack.dev3pack.xyz/",
      },
      "IslandDAO": {
        title: "IslandDAO",
        description:
          "A DAO building the world's first floating city.",
        logo: "/projectPicture/proof-of-alpha/islanddao-logo-dark.png",
        website: "https://www.islanddao.org/",
      },
    },
  } as {
    chain: Record<
      string,
      { title: string; description: string; logo: string; website: string }
    >
    organization: Record<
      string,
      { title: string; description: string; logo: string; website: string }
    >
  }