import LinkButton from "../components/common/MainButton";
import { MorphingTextDemo } from "@/constance/morphText";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import HeroReveal from "@/components/common/HeroReveal";

export default function Hero() {
  return (
    <div className="w-full">

      {/* ─── HERO SECTION ─── */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">

        {/* Flickering grid background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full opacity-30"
          squareSize={10}
          gridGap={6}
          color="#FAC335"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 25%, #4A043A 80%)",
          }}
        />

        {/* Decorative corner — top left */}
        <div className="absolute top-8 left-8 z-10 hidden md:block">
          <div className="w-px h-12 bg-[#FAC335]/30" />
          <div className="w-12 h-px bg-[#FAC335]/30" />
        </div>

        {/* Decorative corner — top right */}
        <div className="absolute top-8 right-8 z-10 hidden md:flex flex-col items-end">
          <div className="w-12 h-px bg-[#FAC335]/30" />
          <div className="w-px h-12 bg-[#FAC335]/30 ml-auto" />
        </div>

        <HeroReveal>
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">

            {/* Eyebrow label */}
            <p className="font-mono text-[10px] tracking-[0.45em] uppercase text-[#FAC335]/60">
              ▸ Frontend Developer · Blockchain
            </p>

            {/* Morphing name */}
            <MorphingTextDemo />

            {/* Typing subtitle */}
            <TypingAnimation />

            {/* Description */}
            <div className="max-w-2xl space-y-3">
              <p className="text-base md:text-xl text-[#FAC335]/80 font-light tracking-wide">
                Exploring the power of blockchain to reshape industries and empower individuals.
              </p>
              <p className="text-sm md:text-base text-[#D4A0C0] leading-relaxed">
                Hi! I&apos;m Acre — a frontend developer with a keen interest in blockchain.
                I build interfaces that are fast, expressive, and decentralised.
                Feel free to check out my work and reach out anytime!
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-2">
              <LinkButton />
            </div>
          </div>
        </HeroReveal>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#D4A0C0]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#FAC335]/50 to-transparent" />
        </div>
      </div>

      {/* ─── MY WORKS DIVIDER ─── */}
      <div className="flex flex-col items-center py-4 text-center">
        <SparklesText text="My Works" className="text-2xl font-medium" />
      </div>

    </div>
  );
}