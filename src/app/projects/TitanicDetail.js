import ModelTitanicInfo from "../Components/EndResultInfo"
import Image from "next/image"

export default function EndResult(){
    return(
        <div className="mt-[50px] w-full bg-[#D61A69] h-[1000px]"> {/* Extra details specific to this project */}
            <h1 className="text-xl md:text-2xl font-bold text-white text-center md:text-left mb-[10px]">END RESULT</h1>
            <hr className="border-b-1 border-[#FFFFFF] mb-[30px]" />

            <h1 className="text-[16px] font-bold text-[#FFFFFF]">STYLE</h1>
            <Image src="/Titanic-style-1.png" width={800} height={500} alt="Titanic-style-1" className="max-w-full h-auto" />

            <h1 className="text-[16px] font-bold text-[#FFFFFF] mb-[20px]">WARNING SCREEN</h1>
            <ModelTitanicInfo/>
            <h1 className="text-[16px] font-bold text-[#FFFFFF] bg-[#030000]">TITANIC INFORMATION</h1>

            <h1 className="text-[16px] font-bold text-[#FFFFFF]">RESULT</h1>

            <h1 className="text-[16px] font-bold text-[#FFFFFF] bg-[#030000]">FORM</h1>



        </div>
    )
}