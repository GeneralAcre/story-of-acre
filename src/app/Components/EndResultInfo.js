import Image from "next/image"

export default function WarningInfo(){
    return(
        <div className="text-white bg-black pt-10 mt-[30px] ">
                <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10">WARNING SCREEN</h1>
                <Image src="/Titanic/Warning-Titanic.png" width={300} height={700} alt="Warning-Titanic" 
                className="w-[700px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded mb-[30px]" />
                <div className="mb-[30px] pb-[30px]">
                    <p className="w-full md:w-[200px] max-w-[350px] h-auto mt-4 md:mt-0 
                    font-lato text-white ml-5 md:ml-10 text-[14px] lg:text-[32px] mb-[30px]">
                        The survival rating score out of 1 is explained by this model score.<br/>
                        If 1 = 100% chance of survival.
                    </p>
                </div>
        </div>
    )
}
export function StyleInfo(){
    return(
        <div className="mb-[50px]">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10 ">STYLE</h1>

            <Image src="/Titanic/Titanic-style-1.png" width={300} height={200} alt="Titanic-style-1" 
            className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-[30px] lg:mr-0 lg:max-w-[1000px]"/>

            <div className="flex flex-col items-center px-5">
                <p className="w-full md:w-[200px] max-w-[350px] h-auto mt-4 md:mt-0 font-lato 
                text-white text-[14px]">This is the style I am using on this website.<br/>
                    The Titanic survival prediction website 
                    uses the Rethink Sans font.I&apos;m using two main colors to represent my work: 
                    navy blue and yellow.using two neutral colors for text and some space.
                </p>
            </div>

            <Image src="/Titanic/Titanic-style-2.png" width={200} height={300} alt="Titanic-style-2" 
            className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-[30px] lg:mr-0 lg:max-w-[1000px]" />
            <Image src="/Titanic/Titanic-style-3.png" width={200} height={300} alt="Titanic-style-3" 
            className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-auto lg:mr-0 lg:max-w-[1000px]"/>

        </div>
    )
}
export function ResultInfo(){
    return(
        <div className="mb-[50px]">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10">RESULT</h1>
            <div className="font-lato ml-5 md:ml-10 text-white text-[14px] md:text-[16px]">
                <p>The outcome is displayed in two ways:</p>
                <p>1. Survived 2. Did not live</p>
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

export function AboutProjectInfo(){
    return(
        <div className="bg-black pt-10 mt-[30px] pb-[30px]">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10">INFORMATION</h1>
            <Image src="/Titanic/About-Titanic.png" alt="About-Titanic" width={200} height={300} 
            className="w-[400px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded mb-[30px]"/>
            <Image src="/Titanic/About-Titanic-2.png" alt="About-Titanic" width={200} height={300} 
            className="w-[400px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded"/>
        </div>
    )
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