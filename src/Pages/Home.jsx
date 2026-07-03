import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Home = () => {

    const blogs = [
        {
            id: 1,
            date: "Jan 19, 2021",
            title: "Today's best design trends for digital products",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            date: "Jan 19, 2021",
            title: "A practical guide to building a brand strategy",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        }
    ];

    const features = [
        {
            title: "On Time Delivery",
            description: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon: "🚀"
        },
        {
            title: "Best Quality",
            description: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon: "⚙️"
        },
        {
            title: "Support Assist",
            description: "Through True Rich Attended does no end it his mother since real had half every him.",
            icon: "🎧"
        }
    ];

    const steps = [
        {
            id: "01",
            title: "Discover",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            ),
            hasBorder: true
        },
        {
            id: "02",
            title: "Designing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            )
        },
        {
            id: "03",
            title: "Development",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            id: "04",
            title: "Testing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            id: "05",
            title: "Deployment",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            )
        },
        {
            id: "06",
            title: "Maintenance",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-400">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            hasBorder: true
        }
    ];

    const services = [
        {
            title: "Technical support",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-400">
                    <path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" />
                    <path d="M21 16v2a2 2 0 0 1-2 2h-1" />
                    <path d="M3 16v2a2 2 0 0 0 2 2h1" />
                    <line x1="9" y1="11" x2="9" y2="16" />
                    <line x1="15" y1="11" x2="15" y2="16" />
                </svg>
            )
        },
        {
            title: "Testing Management",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-400">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            )
        },
        {
            title: "Development",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-400">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        }
    ];
    return (
        <>
            <Navbar />
            {/* HERO SECTION */}
            <section className="bg-[#1C1E24] text-white font-sans overflow-hidden">
                <div className="flex items-center justify-between px-16 py-12 max-w-7xl mx-auto">
                    <div className="w-1/2 space-y-8 pr-10">
                        <h1 className="text-6xl font-bold leading-[1.1]">
                            Transform Your Idea Into Reality with Finsweet
                        </h1>
                        <p className="text-gray-400 text-lg max-w-md">
                            The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <button className="bg-[#444CFC] hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-all">
                                Get Started
                            </button>
                            <button className="flex items-center gap-2 font-semibold hover:underline transition-all">
                                <span className="bg-white/10 p-2 rounded-full text-xs">Request Quote</span>
                            </button>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <img
                            src="Heroim.png"
                            alt="Hero"
                            className="w-full max-w-[550px] h-auto object-contain rounded-sm"
                        />
                    </div>
                </div>

                {/* LOGO CAROUSEL */}
                <div className="px-16 py-16 flex justify-between items-center max-w-7xl mx-auto gap-10">
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo1.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo2.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo3.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo4.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                        <img src="HeroLogo5.png" alt="logo" className="max-h-full max-w-full object-contain opacity-60 grayscale" />
                    </div>
                </div>
            </section>

            {/* ABOUT/COMPANY SECTION */}
            <section className="bg-white py-20 px-16 max-w-7xl mx-auto font-sans">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="md:w-3/5">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-4">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1E24] leading-tight">
                            The company leads entire webdesign process from concept to delivery.
                        </h2>
                    </div>

                    <div className="md:w-2/5 md:pt-10">
                        <h3 className="text-2xl font-bold text-[#1C1E24] mb-4">
                            The Era Of Technology.
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Through True Rich Attended does no end it his mother since real had
                            half every him case in packages enquire we up ecstatic unsatiable
                            saw his giving Remain expense you position concluded.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="h-[450px] bg-gray-100 overflow-hidden">
                        <img
                            src="Mainimg.png"
                            alt="Office meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="h-[450px] bg-gray-100 overflow-hidden">
                        <img
                            src="Mainimg2.png"
                            alt="Team discussion"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="h-[450px] bg-gray-100 overflow-hidden relative">
                        <img
                            src="Mainimg3.png"
                            alt="Presentation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute right-0 top-0 bottom-0 w-3 flex flex-col">
                            <div className="h-1/3 bg-orange-400"></div>
                            <div className="h-1/3 bg-orange-200"></div>
                            <div className="h-1/3 bg-blue-600"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="bg-[#f9faff] py-24 px-6 md:px-24 font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                    <div className="flex-1">
                        <div className="w-4 h-4 bg-[#4e45e4] mb-8"></div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e263a] leading-tight mb-6">
                            Our customers love what we do
                        </h2>

                        <h4 className="text-lg font-semibold text-[#1e263a] mb-4">
                            Transform your idea into reality with finsweet
                        </h4>

                        <p className="text-gray-500 mb-10 max-w-md leading-relaxed">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <img
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                                        src={`https://i.pravatar.cc/150?u=${i + 10}`}
                                        alt="Customer"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-[#1e263a] text-lg">30+</p>
                                <p className="text-gray-400 text-sm">Customer Reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="bg-white p-10 md:p-16 relative shadow-sm">
                            <div className="absolute left-0 top-0 h-full w-2 flex flex-col">
                                <div className="h-1/3 bg-[#f39c12]"></div>
                                <div className="h-1/3 bg-[#ffdcb2]"></div>
                                <div className="h-1/3 bg-[#4e45e4]"></div>
                            </div>

                            <div className="absolute top-8 right-12 text-[#1e263a] opacity-80">
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                    <path d="M0 17.1429V0H17.1429V17.1429L11.4286 28.5714H2.85714L8.57143 17.1429H0ZM22.8571 17.1429V0H40V17.1429L34.2857 28.5714H25.7143L31.4286 17.1429H22.8571Z" />
                                </svg>
                            </div>

                            <blockquote className="text-2xl font-bold text-[#1e263a] leading-snug mb-10 pr-4">
                                "Finsweet has been a wonderful partner to work with. I have been a customer
                                now for the past few months now and I have had nothing but positive experiences!"
                            </blockquote>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://i.pravatar.cc/150?u=johnny"
                                        className="w-12 h-12 rounded-full object-cover"
                                        alt="Johnny Andro"
                                    />
                                    <div>
                                        <p className="font-bold text-[#1e263a]">Johnny Andro</p>
                                        <p className="text-gray-400 text-sm">Director, Company</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 font-bold opacity-60">
                                    <div className="w-6 h-6 bg-gray-300 rounded-sm"></div>
                                    logoipsum*
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#1e263a]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                        </div>
                    </div>

                </div>
            </section>
            {/* PROCESS SECTION */}
            <section className="bg-white py-20 px-6 md:px-24 font-sans overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[12px] font-bold uppercase tracking-widest text-gray-400">Our Process</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e263a] mt-4 mb-6 leading-tight max-w-2xl">
                            The process we are working With Our client Worldwide
                        </h2>
                        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
                            Through True Rich Attended does no end it his mother since real had half every
                            him case in packages enquire we up ecstatic unsettled.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 relative">

                        <div className="hidden md:block absolute top-[25%] left-0 w-full h-[1px] border-t border-dashed border-gray-200 -z-0"></div>
                        <div className="hidden md:block absolute top-[75%] left-0 w-full h-[1px] border-t border-dashed border-gray-200 -z-0"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10">
                                <div className={`bg-white border border-gray-100 p-8 relative ${step.hasBorder ? 'ring-1 ring-transparent' : ''}`}>

                                    {step.hasBorder && (
                                        <div className="absolute bottom-0 left-0 w-full h-1 flex">
                                            <div className="h-full w-1/3 bg-orange-400"></div>
                                            <div className="h-full w-1/3 bg-orange-100"></div>
                                            <div className="h-full w-1/3 bg-blue-600"></div>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-[#fff5f0] w-10 h-10 rounded-full flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <span className="text-2xl font-bold text-gray-100">{step.id}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1e263a] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERTISE SECTION */}
            <section className="bg-[#ECF8F9] py-24 px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

                    <div className="md:w-1/2 space-y-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                            Our Expertise
                        </span>
                        <h2 className="text-5xl font-extrabold text-[#1C1E24] leading-[1.1]">
                            We want to get local identification in every corner of the world in this era of global citizenship
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                        </p>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#444CFC]"></div>

                        <div className="space-y-4">
                            {features.map((item, index) => (
                                <div key={index} className="bg-white p-10 flex items-start gap-6 shadow-sm border-b border-gray-100">
                                    <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#1C1E24] mb-2">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-2 w-full flex mt-0">
                            <div className="w-1/3 bg-[#FF9662]"></div>
                            <div className="w-1/3 bg-[#FFD3AF]"></div>
                            <div className="w-1/3 bg-[#444CFC]"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SERVICES SECTION */}
            <div className="bg-[#fdf0e7] min-h-screen py-16 px-8 md:px-24 font-sans">
                <div className="max-w-6xl mx-auto mb-12">
                    <p className="uppercase text-xs font-bold tracking-widest text-gray-500 mb-4">
                        Our Services
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1f2e] max-w-2xl leading-tight mb-8">
                        We build software solutions that solve client's business challenges
                    </h1>

                    <button className="bg-[#4e45e4] text-white px-7 py-3.5 rounded flex items-center gap-2 font-medium hover:bg-[#3f36c5] transition-colors">
                        Start a Project
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 shadow-sm border border-transparent hover:shadow-xl transition-all duration-300">
                            <div className="bg-[#fff5f0] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#1a1f2e] mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                                We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                            </p>

                            <button className="text-[#4e45e4] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                                Read more
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA NEWSLETTER SECTION */}
            <section className="bg-[#1a1f2e] text-white py-20 px-8 md:px-24 font-sans">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's make something great together!
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Get your projects delivered with the most professional expertise and service possible.
                    </p>
                    <div className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded text-[#1a1f2e] font-medium focus:outline-none"
                        />
                        <button className="bg-[#4e45e4] hover:bg-[#3f36c5] text-white px-8 py-3 rounded font-bold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;