
export default function ProjectCard({
  name,
  role,
  timeline,
  description,
  overview,
  imageUrl,
  siteUrl,
  children,
  isOpen,       
  setIsOpen,        
}) {

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full h-full p-0 sm:p-0 rounded-xl text-black relative overflow-y-auto shadow-lg">
            
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-10 bg-[#EAFE48] flex justify-center items-center py-2 
                 border-b border-black relative">
                {/* Project Name in Center */}
              <h3 className="text-black font-bold text-[16px] sm:text-[24px] tracking-widest text-center">{name}</h3>

              {/* Close Button in Top Right */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 group">
                  <button onClick={() => setIsOpen(false)}
                  className="text-black text-2xl font-bold hover:opacity-80">×</button>

                  {/* Tooltip */}
                  <span className="absolute right-0 top-full mt-1 bg-[#000000] text-white text-[16px] px-2 py-1 
                  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">Close Tab
                  </span>
              </div>
            </div>

            {/* Header Image */}
            <div className="w-full h-[550px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}/>

            {/* Content Section */}
            <div className="p-6 sm:p-10 space-y-6">
              {/* Background Section */}
              <div>
                <p className="text-[#D61A69] text-[20px] tracking-widest font-bold ">BACKGROUND</p>

                <hr className="border-b-1 border-[#72767F] mb-[30px]" />

                <h2 className="text-[#D61A69] text-[32px] sm:text-4xl font-bold tracking-widest mb-[15px]">{name}</h2>
                <p className="text-[20px] text-[#72767F] mb-2">&lt;UX/UI Design&gt; &lt;Uni Project&gt;</p>
                <p className="text-[16px] text-black leading-relaxed max-w-[750px] font-lato">{description}</p>
              </div>

              {/* Role & Timeline */}
              <div className="flex flex-row justify-between py-4 text-sm">
                <div>
                  <p className="text-[#D61A69] text-[20px] font-bold">ROLE</p>
                  <p className="text-[16px] font-lato">{role}</p>
                </div>
                <div>
                  <p className="text-[#D61A69] text-[20px] font-bold">TIMELINE</p>
                  <p className="text-[16px] font-lato">{timeline}</p>
                </div>
              </div>

              {/* Visit Site */}
              {siteUrl && (
                <a href={siteUrl} target="_blank" rel="noopener noreferrer"className="inline-block">
                  <button className="bg-[#EAFE48] text-black font-bold px-4 py-2 mt-2 rounded-sm 
                    inline-flex items-center hover:opacity-80 transition">VISIT SITE <span className="ml-2">→</span>
                  </button>
                </a>
              )}

              {/* Overview */}
              <div>
                <p className="text-[#D61A69] text-[20px] tracking-widest font-bold ">OVERVIEW</p>
                <hr className="border-b-1 border-[#72767F] mb-[30px]" />
                <p className="mt-2 text-black leading-relaxed max-w-[1200px] text-[16px] font-lato">{overview}</p>
              </div>
            
              <div className="mt-6 border border-[#D61A69] p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                    <div>
                        <p className="text-[#D61A69] font-bold">&lt;RESEARCH&gt;</p>
                        <p className="mt-1 font-lato text-[12px]">Gathering Data</p>
                    </div>
                    <div>
                        <p className="text-[#D61A69] font-bold">&lt;DESIGN&gt;</p>
                        <p className="mt-1 font-lato text-[12px]">Select style<br />of Website</p>
                    </div>
                    <div>
                        <p className="text-[#D61A69] font-bold">&lt;PROTOTYPE&gt;</p>
                        <p className="mt-1 font-lato text-[12px]">Responsive & Layout</p>
                    </div>
                    <div>
                        <p className="text-[#D61A69] font-bold">&lt;IMPLEMENT&gt;</p>
                        <p className="mt-1 font-lato text-[12px]">Coding & Debugging</p>
                    </div>
                </div>
            </div>

            {children && <div className="mt-[20px]">{children}</div>} {/*End Result Section */}

          </div>
        </div>
      )}
    </div>
  );
}
