import React from 'react';
import { Link } from 'react-router-dom';

const JoinOurTeam = () => {
  return (
    <section className="bg-[#f9f9f9] w-full py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start justify-center">
          
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
            <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
              Careers
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-[#111827] mb-6 tracking-tight">
            Join Our Team
          </h2>

          {/* Paragraph */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
            We're always looking for talented individuals who share our passion for design
            and development. Check our open positions.
          </p>

          {/* Link with Arrow */}
          <Link
            to="/contact" 
            className="group flex items-center gap-2 text-[#b06f03] text-lg font-semibold hover:text-[#b06f03] transition-colors"
          >
            See Openings
            {/* Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>

        {/* Right Side: Black Card */}
        <div className="bg-[#0d1017] rounded-4xl w-full min-h-87.5 md:min-h-100 flex flex-col justify-center items-center text-center p-8 md:p-12 shadow-2xl">
          {/* Small Top Text */}
          <h3 className="text-white text-2xl md:text-3xl font-medium mb-1">
            Join Neffto<span className="text-[#b06f03]">.</span>
          </h3>
          
          {/* Big Bold Text */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-[#b06f03]">GROW</span> <span className="text-white">WITH US</span>
          </h2>
        </div>

      </div>
    </section>
  );
};

export default JoinOurTeam;
