import TypingText ,{RandomAppearText,AnimatedHeader} from "./Animations/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white sm:px-12 py-10 relative ml-[10px]">
      <AnimatedHeader/>

      <main className="mt-[50px] sm:mt-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <div className="lg:w-1/2 ml-[10px] relative w-[60vw] h-[40vh] aspect-[3/2] top-[30px]">
          <video src="/acre-ascii.mp4" autoPlay loop muted playsInline className="w-full h-auto object-cover"/>
        </div>

        {/* Right side: text content */}
        <div className="w-full lg:w-1/2 text-xl sm:text-2xl space-y-12">
        <RandomAppearText text="/ UXUI DESIGNER & FRONTEND DEVELOPER"className="mb-[50px] mt-[50px] sm:text-[20px] md:text-[30px] lg:text-[40px] "/>
        <br/>
        <RandomAppearText text="/ BANGKOK , THAILAND" delay={1500}className="mb-[50px] mt-[50px] sm:text-[20px] md:text-[30px] lg:text-[40px]"/>
          {/* Added quote text */}
          <TypingText />
          
        </div>
      </main>
    </div>
  );
}