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


            {/* Morphing name */}
            <MorphingTextDemo />

            {/* Typing subtitle */}
            <TypingAnimation />

            {/* Description */}
            <div className="flex flex-nowrap justify-center items-center gap-x-2">
              {["Builder", "Community Manager", "Marketer"].map((kw, i, arr) => (
                <span key={kw} className="text-sm md:text-lg text-[#FAC335]/80 font-mono whitespace-nowrap font-light tracking-wide flex items-center gap-x-2">
                  {kw}{i < arr.length - 1 ? <span className="opacity-50">✦</span> : null}
                </span>
              ))}
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