
import Hero from "./Hero";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import LinkButton from "./link/page";

export default function Header() {
  return (
    // The main container div is now a flex column, centered both horizontally and vertically.
    // min-h-screen ensures it takes up at least the full viewport height, allowing vertical centering.
    <div className="flex flex-col justify-center min-h-screen p-4 text-center">
      {/* Text for your name/title, now centered by the parent */}
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full" // size-full sets width: 100%; height: 100%
        squareSize={10}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        // Removed fixed height={500} and width={800} to allow responsiveness
      />
       <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 z-10 whitespace-nowrap">SANPAPHAT PORNTONGPRASERT</div>

      <div className="mb-8"> 
        <Hero />
      </div>
      <LinkButton/>
    </div>
  );
}
