const OurStory = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24 mb-12">
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-6 h-6 bg-[#6366f1] mb-6"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-900"> Our Story </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1e2637] leading-tight mb-8">
            From Startups to Titans of Industry 
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
            Through True Rich Attended does no end it his mother since 
            favourable real had half every him case in packages enquire we up 
            ecstatic unsatiable saw his giving Remain expense of gay produce 
            excited perceived do an a china mean its so ye when in explained 
            Hearts am next over match mr partiality not shoud latter thus as out 
            no passed forming middleton exercise up 
          </p>
        </div>

        <div className="flex-1 w-full bg-[#fef0e3] p-10 md:p-12 lg:p-16 flex items-center">
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 w-full">
            
            {[
              { label: "Project Delivered", value: "1560+" },
              { label: "Professional", value: "100+" },
              { label: "Happy Client", value: "950+" },
              { label: "Experience", value: "10 yrs" }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e2637] mb-2">{item.value}</h3>
                <div className="flex mb-3">
                  <div className="w-4 h-1 bg-[#3A43F1]"></div>
                  <div className="w-8 h-1 bg-[#FDC59A]"></div>
                  <div className="w-4 h-1 bg-[#F39152]"></div>
                </div>
                <p className="text-sm font-bold text-gray-800">{item.label}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-8 lg:px-16"> 
        <div className="flex flex-wrap justify-between items-center gap-12  pt-10">
          
           <div className="flex justify-center">
            <img src="HeroLogo1.png" alt="logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

           <div className="flex justify-center">
            <img src="HeroLogo2.png" alt="logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

           <div className="flex justify-center">
            <img src="HeroLogo3.png" alt="logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>
           <div className="flex justify-center">

            <img src="HeroLogo4.png" alt="logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

           <div className="flex justify-center">
            <img src="HeroLogo5.png" alt="logo" className="h-20 md:h-24 w-auto object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;