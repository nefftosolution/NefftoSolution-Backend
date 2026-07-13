import React from "react";
import Liquid from "./Liquid";
import { Link } from "react-router-dom";

const InteractiveCTA = () => {
  const styles = {
    absBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "none",
    },
  };

  return (
    <section className="relative w-full bg-[#0d1017] py-24 px-4 flex flex-col items-center justify-center text-center font-sans overflow-hidden">
      {/* Liquid Background */}
      <div style={styles.absBg}>
        <Liquid
          colors={["#5227FF", "#00ffff", "#b02bf2"]}
          mouseForce={30}
          // 1. Resolution kam karein (0.25 ka matlab fluid background me 1/4th size par calculate hoga)
          // Kyunki fluid soft aur blurry hota hai, screen par isse quality kharab nahi dikhegi par lag khatam ho jayega.
          resolution={0.25}
          // 2. Viscous lagaya hai toh iske loops kam karein (Default 32 tha, 12 par smooth chalega)
          isViscous={true}
          iterationsViscous={12}
          // 3. Pressure calculation ke loops bhi kam karein (Default 32 se drop karke 16 karein)
          iterationsPoisson={16}
          // 4. BFECC (Advection accuracy shader) ko off karein taake extra passes na hon
          BFECC={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Label */}
        <div className="mb-6">
          <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
            Ready to build something?
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Let's create <br className="hidden md:block" />
          something <br className="hidden md:block" />
          <span className="bg-linear-to-r from-[#b06f03] to-[#00419B] bg-clip-text text-transparent">
            extraordinary
          </span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Got a project in mind? We're always excited to collaborate with
          ambitious brands and people.
        </p>

        {/* White CTA Button */}
        <Link
          to={"/contact"}
          className="
            group 
            bg-[linear-gradient(90deg,#00419B_50%,#CB8104_50%)] 
            bg-size-[200%_100%] 
            bg-right 
            hover:bg-left 
            text-white font-semibold py-3.5 px-8 rounded-full 
            transition-all duration-500 ease-out 
            flex items-center gap-2 cursor-pointer"
          onClick={() => console.log("Start a project clicked")}
        >
          <span>Start a project</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default InteractiveCTA;
