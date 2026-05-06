import React from 'react';
import { useParams } from 'react-router-dom';
import { ishlar } from '../data/ishlar';
import Navbar from '../Components/Navbar/Navbar';
import Details from '../Components/Career/Details';
import CareerInput from '../Components/Career/CareerInput';
import TopFooter from '../Components/TopFooter/TopFooter';
import Footer from '../Components/Footer/Footer';

const CareerInner = () => {
    const { id } = useParams();
    const ish = ishlar.find((j) => j.id === id);

    return (
        <>
            <Navbar />

                <section className="py-20 max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="flex-1">
                        <p className="uppercase tracking-widest text-sm font-bold mb-4">Career at Ether</p>
                        <h1 className="text-6xl font-bold mb-6 text-[#1d2130]">{ish.title}</h1>
                        <p className="text-gray-500 text-lg mb-10 max-w-lg">{ish.description}</p>

                        <button className="bg-[#666dff] text-white px-10 py-5 font-bold flex items-center gap-4 relative">
                            <div className="absolute top-0 left-0 w-4 h-4 bg-[#ff9344]"><img src="/Shapes2.png" alt="" /></div>
                            Apply Now <span>→</span>
                        </button>
                    </div>

                    <div className="bg-[#ffdec7] p-12 w-full md:w-[450px] relative">
                        <div className="absolute top-0 right-0 p-2 flex gap-1">
                            <img src="./Shapes4.png" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Job Description</h3>
                        <ul className="space-y-4 text-[#1d2130] font-medium">
                            <li>Remote, {ish.location}, {ish.experience} Of Experience</li>
                            <li>Department: {ish.department}</li>
                            <li>Full Time {ish.positions} Position Available.</li>
                        </ul>
                    </div>
                </section>

            <Details />,
            <CareerInput />
            <TopFooter />
            <Footer />
        </>
    );
};

export default CareerInner;