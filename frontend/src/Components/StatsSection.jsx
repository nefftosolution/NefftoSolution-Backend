import React from 'react';

const StatsSection = () => {
  const baseSize = "text-[96px] md:text-6xl font-bold inline-block";
  const upStyle = "relative -top-4 text-4xl md:text-5xl inline-block";

  const stats = [
    { 
      content: (
        <div className={baseSize}>
          20<span className={upStyle}>+</span>
        </div>
      ), 
      label: "Team Members" 
    },
    { 
      content: (
        <div className={baseSize}>
          4<span className={upStyle}>+</span>
        </div>
      ), 
      label: "Years Experience" 
    },
    { 
      content: (
        <div className={baseSize}>
          50
          <span className={upStyle}>+</span>
        </div>
      ), 
      label: "Projects Delivered" 
    },
    { 
      content: (
        <div className={baseSize}>
          98
          <span className={upStyle}>%</span>
        </div>
      ), 
      label: "Client Satisfaction" 
    },
  ];

  return (
    <section className="bg-[#f9f9f9] w-full py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Label */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CB8104]"></span>
          <span className="text-gray-500 text-[12px] font-bold tracking-[0.15em] uppercase">
            Our Numbers
          </span>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="text-[#111827]">
                {stat.content}
              </div>
              
              <p className="text-gray-500 text-[14px] md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
