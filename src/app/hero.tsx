import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import LinkButton from "../components/common/MainButton";
import { MorphingTextDemo } from "@/constance/morphText";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Hero() {
  return (
    <div>
        <div className="flex flex-col justify-center min-h-screen p-4 text-center">
        {/* Text for your name/title, now centered by the parent */}
        <FlickeringGrid
            className="absolute inset-0 z-0 size-full opacity-40" // size-full sets width: 100%; height: 100%
            squareSize={10}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}

        />

        <main className="flex flex-col items-center justify-center">
            <div className="text-center">
                <div className="z-10">
                    <MorphingTextDemo/>
                </div>

                <TypingAnimation/> {/* Personal Portfolio */}
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <p className="mt-4 text-base md:text-xl">
                        Exploring the power of blockchain to reshape industries and empower individuals.
                    </p>

                    {/* And finally the second paragraph */}
                    <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed max-w-4xl">
                        Hi! I&apos;m Acre, a frontend developer with a keen interest in blockchain technology. <br/>
                        I&apos;m fascinated by how blockchain can reshape industries and empower individuals. <br/>
                        Feel free to check out my works and don&apos;t hesitate to reach out if you have any questions or 
                        just want to connect!
                    </p>
                </div>
            </div>
        </main>

        <div className="z-20 mt-[30px]"> 
            <LinkButton/>
        </div>{/* z-10 more than z-0 now this button work , grid has z-0*/}
         
    </div>

    <div className="flex flex-col justify-center p-4 text-center">
    <SparklesText text="My Works" className="text-2xl font-medium" />
    </div>

    </div>
  );
}


