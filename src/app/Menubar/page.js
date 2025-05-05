  export default function Menubar(){
    return(
   <>{/* Navigation Menu - Added to right side */}
      <div className="fixed top-[80px] sm:top-[120px] md:top-[200px] right-0 flex flex-col space-y-2 z-10 text-[20px]">
        <a href="/about" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>ABOUT
        </a>
        <a href="/projects" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span >{`</>`}</span>PROJECT
        </a>
        <a href="/invert" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>INVERT
        </a>
        <a href="/" className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors">
          <span>{`</>`}</span>SHUT DOWN
        </a>
      </div>
    </>
)};