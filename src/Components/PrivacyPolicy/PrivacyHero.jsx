import React from 'react';

const PrivacyHero = () => {
  return (
    <div className="w-full bg-[#f1f8fe] py-12 px-6 md:px-20">
        <div className='b'> <img src="/shape,ong" alt="" /> </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d2130] mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated on 27th January 2021
          </p>
        </div>

        <div className="flex gap-1 shrink-0">
          <img src="/Shape6.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default PrivacyHero;