
const InnerBlogHero = () => {
    return (
        <section className='max-w-7xl mx-auto py-12 px-6 md:px-2 font-sans
'>

            <div className=' gap-12 items-start'>
                <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10">
                        <img src="./Shape.png" alt="Logo Left" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-12 h-12">
                        <img src="./Shapes.png" alt="Logo Right" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="mb-12">
                    <span className="text-gray-900 font-bold tracking-[0.2em] text-sm uppercase block mb-6">  Company </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-[#1e2637] leading-tight mb-8">
                        Breaking the code How did we <br /> build our Figma plugin </h1>

                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout. The Maker is a decentralized. We aim to attain the <br /> greatest satisfaction for our clients</p>
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <img src="/Blo1.png" className="w-10 h-10 rounded-full" alt="Author" />
                    <div className="text-sm">
                        <span className="text-[#592EA9] font-bold">Andrew Jonson</span>
                        <span className="text-gray-400 ml-2">| Posted on 27th January 2021</span>
                    </div>
                </div>

                <div className="relative">
                    <img src="/OurVs.png" className="w-full h-[400px] object-cover" />
                     <div className=" flex h-3 w-full max-w-xs ml-236">
          <div className="bg-blue-700 w-1/4"></div>
          <div className="bg-orange-200 w-1/2"></div>
          <div className="bg-orange-400 w-1/4"></div>
        </div>
                </div>
            </div>
        </section>
    );
}

export default InnerBlogHero;
