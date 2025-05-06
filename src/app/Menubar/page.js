
import Link from 'next/link';

export default function Menubar(){
    return(
   <>{/* Navigation Menu - Added to right side */}
      <div className="fixed top-[80px] sm:top-[120px] md:top-[200px] right-0 flex flex-col space-y-2 z-10 text-[20px]">
        <Link href="/about" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>ABOUT
        </Link>
        <Link href="/projects" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span >{`</>`}</span>PROJECT
        </Link>
        <Link href="/invert" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>INVERT
        </Link>
        <Link href="/" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>SHUT DOWN
        </Link>
      </div>
    </>
)};