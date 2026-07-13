import React from "react";
import Antigravity from "../Components/Antigravity";

const Explore = () => {
  // Scroll function
  const handleScrollDown = (e) => {
    const currentSection = e.currentTarget.closest("section");
    const nextSection = currentSection
      ? currentSection.nextElementSibling
      : null;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      style={{ fontFamily: "'Playfair Display', serif" }}
      // Added 'relative' and 'overflow-hidden' here to cut off dots outside the section
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#f8f9fa] px-6 pt-10 pb-16 text-center overflow-hidden"
    >
      {/* Animation Background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color={"#FF9FFC"}
            autoAnimate={true}
            particleVariance={1}
          />
        </div>
      </div>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`}
      </style>

      {/* Content Container (Added relative and z-10 so text stays above dots) */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <h3 className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
            Services
          </h3>
        </div>

        {/* Main Heading with Gradient */}
        <h1
          className="text-[50px] md:text-[80px] lg:text-[96px] leading-[1.1] font-bold mb-6 bg-linear-to-r from-[#CB8104] to-[#00419B] bg-clip-text text-transparent"
        >
          Explore Our <br /> Services
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          Delivering strategic, built-to-fit <br className="hidden md:block" />
          services with purpose.
        </p>

        {/* Down Arrow Button */}
        <button
          onClick={handleScrollDown}
          className="group relative flex items-center justify-center w-12 h-12 bg-[#FF6600] text-white rounded-full transition-transform hover:scale-110 cursor-pointer shadow-xl animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Explore;
