import React from 'react';
import Antigravity from './Antigravity';

const AboutHero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[60vh] py-20 w-full bg-[#FAFAFA] flex flex-col items-center justify-center font-['Outfit'] relative overflow-hidden px-4">
      {/* Animation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color={'#FF9FFC'}
            autoAnimate={true}
            particleVariance={1}
          />
        </div>
      </div>
      
      {/* --- Top Label Section --- */}
      <div className="absolute top-[15%] md:top-[20%] fade-in-down">
        <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2">
          <span className="text-gray-300 text-[12px]">•</span> About
        </p>
      </div>

      {/* --- Main Heading Section --- */}
      <div className="relative text-center z-10 -mt-2.5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none md:leading-[0.9]">
          <span className="bg-linear-to-r from-[#CB8104] to-[#00419B] bg-clip-text text-transparent">
            Creators of digital
          </span>
          <br className="hidden md:block" />
          <span className="bg-linear-to-r from-[#CB8104] to-[#00419B] bg-clip-text text-transparent block md:inline">
            products
          </span>
        </h1>
      </div>

      {/* --- Black Button with Angle Down Icon --- */}
      <div className="absolute bottom-10 md:bottom-4">
        <button 
          onClick={handleScroll}
          className="bg-[#FF6600] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default AboutHero;
