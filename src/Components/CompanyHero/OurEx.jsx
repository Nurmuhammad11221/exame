const OurExpertise = () => {
  return (
    <section className="bg-[#eaf7f9] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 block mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e2637] leading-[1.1] mb-8">
            We want to get local identification in every corner of the world in this era of global citizenship
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Through True Rich Attended does no end it his mother since real had half
            every him case in packages enquire we up ecstatic unsatiable saw his giving
            Remain expense you position concluded.
          </p>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="relative pt-8"> 
            
            <div className="w-6 h-6 bg-[#6366f1] absolute top-2 left-0 z-10"></div>

            <div className="flex flex-col gap-4">
              
              <div className="bg-white p-8 flex items-start gap-6 rounded-sm shadow-sm">
                <div className="w-14 h-14 bg-[#fff1e6] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="./OurEx1.png" alt="icon" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e2637] mb-2">On Time Delivery</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 flex items-start gap-6 rounded-sm shadow-sm">
                <div className="w-14 h-14 bg-[#fff1e6] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="./OurEx2.png" alt="icon" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e2637] mb-2">Best Quality</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 flex items-start gap-6 rounded-sm shadow-sm relative overflow-hidden">
                <div className="w-14 h-14 bg-[#fff1e6] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="./OurEx3.png" alt="icon" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e2637] mb-2">Support Assist</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Through True Rich Attended does no end it his mother since real had half every him.
                  </p>
                </div>
                
                <div className="flex h-1.5 w-full absolute bottom-0 left-0">
                  <div className="flex-1 bg-[#ff934e]"></div>
                  <div className="flex-1 bg-[#ffcfad]"></div>
                  <div className="flex-1 bg-[#3a43f1]"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurExpertise;