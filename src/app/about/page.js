import Image from "next/image";

export default function About() {
    return (
      <div className="bg-black text-white min-h-screen ">
        {/* ABOUT Header */}
        <header className="w-full text-[36px] sm:text-[45px] md:text-[60px] lg:text-[100px] xl:text-[140px] 
              leading-none tracking-wide font-bold mb-8">ABOUT</header>
  
        {/* Main content container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-[40px]">
          {/* ASCII Art Image - Column 1 */}
          <div className="col-span-1 flex justify-center">
            <video src="/About-me.mp4" autoPlay loop muted playsInline/>
            </div>
          {/* Text Content - Column 2 & 3 */}
          <div className="col-span-1 md:col-span-2">
            
            <div className="mb-[50px]">{/* UI/UX DESIGNER Tag */}
              <span className="bg-[#d8ff4a] text-black px-2 py-1 inline-block text-[24px] font-medium">● UI/UX DESIGNER</span>
            </div>
  
            {/* Introduction */}
            <div className="space-y-4 mb-[50px]">
              <p className="text-sm md:text-[24px] mb-[50px]">Hi! I'm Acre</p>
              <p className="text-sm md:text-[24px]">I'm a UI/UX Designer based in Bangkok, Thailand, with a background in Industrial Design.</p>
              <p className="text-sm md:text-[24px]">I'm passionate about turning curious ideas into clean, functional digital experiences.</p>
              <p className="text-sm md:text-[24px]">I believe in thoughtful design, real value, and building fresh, honest solutions.</p>
            </div>
  
            {/* Social Links */}
            <div className="flex space-x-10 mb-12">
              <a href="https://www.linkedin.com/in/sanpaphat-porntongprasert-0b239b321/" target="_blank" rel="noopener noreferrer"
              className="hover:bg-[#D61A69] rounded p-1 transition">
                <Image src="/Linkedin-logo.png" width={40} height={40} alt="Linkedin"/>
              </a>

              <a href="https://github.com/GeneralAcre" target="_blank" rel="noopener noreferrer"
              className="hover:bg-[#D61A69] rounded p-1 transition">
                <Image src="/Github-color.png" width={40} height={40} alt="Github"/>
              </a>
              
              <a href="mailto:sanpaphat14@gmail.com" className="hover:bg-[#D61A69] rounded p-1 transition">
                  <Image src="/Mail-color.png" width={40} height={40} alt="Email" />
              </a>

            </div>

          </div>
        </div>
  
        {/* Education Section */}
        <div className="mt-8 border-t border-gray-800 pt-8 mb-[80px]">
          <h2 className="text-2xl md:text-[64px] mb-6 ml-[20px]">Education</h2>
          
          <div className="border border-white p-6 max-w-[650px] ml-[50px]">
            {/* University Info */}
            <div className="flex mb-4">

            <Image src="/Chulalongkorn.png" width={105} height={100} alt="Chula" className="mr-[35px]"></Image>

              <div>
                <div className="bg-[#D61A69] text-white text-[24px] px-2 py-1 inline-block mb-2">Currently Attending</div>
                <h3 className="text-[30px] font-medium">Chulalongkorn University</h3>
              </div>
            </div>
            
            {/* Degree Info */}
            <div className="ml-[140px] ">
              <p className="text-[30px] mb-4">B.I.D Industrial design</p>
              <p className="text-[30px] mb-3">Relevant Coursework:</p>
              
              {/* Course Tags */}
              <div className="flex flex-wrap gap-5">
                <span className="bg-[#D61A69] text-white text-[16px] px-2 py-1">UX/UI Design</span>
                <span className="bg-[#D61A69] text-white text-[16px] px-2 py-1">Design Methods</span>
                <span className="bg-[#D61A69] text-white text-[16px] px-2 py-1">Design Experiment</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }