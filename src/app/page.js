import TypingText ,{RandomAppearText,AnimatedHeader} from "./Animations/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white sm:px-12 py-10 relative ml-[10px]">
      <AnimatedHeader/>

      <main className="mt-[50px] sm:mt-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <div className="relative w-full lg:w-1/2 max-w-[90vw] mx-auto lg:mx-0 aspect-[3/2] mt-[10px] lg:mt-[30px]">
          <video src="/acre-ascii.mp4" autoPlay loop muted playsInline className="w-full h-auto object-cover"/>
        </div>

        {/* Right side: text content */}
        <div className="w-full lg:w-1/2 text-xl sm:text-2xl space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 lg:mt-0">
          <RandomAppearText text="/ UXUI DESIGNER & FRONTEND DEVELOPER" 
            className="mb-[20px] sm:mb-4 md:mb-6 lg:mb-[50px] mt-3 sm:mt-4 md:mt-6 lg:mt-[50px] 
            text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px]"/>
          
          <RandomAppearText 
            text="/ BANGKOK , THAILAND" delay={1500}
            className="mb-2 sm:mb-4 md:mb-[100px] lg:mb-[200px] mt-3 sm:mt-4 md:mt-6 lg:mt-[70px] 
            text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px]"/>

            <TypingText />
        </div>
        
      </main>
    </div>
  );
}