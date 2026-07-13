import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const CareersScrollSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current || !textRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress (0 → 1)
      const totalDistance = section.offsetHeight - windowHeight;
      let progress = -rect.top / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      /* ========== IMAGE ========== */
      const imageWidth = 100 - progress * 50;
      imageRef.current.style.width = `${imageWidth}%`;

      /* ========== TEXT ========== */
      const translateY = 120 - progress * 120;
      const translateX = 50 - progress * 50;
      const scale = 0.75 + progress * 0.25;
      const opacity = 0.4 + progress * 0.6;

      textRef.current.style.transform = `
        translate(${translateX}%, ${translateY}%)
        scale(${scale})
      `;
      textRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[300vh] bg-black md:block hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-black">
        
        {/* IMAGE (Left) */}
        <div
          ref={imageRef}
          className="relative h-full bg-black z-20 shadow-2xl"
          style={{ width: "100%" }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team working"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div
          ref={textRef}
          className="absolute right-0 top-0 h-full w-full md:w-1/2 z-10 flex flex-col justify-center px-6 sm:px-12 md:px-20 bg-black/80 md:bg-black will-change-transform"
          style={{
            transform: "translate(50%, 120%) scale(0.75)",
            opacity: 0.4,
          }}
        >
          <div className="max-w-xl">
            <p className="text-[#b06f03] text-sm font-bold tracking-widest uppercase mb-6">
              Latest Opportunities
            </p>

            <h2 className="text-white text-4xl md:text-4xl font-bold leading-tight mb-8">
              Grow your career at the heart of change
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
              It's your time to shine. Bring your ingenuity, curiosity and big ideas.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-4 text-white font-bold group"
            >
              <span className="text-xl">Join us</span>
              <span className="bg-[#b06f03] p-3 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareersScrollSection;
