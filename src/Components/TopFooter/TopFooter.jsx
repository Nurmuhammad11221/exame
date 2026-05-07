
const TopFooter = () => {
    return (
        <section className="w-[1360px]  mx-auto px-10 mb-20">
            <div className="bg-[#666dff] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="absolute top-0 left-0 w-16 h-16">
                    <img src="./Shapes2.png" alt="" />
                </div>

                <div className="z-10 max-w-2xl">
                    <p className="text-white text-xs font-bold uppercase tracking-widest mb-4 opacity-90">
                        Newsletter
                    </p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                        Subscribe our News Letter <br className="hidden md:block" /> to get Latest Updates.
                    </h2>
                </div>

                <div className="z-10 w-full md:w-auto">
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Paresh@Pixeto.com"
                            className="w-full md:w-[450px] py-6 px-8 bg-white text-gray-800 outline-none text-lg"
                        />
                        <button className="absolute right-0 h-full px-10 bg-white border-l border-gray-100 hover:bg-gray-50 transition-colors font-bold text-[#1d2130]">
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopFooter;