import Image from "next/image"

export default function WarningInfo(){
    return(
        <div className="text-white bg-black">
            <div className="ml-[20px]">
                <h1 className="text-[16px] font-bold text-[#FFFFFF] mb-[20px]">WARNING SCREEN</h1>
                <Image src="/Titanic/Warning-Titanic.png" width={300} height={700} alt="Warning-Titanic" 
                className="max-w-full h-auto mt-[30px]" />
                <p className="font-lato">The survival rating score out of 1 is explained by this model score.<br/>
                    If 1 = 100% chance of survival.
                </p>
            </div>
        </div>
    )
}
export function StyleInfo(){
    return(
        <div className="ml-5 md:ml-10">
            <h1 className="ttext-base md:text-lg font-bold text-white">STYLE</h1>
            <Image src="/Titanic/Titanic-style-1.png" width={800} height={500} alt="Titanic-style-1" 
            className="w-full h-auto mt-4" />
            <Image src="/Titanic/Titanic-style-2.png" width={200} height={300} alt="Titanic-style-2" 
            className="w-full md:w-[200px] h-auto mt-4 md:mt-0" />
            <Image src="/Titanic/Titanic-style-3.png" width={200} height={300} alt="Titanic-style-3" 
            className="max-w-full h-auto mt-[30px]" />
            <div className="text-white font-lato m-[24px] lg:m-[36px]">
                This is the style I am using on this website.The Titanic survival prediction website 
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
        <div>
            <h1 className="text-[16px] font-bold text-white">RESULT</h1>
            <p>The outcome is displayed in two ways.1:survived 2:did not live.</p>
        </div>
    )
}

export function AboutProjectInfo(){
    return(
        <div>
            <h1 className="text-[16px] font-bold text-white">INFORMATION</h1>
            <Image src="/Titanic/About-Titanic.png" alt="About-Titanic" width={200} height={300} className="rounded-sm"/>
            <Image src="/Titanic/About-Titanic-2.png" alt="About-Titanic" width={200} height={300} className="rounded-sm m-[10px]"/>
        </div>
    )
}