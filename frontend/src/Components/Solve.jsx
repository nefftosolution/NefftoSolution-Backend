import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import GrowYourBusiness from '../assets/images/growYourBusiness.jpeg';

const Solve = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
      {/* Google Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');`}
      </style>

      {/* Main Container */}
      <div 
        className="bg-[#f2f5f7] rounded-[40px] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <p 
            className="uppercase tracking-[0.2em] text-[13px] font-bold mb-6"
            style={{ color: '#CB8104' }}
          >
            • ABOUT OUR WORK
          </p>
          
          <h2 
            className="font-bold leading-[1.2] mb-8"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 60px)', 
              color: '#00419B' 
            }}
          >
            We solve real{' '}
            <span className="relative inline-block">
              problems
              {/* Golden Hand-Drawn Line SVG */}
              <svg
                className="absolute w-full h-3.75 -bottom-3 left-0"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7.5 C 20 2.5, 50 9.5, 98 4.5"
                  stroke="#CB8104"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          
          <p 
            className="leading-relaxed mb-10 max-w-135"
            style={{ 
              fontSize: 'clamp(16px, 2vw, 20px)', 
              color: '#333' 
            }}
          >
            Our mission has always been to balance style with substance, 
            creating meaningful digital experiences that solve real problems 
            for real people.
          </p>
          
          <Link 
            to={'/about'}
            className="flex items-center gap-3 font-bold group transition-all"
            style={{ color: '#00419B' }}
          >
            <span className="text-lg">Learn more about us</span>
            <span className="bg-[#00419B] text-white p-2 rounded-full transition-all duration-300 group-hover:bg-[#CB8104] group-hover:translate-x-1 group-hover:-translate-y-1">
              <FiArrowUpRight size={20} />
            </span>
          </Link>
        </div>

        {/* Right Side: Image with Floating Badge */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-[30px] overflow-hidden shadow-xl bg-[#000000] border-4 border-white">
            <img 
              src={GrowYourBusiness}
              alt="Grow Your Business" 
              className="w-full h-auto object-contain min-h-87.5"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-5 bg-white py-4 px-8 rounded-2xl shadow-2xl border border-gray-100">
            <p 
              className="font-bold text-lg whitespace-nowrap"
              style={{ color: '#00419B' }}
            >
              50+ <span style={{ color: '#CB8104' }}>Projects</span> Delivered
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solve;