import React from "react";
import { Link } from 'react-router-dom';
import NEFTO from '../assets/images/NEFTO.png'

const DesignIntro = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6 font-['Outfit'] flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-8 md:pr-10">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#0f151c] leading-[1.1] tracking-tight md:ml-5">
            We design digital products <br />
            built to grow
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-gray-500 text-[18px] md:text-xl leading-relaxed max-w-lg md:ml-5">
            We partner with startups and businesses to design, build, and scale
            products that solve real problems and drive measurable growth.
          </p>

          {/* Call to Action Button */}
          <div className="pt-4 md:ml-5">
            <Link
            to={"/contact"}
              className="
    group 
    bg-[linear-gradient(90deg,#00419B_50%,#CB8104_50%)]
    bg-size-[200%_100%] 
    bg-right 
    hover:bg-left 
    text-white px-8 py-4 rounded-full font-semibold text-[16px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out w-fit flex items-center gap-2 cursor-pointer"
            >
              Start a project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* --- Right Side: Black Card (Bitzonic Logo) --- */}
        <div className="w-full h-87.5 md:h-112.5 bg-black rounded-[2.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-gray-800 to-black opacity-50 rounded-[2.5rem]"></div>
          <img src={NEFTO} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default DesignIntro;
