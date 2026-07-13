import React from 'react';
import Starfield from '../Components/Starfield';

const ReadyCTA = () => {
  return (
    <section className="w-full bg-[#010101] py-20 md:py-28 px-4 flex flex-col items-center justify-center text-center font-sans relative overflow-hidden">
       
      {/* Background Animation Layer */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80">
        <Starfield 
          speed={0.5} 
          starColor="blue"
          backgroundColor="#010101"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-80 pointer-events-none"></div>
      </div>

      {/* Top Label */}
      <div className="mb-5 z-10 relative">
        <p className="text-gray-500 text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
          <span className="text-gray-400 text-[12px]">●</span> GET IN TOUCH
        </p>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight leading-tight z-10 relative">
        Ready to take next step with us?
      </h2>

      {/* CTA Button */}
      <button 
        className="
            text-[16px] group relative z-10
            bg-[linear-gradient(90deg,#00419B_50%,#CB8104_50%)] 
            bg-size-[200%_100%] 
            bg-right 
            hover:bg-left 
            text-white font-semibold py-3 px-8 rounded-full 
            shadow-lg shadow-teal-500/20 
            transition-all duration-500 ease-out 
            flex items-center gap-2 cursor-pointer"
        onClick={() => console.log("Project started!")}
      >
        <span>Start a project</span>
        
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </button>

    </section>
  );
};

export default ReadyCTA;
