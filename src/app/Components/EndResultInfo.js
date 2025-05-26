import Image from "next/image"

export default function WarningInfo() {
    return (
        <div className="bg-black text-white px-5 md:px-10 lg:px-20 pt-10 lg:pb-20">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">WARNING SCREEN</h1>

            {/* Image + Description in Flex Layout */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                <Image src="/Titanic/Warning-Titanic.png" width={1000} height={600} alt="Warning-Titanic"
                className="w-full max-w-[400px] rounded shadow-lg"/>
                <p className="font-lato text-white text-sm md:text-base max-w-xl leading-relaxed mb-[50px]">
                The survival rating score out of 1 is explained by this model score.
                <br />
                    <span className="font-bold bg-[#EAFE48] text-black px-2 py-1 rounded-md">
                        If&gt;1 = 100% chance of survival.
                    </span>
                </p>
            </div>
        </div>
    );
  }
export function StyleInfo() {
    return (
      <div className="mb-20 px-5 md:px-10 lg:px-20">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-6">STYLE</h1>
  
        {/* First Image + Description */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          <Image src="/Titanic/Titanic-style-1.png" width={1000} height={600} alt="Titanic-style-1"
            className="w-full max-w-[600px] rounded shadow-lg"/>
          <p className="font-lato text-white text-sm md:text-base max-w-xl leading-relaxed">
            This is the style I am using on this website.
            <br />
            The Titanic survival prediction website uses the Rethink Sans font. I&apos;m using two main colors to represent
            my work: 
            <span className="font-bold ml-1 bg-[#2541B2] px-2 py-1 rounded-md text-black">navy blue</span> and 
            <span className="font-bold ml-1 bg-[#EEC750] px-2 py-1 rounded-md text-black">yellow</span> Neutral
            tones are used for readability and spacing is designed to guide user attention.
          </p>
        </div>
  
        {/* Second and Third Images Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 gap-10">
          <Image src="/Titanic/Titanic-style-2.png" width={1000} height={600} alt="Titanic-style-2"
            className="w-full max-w-[600px] rounded shadow-lg"/>
          <Image src="/Titanic/Titanic-style-3.png" width={1000} height={600} alt="Titanic-style-3"
            className="w-full max-w-[600px] rounded shadow-lg"/>
        </div>
      </div>
    );
  }
export function ResultInfo(){
    return(
        <div className="pt-10 px-5 md:px-10 lg:px-20 pb-6">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">RESULT</h1>
            <div className="font-lato text-white text-[14px] md:text-[16px]">
                <p>The outcome is displayed in two ways:</p>

            </div>
            <div className="font-lato text-[14px] flex flex-row justify-center gap-20 mt-[30px]">
                {/* Not Survived */}
                <div className="flex flex-col items-center">
                    <Image src="/Titanic/NotSurvived-Titanic.png" width={200} height={300} alt="Not Survived"
                    className="w-[100px] lg:w-[200px] h-auto rounded shadow-lg"/>
                    <p className="mt-[20px] text-white text-sm md:text-base ">Not Survived</p>
                </div>

                {/* Survived */}
                <div className="flex flex-col items-center">
                    <Image src="/Titanic/Survived-Titanic.png" width={200} height={300} alt="Survived"
                    className="w-[100px] lg:w-[200px] h-auto rounded shadow-lg"/>
                    <p className="mt-[20px] text-white text-sm md:text-base ">Survived</p>
                </div>
            </div>
        </div>
    )
}

export function AboutProjectInfo() {
    return (
      <div className="bg-black text-white px-5 md:px-10 lg:px-20 pt-10 pb-20">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">INFORMATION</h1>
  
        {/* Images + Description */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image group */}
          <div className="flex flex-col gap-8 w-full max-w-[400px]">
            <Image
              src="/Titanic/About-Titanic.png"
              alt="About-Titanic"
              width={1000}
              height={600}
              className="rounded shadow-lg w-full"
            />
            <Image
              src="/Titanic/About-Titanic-2.png"
              alt="About-Titanic-2"
              width={1000}
              height={600}
              className="rounded shadow-lg w-full"
            />
          </div>
  
          {/* Description */}
          <p className="font-lato text-white text-sm md:text-base max-w-xl leading-relaxed">
            This project aims to visualize survival outcomes from the Titanic dataset using a user-friendly interface.
            <br />
            The layout is designed for clarity and is fully responsive across devices, using modern typography and spacing
            for easy reading.
          </p>
        </div>
      </div>
    );
  }
  

export function FooterInfo() {
    return (
        <div className="bg-[#EAFE48] py-4">
            <h1 className="text-black font-bold text-[16px] sm:text-[24px] tracking-widest text-center">
                THIS IS ALL ABOUT TITANIC PROJECT
            </h1>
        </div>
    );
}