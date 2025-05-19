import WarningInfo, { StyleInfo ,ResultInfo,AboutProjectInfo} from "../Components/EndResultInfo"


export default function EndResult(){
    return(
        <div className="mt-[50px] w-full bg-[#D61A69] h-full"> {/* Extra details specific to this project */}
            <h1 className="text-xl md:text-2xl font-bold text-white text-center md:text-left mb-[10px]">END RESULT</h1>
            <hr className="border-b-1 border-[#FFFFFF] mb-[30px]" />

            <StyleInfo/>
            <WarningInfo/>
            <ResultInfo/>
            <AboutProjectInfo/>

        </div>
    )
}