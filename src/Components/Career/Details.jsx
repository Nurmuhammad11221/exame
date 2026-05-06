import React, { useState } from "react";
import { ish } from "../../data/ish";

const Details = () => {
  const [activeTab, setActiveTab] = useState("details");

  const RenderList = ({ items }) => (
    <ul className="space-y-4 pl-4 md:pl-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-slate-800 shrink-0"></span>
          <span className="text-slate-600 text-[15px] leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full bg-[#f1f8fe] py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-center gap-8 md:gap-16 border-b border-slate-200 mb-10">
          {["details", "requirements", "responsibilities"].map((tab) => (
            <button key={tab}  onClick={() => setActiveTab(tab)}  className={`pb-4 text-[17px] font-bold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? "text-blue-600 border-b-[3px] border-blue-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          {activeTab === "details" && <RenderList items={ish.details} />}

          {activeTab === "requirements" && <RenderList items={ish.requirements} />}

          {activeTab === "responsibilities" && <RenderList items={ish.responsibilities} />}
        </div>
        
      </div>
    </div>
  );
};

export default Details;