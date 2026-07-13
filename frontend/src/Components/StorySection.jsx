import React from 'react';
import Starfield from '../Components/Starfield';

const StorySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#010101] text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 w-full font-sans">

      {/* Background Animation Layer */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80">
        <Starfield 
          speed={0.5} 
          starColor="blue"
          backgroundColor="#010101"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-80 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Heading */}
        <div className="flex flex-col justify-center h-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CB8104]"></span>
            <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
              Our Story
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            To create a world made of thoughtful{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#CB8104] to-[#CB8104]">
              designs and experiences.
            </span>
          </h2>
        </div>

        {/* Right Column: Content Text */}
        <div className="flex flex-col gap-8 text-gray-400 text-[20px] leading-relaxed mt-4 lg:mt-16">
          <p>
            We started with a dream: to bridge the gap between stunning design and
            flawless functionality. Too often, we saw beautiful websites that were a
            nightmare to use, or functional platforms that looked like they were
            designed in 1999.
          </p>
          <p>
            Today, we’re a tight-knit team of designers and developers who believe
            that excellence isn’t optional—it’s the standard. Every project we
            take on receives the same dedication and attention to detail,
            regardless of size or scope.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default StorySection;
