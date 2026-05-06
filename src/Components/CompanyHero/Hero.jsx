const Hero = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                
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
                        Award-winning Company <br />
                        seen and used by millions <br />
                        around the world  </h1>

                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The Maker is
                        a decentralized.   </p>
                </div>

                <div className="relative">
                    <div className="flex justify-end mb-0">
                        <div className="w-16 h-10 bg-[#F39152]"></div>
                        <div className="w-16 h-10 bg-[#FDC59A]"></div>
                        <div className="w-24 h-10 bg-[#FEEEDF]"></div>
                        <div className="w-16 h-10 bg-[#3A43F1]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="aspect-[4/5]">
                            <img src="Hero1.png" alt="Team 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/5]">
                            <img src="Hero2.png" alt="Team 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/5]">
                            <img src="Hero3.png" alt="Team 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;