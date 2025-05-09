import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8">
      {/* ABOUT Header */}
      <header className="w-full text-[40px] sm:text-[45px] md:text-[60px] lg:text-[100px] xl:text-[140px] 
            leading-none tracking-wide font-bold mb-8 ">ABOUT</header>

        <div className="w-full px-4 sm:px-8">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
            {/* Video Section */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/10]">
                <video src="/About-me.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded" />
              </div>
            </div>

            {/* Text & Socials */}
            <div className="md:col-span-2 mt-8 md:mt-0">
              {/* UI/UX Tag */}
              <div className="mb-6">
                <span className="bg-[#d8ff4a] text-black px-2 py-1 inline-block text-[18px] sm:text-[24px] font-medium">
                  ● UI/UX DESIGNER
                </span>
              </div>

              {/* Intro Text */}
              <div className="space-y-4 mb-8 text-[18px] sm:text-[22px] md:text-[24px] text-white">
                <p>Hi! I'm Acre</p>
                <p>I'm a UI/UX Designer based in Bangkok, Thailand, with a background in Industrial Design.</p>
                <p>I'm passionate about turning curious ideas into clean, functional digital experiences.</p>
                <p>I believe in thoughtful design, real value, and building fresh, honest solutions.</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6 sm:space-x-10 mb-12">
                <a href="https://www.linkedin.com/in/sanpaphat-porntongprasert-0b239b321/" target="_blank" rel="noopener noreferrer"
                  className="hover:bg-[#D61A69] rounded p-1 transition">
                  <Image src="/Linkedin-logo.png" width={40} height={40} alt="Linkedin" />
                </a>
                <a href="https://github.com/GeneralAcre" target="_blank" rel="noopener noreferrer"
                  className="hover:bg-[#D61A69] rounded p-1 transition">
                  <Image src="/Github-color.png" width={40} height={40} alt="Github" />
                </a>
                <a href="mailto:sanpaphat14@gmail.com" className="hover:bg-[#D61A69] rounded p-1 transition">
                  <Image src="/Mail-color.png" width={40} height={40} alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
                

      {/* Education Section */}
      <div className="mx-auto px-4 mt-8 border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Education</h2>
        
        <div className="border border-white p-4 md:p-6 max-w-full sm:max-w-xl md:max-w-2xl">
          {/* University Info with Logo - always keeping logo on left */}
          <div className="flex flex-row gap-4 md:gap-6 mb-6">
            <div className="w-20 h-20 flex-shrink-0">
              {/* University logo */}
              <Image src="/Chulalongkorn.png" width={80} height={80} alt="Chulalongkorn University" />
            </div>
            
            <div className="flex-grow">
              <div className="bg-[#D61A69] text-white text-sm md:text-base px-2 py-1 inline-block mb-2">
                Currently Attending
              </div>
              <h3 className="text-xl md:text-3xl font-medium">Chulalongkorn University</h3>
            </div>
          </div>
          
          {/* Degree Info */}
          <div className="ml-24 md:ml-27">
            <p className="text-lg md:text-2xl mb-4">B.I.D Industrial design</p>
            <p className="text-lg md:text-2xl mb-3">Relevant Coursework:</p>
            
            {/* Course Tags */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <span className="bg-[#D61A69] text-white text-xs md:text-sm px-2 py-1">UX/UI Design</span>
              <span className="bg-[#D61A69] text-white text-xs md:text-sm px-2 py-1">Design Methods</span>
              <span className="bg-[#D61A69] text-white text-xs md:text-sm px-2 py-1">Design Experiment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
}
