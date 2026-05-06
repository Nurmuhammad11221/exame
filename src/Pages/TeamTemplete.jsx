import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { teamMembers } from '../data/odamlar';
import TopFooter from '../Components/TopFooter/TopFooter';
import Footer from '../Components/Footer/Footer';

const TeamTemplete = () => {
    const { id } = useParams();
    const member = teamMembers.find((m) => m.id === parseInt(id));

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center py-20">
                <div className="w-52 h-52 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white">
                    <img src={member.image} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-4xl font-bold">{member.name}</h1>
                <p className="text-gray-500 uppercase tracking-widest mt-2">{member.title}</p>
                <p className="max-w-2xl text-center mt-6 text-gray-600">{member.bio}</p> <br />
                <div className="flex gap-8 text-xl text-[#1d2130]">
                    <a href="https://x.com/"><img src='/twitter1.png' alt="Twitter" /></a>
                    <a href="https://instagram.com/"><img src='/instagram1.png' alt="Instagram" /></a>
                    <a href="https://uz.linkedin.com/"><img src='/Linkni1.png' alt="Linkedin" /></a>
                </div>
            </div>

            <div className="bg-[#eef8f9] py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10">
          <div className="w-4 h-4 bg-[#6366f1] mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2130]">
            Blog posts from Javena
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-white flex flex-col md:flex-row shadow-sm">
            <div className="w-full md:w-[45%] h-60 md:h-auto">
              <img src="/TeamT.png" className="w-full h-full object-cover"   />
            </div>
            <div className="w-full md:w-[55%] p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-400 mb-2">Jan 19, 2021</span>
              <h3 className="text-xl font-bold text-[#1d2130] mb-6 leading-tight">
                Todays best design trends for digital products
              </h3>
              <a className="inline-flex items-center text-[#6366f1] font-bold text-sm">
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="bg-white flex flex-col md:flex-row shadow-sm">
            <div className="w-full md:w-[45%] h-60 md:h-auto">
              <img 
                src="/TeamT2.png" className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[55%] p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-400 mb-2">Jan 19, 2021</span>
              <h3 className="text-xl font-bold text-[#1d2130] mb-6 leading-tight">
                A practical guide to building a brand strategy
              </h3>
              <a href="#" className="inline-flex items-center text-[#6366f1] font-bold text-sm">
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
        <TopFooter />
        <Footer/>
        </div>
    );
};

export default TeamTemplete;