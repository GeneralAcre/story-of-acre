import Image from "next/image"

export default function WarningInfo(){
    return(
        <div className="text-white bg-black">
                <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10 ">WARNING SCREEN</h1>
                <Image src="/Titanic/Warning-Titanic.png" width={300} height={700} alt="Warning-Titanic" 
                className="w-[700px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded" />
                <p className="font-lato">The survival rating score out of 1 is explained by this model score.<br/>
                    If 1 = 100% chance of survival.
                </p>
        </div>
    )
}
export function StyleInfo(){
    return(
        <div className="mb-[30px]">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10 ">STYLE</h1>
                <Image src="/Titanic/Titanic-style-1.png" width={300} height={200} alt="Titanic-style-1" 
                className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-[30px] lg:mr-0 lg:max-w-[1000px]"/>
                <Image src="/Titanic/Titanic-style-2.png" width={200} height={300} alt="Titanic-style-2" 
                className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-[30px] lg:mr-0 lg:max-w-[1000px]" />
                <Image src="/Titanic/Titanic-style-3.png" width={200} height={300} alt="Titanic-style-3" 
                className="w-[700px] max-w-[300px] h-auto mt-4 rounded mx-auto lg:ml-auto lg:mr-0 lg:max-w-[1000px]"/>
            <div className="w-full md:w-[200px] h-auto mt-4 md:mt-0 font-lato text-white ml-5 md:ml-10 text-[14px]">
                This is the style I am using on this website.<br/>
                The Titanic survival prediction website 
                uses the Rethink Sans font.And I&apos;m using two main colors to represent my work: 
                navy blue and yellow.using two neutral colors for text and some space.
            </div>
        </div>
    )
}

export function FormInfo(){
    return(
        <div>

        </div>
    )
}

export function ResultInfo(){
    return(
        <div className="mb-[30px]">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10">RESULT</h1>
            <p className="font-lato">The outcome is displayed in two ways.1:survived 2:did not live.</p>
            <div className="font-lato text-[14px]">
                <Image src="/Titanic/NotSurvived-Titanic.png" width={200} height={300} alt="Not-Survived"
                className="w-[400px] max-w-[100px] mx-auto lg:max-w-800 h-auto mt-4 rounded"/>
                <p>SURVIVED</p>
                <Image src="/Titanic/Survived-Titanic.png" width={200} height={300} alt="Survived"
                className="w-[400px] max-w-[100px] mx-auto lg:max-w-800 h-auto mt-4 rounded"/>
                <p>NOT SURVIVED</p>
            </div>
        </div>
    )
}

export function AboutProjectInfo(){
    return(
        <div className="bg-black ">
            <h1 className="text-base md:text-lg font-bold text-white ml-5 md:ml-10">INFORMATION</h1>
            <Image src="/Titanic/About-Titanic.png" alt="About-Titanic" width={200} height={300} 
            className="w-[400px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded"/>
            <Image src="/Titanic/About-Titanic-2.png" alt="About-Titanic" width={200} height={300} 
            className="w-[400px] max-w-[300px] mx-auto lg:max-w-800 h-auto mt-4 rounded"/>
        </div>
    )
}