import Image from "next/image";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8">
      {/* ABOUT Header */}
      <header className="w-full text-[36px] sm:text-[45px] md:text-[60px] lg:text-[100px] xl:text-[140px] 
            leading-none tracking-wide font-bold mb-8 ">ABOUT</header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 sm:px-8">{/*Video Responsive*/}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[9/10]">
            <video src="/About-me.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded"/>
          </div>
        </div>
      </div>

        {/* Text & Socials */}
        <div className="md:col-span-2">
          {/* UI/UX Tag */}
          <div className="mb-6">
            <span className="bg-[#d8ff4a] text-black px-2 py-1 inline-block text-[18px] sm:text-[24px] font-medium">
              ● UI/UX DESIGNER
            </span>
          </div>

          {/* Intro Text */}
          <div className="space-y-4 mb-8 text-sm sm:text-[18px] md:text-[24px]">
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
        

      {/* Education Section */}
      <div className="mt-8 border-t border-gray-800 pt-8 mb-20">
        <h2 className="text-2xl sm:text-4xl md:text-[64px] mb-6">Education</h2>

        <div className="border border-white p-6 max-w-full sm:max-w-[650px] mx-auto">
          {/* University Info */}
          <div className="flex flex-col sm:flex-row mb-4 items-center sm:items-start">
            <Image src="/Chulalongkorn.png" width={105} height={100} alt="Chula" className="sm:mr-8 mb-4 sm:mb-0" />

            <div>
              <div className="bg-[#D61A69] text-white text-[20px] sm:text-[24px] px-2 py-1 inline-block mb-2">
                Currently Attending
              </div>
              <h3 className="text-[24px] sm:text-[30px] font-medium">Chulalongkorn University</h3>
            </div>
          </div>

          {/* Degree Info */}
          <div className="sm:ml-[140px]">
            <p className="text-[20px] sm:text-[30px] mb-4">B.I.D Industrial Design</p>
            <p className="text-[20px] sm:text-[30px] mb-3">Relevant Coursework:</p>

            {/* Course Tags */}
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#D61A69] text-white text-[14px] sm:text-[16px] px-2 py-1">UX/UI Design</span>
              <span className="bg-[#D61A69] text-white text-[14px] sm:text-[16px] px-2 py-1">Design Methods</span>
              <span className="bg-[#D61A69] text-white text-[14px] sm:text-[16px] px-2 py-1">Design Experiment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
