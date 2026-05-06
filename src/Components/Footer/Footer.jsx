import { Link } from 'react-router-dom';

import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white pt-20">
            <div className="max-w-7xl mx-auto px-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-10">
                               <img src="./Shapes3.png" alt="" />
                            </div>
                            <h2 className="text-5xl font-bold text-[#1d2130] leading-tight mb-12">
                                Let's make <br /> something special
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-[#1d2130] font-bold mb-1">Let's talk! </p>
                                <p className="text-lg text-[#1d2130]">020 7993 2905</p>
                                <p className="text-lg text-[#1d2130]">hi@finsweet.com</p>
                            </div>

                            <div className="pt-8 border-t gap-220 border-gray-200 mt-12 flex flex-row justify-between items-end w-full">

                                <p className="text-gray-500 text-sm leading-relaxed max-w-[300px]">
                                    <span className="whitespace-nowrap">DLF Cybercity, Bhubaneswar,</span> <br />
                                    India, &52050
                                </p>

                                <div className="flex items-center gap-4 group cursor-pointer mb-1">
                                    <div className="w-12 h-4 bg-[#666dff] relative flex-shrink-0">
                                        <div className="absolute left-0 top-0 w-3 h-full bg-[#ff9344]"></div>
                                    </div>
                                    <span className="font-bold text-[#1d2130] whitespace-nowrap group-hover:pr-2 transition-all">
                                        Contact Us <span>→</span>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-25 pl-40 ">
                        <ul className="space-y-4">
                            <Link className="font-bold text-[#1d2130]" to="/">Company</Link> <br /> <br />
                            <Link className="text-[#1d2130] opacity-80" to="/Career">Career</Link> <br /> <br />
                            <Link className="text-[#1d2130] opacity-80" to="/blog">Blog</Link><br /> <br />
                            <Link className="text-[#1d2130] opacity-80" to="/contact">Contact us</Link> <br /> <br />
                        </ul>

                        <ul className="space-y-4">
                            <li className="font-bold text-[#1d2130]">Service</li>
                            <li className="text-[#1d2130] opacity-80">Technical support</li>
                            <li className="text-[#1d2130] opacity-80">Testing</li>
                            <li className="text-[#1d2130] opacity-80">Development</li>
                            <li className="text-[#1d2130] opacity-80">AWS/Azure</li>
                        </ul>

                        <ul className="space-y-4">
                            <li className="font-bold text-[#1d2130]">Resources</li>
                            <li className="text-[#1d2130] opacity-80">About Us</li>
                            <li className="text-[#1d2130] opacity-80">Testimonial</li>
                            <li className="text-[#1d2130] opacity-80">Privacy Policy</li>
                            <li className="text-[#1d2130] opacity-80">Terms of use</li>
                        </ul>
                    </div>
                </div>

                
            </div>

            <div className="w-full bg-[#ffe6d2] py-8">
                <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-10">
                        <span className="font-bold text-xl text-[#1d2130]">{`{Finsweet`}</span>
                        <p className="text-sm text-[#1d2130]">©2021 Finsweet</p>
                    </div>
                    <div className="flex gap-8 text-xl text-[#1d2130]">
                        <a href="https://facebook.com/"><img src='/facebook.png'/></a>
                        <a href="https://x.com/"><img src='/twitter1.png' /></a>
                        <a href="https://instagram.com/"><img src='/instagram1.png' /></a>
                        <a href="https://uz.linkedin.com/"><img src='/Linkni1.png'/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;