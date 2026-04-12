import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import LinkButton from "../components/common/MainButton";
import { MorphingTextDemo } from "@/constance/morphText";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SparklesText } from "@/components/magicui/sparkles-text";
import HeroReveal from "@/components/common/HeroReveal";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen p-4 text-center relative">

        {/* Flickering grid background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full opacity-40"
          squareSize={10}
          gridGap={6}
          color="#FAC335"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Radial vignette overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, #4A043A 85%)"
          }}
        />

        {/* Decorative corner accent top-left */}
        <div className="absolute top-8 left-8 z-10 hidden md:block">
          <div className="w-px h-16 bg-[#FAC335]/30" />
          <div className="w-16 h-px bg-[#FAC335]/30" />
        </div>

        {/* Decorative corner accent bottom-right */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-end">
          <div className="w-16 h-px bg-[#FAC335]/30" />
          <div className="w-px h-16 bg-[#FAC335]/30 ml-auto" />
        </div>

        <main className="flex flex-col items-center justify-center relative z-10">
          <HeroReveal>
            <div className="text-center">

              {/* Name morphing text */}
              <div className="z-10">
                <MorphingTextDemo />
              </div>

              {/* Typing subtitle */}
              <TypingAnimation />

              <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <p className="mt-4 text-base md:text-xl text-[#FAC335]/90 font-light tracking-wide">
                  Exploring the power of blockchain to reshape industries and empower individuals.
                </p>

                <p className="mt-8 max-w-2xl text-sm md:text-base leading-relaxed text-[#D4A0C0] mx-auto">
                  Hi! I&apos;m Acre, a frontend developer with a keen interest in blockchain technology.{" "}
                  I&apos;m fascinated by how blockchain can reshape industries and empower individuals.{" "}
                  Feel free to check out my works and don&apos;t hesitate to reach out!
                </p>
              </div>
            </div>
          </HeroReveal>
        </main>

        <div className="z-20 mt-[30px]">
          <LinkButton />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4A0C0] font-mono">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#FAC335]/60 to-transparent" />
        </div>
      </div>

      {/* "My Works" section header */}
      <div className="flex flex-col justify-center p-4 text-center">
        <SparklesText text="My Works" className="text-2xl font-medium" />
      </div>
    </div>
  );
}
