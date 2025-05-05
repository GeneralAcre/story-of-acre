export default function Project() {
    return (
        <>
            {/* Fixed Header */}
            <header className="w-full text-[36px] sm:text-[45px] md:text-[60px] lg:text-[100px] xl:text-[140px] leading-none tracking-wide font-bold">
                PROJECTS
            </header>

                <div className="px-4 sm:px-10 pb-16 bg-black min-h-screen text-white">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                    {/* Project Name */}
                    <div>
                    <p className="text-[#d8ff4a] text-[28px] sm:text-[36px] mb-2">{`[/>`} PROJECT NAME</p>
                    <div className="bg-[#D61A69] text-white text-[28px] sm:text-[36px] font-bold leading-[40px] ml-0 sm:ml-[60px] inline-flex flex-col p-4">
                        <p>TITANIC</p>
                        <p>SURVIVAL</p>
                        <p>PREDICTION</p>
                    </div>
                    <p className="text-[#06FFFE] text-[28px] sm:text-[36px] mt-2 ml-0 sm:ml-[60px]">2025</p>
                    </div>

                    {/* Info Section */}
                    <div className="md:col-span-3 ml-0 sm:ml-[20px]">
                    <p className="text-[#d8ff4a] text-[28px] sm:text-[36px] mb-2">{`[/>`} INFO</p>
                    <p className="whitespace-pre-line leading-relaxed text-[20px] sm:text-[28px] text-white">
                        THIS PROJECT IS A MACHINE LEARNING WEB APP THAT PREDICTS WHETHER A PASSENGER
                        WOULD SURVIVE THE TITANIC DISASTER BASED ON PERSONAL AND TRAVEL INFORMATION,
                        USING HISTORICAL DATA AND CLASSIFICATION MODELS, WITH AN INTERACTIVE USER
                        INTERFACE FOR REAL-TIME PREDICTIONS.
                        {"\n\n"}DESIGN: FIGMA
                        {"\n"}TECH: NEXTJS , TAILWINDCSS
                        {"\n"}HTTPS://TITANIC-SURVIVAL-PREDICTION-PEACH.VERCEL.APP
                    </p>
                    </div>

                    {/* Visit Site */}
                    <div className="flex items-start justify-end mt-4 md:mt-0">
                    <a
                        href="https://titanic-survival-prediction-peach.vercel.app"
                        target="_blank"
                        className="text-[#d8ff4a] text-[28px] sm:text-[36px] hover:underline"
                    >
                        VISIT SITE →
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}
