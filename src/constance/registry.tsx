export const REGISTRY = {
    chain: {
      Osmosis: {
        title: "Osmosis",
        description:
          "A Cosmos SDK-based AMM protocol that enables liquidity providers to earn fees and yield by providing liquidity in a multi-token pool",
        logo: "https://cryptologos.cc/logos/osmosis-osmo-logo.svg?v=033",
        website: "https://osmosis.zone",
      },
      Optimism: {
        title: "Optimism",
        description:
          "A Layer 2 scaling solution for Ethereum that enables fast, low-cost, and scalable transactions",
        logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg?v=033",
        website: "https://optimism.io",
      },
      Sui: {
        title: "Sui",
        description:
          "Sui is a first-of-its-kind Layer 1 blockchain and smart contract platform designed to make digital asset ownership fast, private, secure, and accessible.",
        logo: "https://assets.staticimg.com/cms/media/8uGGQmvkfODw7cnx3GuekBb404A2bTYUcTjBklHja.png",
        website: "https://sui.io",
      },
      Chula: {
        title: "ID Chula",
        description:
          "Initia is a network for interwoven rollups. Binding a highly interwoven system of modular networks through architectural ownership.",
        logo: "https://static.wixstatic.com/media/cf3b7e_6fe3d60eb28c4ee7878f303ef3a63090~mv2.jpg/v1/fill/w_252,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoid.jpg",
        website: "https://www.idchulalongkorn.com/",
      },
    },
    organization: {
      "Curia Lab": {
        title: "Curia Lab",
        description:
          "Curia Lab is a research and development lab focusing on privacy-preserving technologies and decentralized governance",
        logo: "https://www.curialab.xyz/images/favicon.png",
        website: "https://curialab.xyz",
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