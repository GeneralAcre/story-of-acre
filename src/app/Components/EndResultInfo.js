import Image from "next/image"

export default function WarningInfo(){
    return(
        <div className="text-white bg-black">
            <h1 className="text-[16px] font-bold text-[#FFFFFF] mb-[20px]">WARNING SCREEN</h1>
             <Image src="/Titanic/Warning-Titanic.png" width={300} height={700} alt="Warning-Titanic" 
              className="max-w-full h-auto mt-[30px]" />
            <p className="font-lato">The survival rating score out of 1 is explained by this model score.<br/>
                If 1 = 100% chance of survival.</p>
    
         </div>
    )
}
export function StyleInfo(){
    return(
        <div>
            <h1 className="text-[16px] font-bold text-[#FFFFFF]">STYLE</h1>
            <Image src="/Titanic/Titanic-style-1.png" width={800} height={500} alt="Titanic-style-1" 
            className="max-w-full h-auto" />
            <Image src="/Titanic/Titanic-style-2.png" width={200} height={300} alt="Titanic-style-2" 
            className="max-w-full h-auto mt-[30px]" />
            <Image src="/Titanic/Titanic-style-3.png" width={200} height={300} alt="Titanic-style-3" 
            className="max-w-full h-auto mt-[30px]" />
            <div className="text-white font-lato">This is the style I am using on this website.The Titanic survival prediction website 
                uses the Rethink Sans font.And I'm using two main colors to represent my work: 
                navy blue and yellow.using two neutral colors for text and some space.</div>
        </div>
    )
}

export function FormInfo(){
    return(
        <div></div>
    )
}

export function ResultInfo(){
    return(
        <div>
            <h1 className="text-[16px] font-bold text-white">FORM</h1>
        </div>
    )
}

export function AboutProjectInfo(){
    return(
        <div>
            <h1 className="text-[16px] font-bold text-white">ABOUT</h1>
        </div>
    )
}