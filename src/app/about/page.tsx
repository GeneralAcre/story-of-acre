import { Header } from "@/components/common/header"
import SectionReveal from "@/components/common/SectionReveal"

export const metadata = {
  title: "About — Acre",
  description: "Learn more about Acre, a frontend developer passionate about blockchain.",
}

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden pt-18 pb-16 px-8">
      <div className="relative flex w-full flex-col items-center justify-center max-w-4xl mx-auto">

        <SectionReveal className="mt-12">
          <div className="space-y-8 text-left">
            <section>
              <h2 className="font-kdam text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-foreground/80 leading-7">
                I'm Acre, a frontend developer with a deep passion for blockchain technology. I specialize in building fast, expressive, and decentralized interfaces that bridge the gap between users and Web3 applications.
              </p>
            </section>

            <section>
              <h2 className="font-kdam text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-foreground/80 leading-7">
                My journey in tech started with a curiosity about how things work on the internet. Over the years, I've evolved from learning basic web development to exploring the fascinating world of blockchain and decentralized applications. Every project I work on is an opportunity to learn and innovate.
              </p>
            </section>

            <section>
              <h2 className="font-kdam text-2xl font-bold mb-4">What I Do</h2>
              <p className="text-foreground/80 leading-7">
                I create user interfaces and experiences for blockchain applications. My focus is on making complex technologies accessible and enjoyable for everyone. Whether it's building a DeFi dashboard, an NFT marketplace, or any Web3 application, I bring design and functionality together seamlessly.
              </p>
            </section>

            <section>
              <h2 className="font-kdam text-2xl font-bold mb-4">Technologies I Love</h2>
              <ul className="space-y-2 text-foreground/80">
                <li>• <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
                <li>• <strong>Web3:</strong> Solidity, Ethereum, Solana, Polkadot</li>
                <li>• <strong>Tools:</strong> Web3.js, Ethers.js, Hardhat</li>
                <li>• <strong>Design:</strong> Figma, Animation with Framer Motion</li>
              </ul>
            </section>

            <section>
              <h2 className="font-kdam text-2xl font-bold mb-4">Beyond Code</h2>
              <p className="text-foreground/80 leading-7">
                When I'm not coding, I'm exploring new blockchain projects, reading about Web3 trends, or experimenting with new design patterns. I'm a continuous learner who thrives in challenging environments that push me to grow.
              </p>
            </section>
          </div>
        </SectionReveal>

      
      </div>
    </main>
  )
}
