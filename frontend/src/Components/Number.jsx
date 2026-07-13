import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Number = () => {
  const stats = [
    { id: '01', value: '50+', label: 'Projects Delivered' },
    { id: '02', value: '98%', label: 'Client Satisfaction Rate' },
    { id: '03', value: '20+', label: 'Team Members' },
    { id: '04', value: '8/10', label: 'Clients return for more' },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-[#f4f7f9]">
      {/* Google Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');`}
      </style>

      <div 
        className="max-w-350 mx-auto flex flex-col lg:flex-row items-center gap-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-2/5 flex flex-col items-start">
          <p 
            className="uppercase tracking-[0.2em] text-[13px] font-bold mb-4"
            style={{ color: '#CB8104' }}
          >
            • ABOUT OUR BUSINESS
          </p>
          
          <h2 
            className="font-bold leading-[1.2] mb-8"
            style={{ 
              fontSize: 'clamp(40px, 5vw, 60px)', 
              color: '#00419B' 
            }}
          >
            <span className="relative inline-block">
              Bitzonic
              {/* Golden Hand-Drawn Line SVG */}
              <svg
                className="absolute w-full h-3.75 -bottom-2 left-0"
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
            <br /> in Numbers
          </h2>
          
          <p 
            className="leading-relaxed mb-10 max-w-120"
            style={{ 
              fontSize: 'clamp(18px, 2vw, 20px)', 
              color: '#444' 
            }}
          >
            We're proud of what we've built over the years. 
            Here's a glimpse at our journey in numbers.
          </p>
          
          {/* UPDATED BUTTON: Golden Flow Effect */}
          <Link to={"/about"} className="group relative overflow-hidden bg-white border border-[#CB8104] text-[#CB8104] px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-xl flex items-center gap-3">
            {/* Background Flow Layer */}
            <span className="absolute inset-0 bg-[#CB8104] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
              <span className="font-semibold text-lg">About Us</span>
              <div className="bg-[#CB8104]/10 group-hover:bg-white/20 p-1 rounded-full transition-all duration-300 group-hover:rotate-45">
                  <FiArrowUpRight size={20} />
              </div>
            </span>
          </Link>
        </div>

        {/* Right Side: Stats Grid */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-10 rounded-[40px] relative border border-gray-100 flex flex-col justify-center min-h-55 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Corner Index Number */}
              <span className="absolute top-8 right-10 text-gray-400 font-medium text-sm">
                {item.id}
              </span>

              {/* Statistic Value */}
              <h3 
                className="text-6xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#CB8104]"
                style={{ color: '#00419B' }}
              >
                {item.value}
              </h3>

              {/* Statistic Label */}
              <p className="text-gray-500 text-lg font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Number;