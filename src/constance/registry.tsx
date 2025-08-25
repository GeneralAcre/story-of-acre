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
        logo: "/projectPicture/ISD-Logo.png",
        website: "https://ethereum.org/en/",
      }
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