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
            className="absolute inset-0 z-0 size-full" // size-full sets width: 100%; height: 100%
            squareSize={10}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}

        />

        <main className="flex flex-col items-center justify-center p-4">
            <div className="text-center">
                 {/* <MorphingTextDemo/>*/}
                <TypingAnimation/>
                
                <p className="mt-4 text-lg md:text-xl">
                "Exploring the power of blockchain to reshape industries and empower individuals."
                </p>

               
            
            </div>
        </main>

        <div className="z-20 mt-8"> 
            <LinkButton/>
        </div>{/* z-10 more than z-0 now this button work , grid has z-0*/}
         
    </div>

    <div className="flex flex-col justify-center p-4 text-center">
    <SparklesText text="My Works" className="text-2xl font-medium" />
    </div>

    </div>
  );
}


