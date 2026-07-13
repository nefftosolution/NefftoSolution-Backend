import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Hamza from '../assets/images/hamza.png';
import Ameerhamza from '../assets/images/Ameerhamza.jpeg';
import Sabir from '../assets/images/sabir.jpeg';
import Mubeen from '../assets/images/mubeen.jpg';
import Meer from '../assets/images/meer.png';
import Talha from '../assets/images/talha.png';
import Ibtsam from '../assets/images/ibtsam.jfif';

const cardData = [
  { id: 1, category: 'WEB DEVELOPER', title: 'MUHAMMAD HAMZA', description: 'Building secure, scalable backend architectures, APIs, and cloud services.', image: Hamza },
  { id: 2, category: 'DIGITAL MARKETING', title: 'Ameer Hamza', description: 'Creating search optimization strategies and online campaign frameworks to scale traffic.', image: Ameerhamza },
  { id: 3, category: 'Performance Marketing', title: 'Sabir Hussain ', description: 'Optimizing paid advertising channels, conversion rates, and ROI metrics.', image: Sabir },
  { id: 4, category: 'Graphic Designer', title: 'Raeefa Ashfaq', description: 'Designing user interfaces, branding visuals, and high-fidelity graphics.', image: Sabir },
  { id: 5, category: 'FRONTEND WEB DEVELOPER', title: 'MUHAMMAD MUBEEN AMJAD', description: 'Developing responsive UI components using React, Tailwind CSS, and Framer Motion.', image: Mubeen },
  { id: 6, category: 'Graphic Designer', title: 'Meer Ali Abbas', description: 'Creating visually compelling brand identities, graphics, and high-fidelity mockups for digital products.', image: Meer },
  { id: 7, category: 'MACHINE LEARNING', title: 'MUHAMMAD TALHA', description: 'Building machine learning pipelines, predictive engines, and data analytics dashboards.', image: Talha },
  { id: 8, category: 'FRONTEND WEB DEVELOPER', title: 'MUHAMMAD IBTSAM', description: 'Designing modular code architecture and improving clientside performance benchmarks.', image: Ibtsam },
];

// --- 3D PARALLAX CARD COMPONENT ---
const PremiumCard = ({ data }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // OPTIMIZATION 1: useSpring ko hata kar CSS transitions ka use kiya hai (Bohot fast chalega)
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  
  const imageX = useTransform(x, [-0.5, 0.5], ["-3%", "3%"]);
  const imageY = useTransform(y, [-0.5, 0.5], ["-3%", "3%"]);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      // OPTIMIZATION 2: will-change-transform add kiya hai taake browser isse GPU par render kare
      className="group relative h-95 sm:h-105 md:h-112.5 w-full rounded-3xl bg-[#1a1a1a] shadow-xl overflow-hidden cursor-pointer border border-white/10 will-change-transform transition-all duration-200 ease-out"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ x: imageX, y: imageY, scale: 1.1 }}
        className="absolute inset-0 h-full w-full will-change-transform"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:saturate-150"
          style={{ backgroundImage: `url(${data.image})` }} 
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-20" />
      </motion.div>

      {/* GRADIENTS */}
      <div className="absolute inset-0 bg-linear-to-t from-[#b06e03] via-black/50 to-transparent opacity-60 translate-y-[40%] transition-transform duration-500 group-hover:translate-y-[20%] group-hover:opacity-90 mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-70" />

      {/* CONTENT CONTAINER */}
      <div 
        style={{ transform: "translateZ(30px)" }} // Value kam ki hai taake text jhatke na mare
        className="absolute inset-0 p-8 flex flex-col justify-end h-full z-10"
      >
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="mb-2">
          <p className="text-[#ffaf40] font-bold text-xs tracking-[3px] uppercase">
            {data.category}
          </p>
        </div>

        <h3 className="text-3xl font-black text-white leading-tight mb-2 drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {data.title}
        </h3>

        {/* Description */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="overflow-hidden">
            <p className="text-gray-300 text-sm leading-relaxed py-1 border-l-2 border-[#b06e03] pl-4">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* OPTIMIZATION 3: Dynamic Sheen Effect hata diya hai kyunki yeh continuous re-paints trigger kar raha tha */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-linear-to-tr from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
};

// --- MAIN LAYOUT ---
const TeamGrid = () => {
  return (
    <div className="relative bg-white py-16 md:py-24 px-4 md:px-10 overflow-hidden">
      <div className="relative max-w-350 mx-auto z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-black mb-2">
            MEET THE <span className="text-transparent bg-clip-text bg-linear-to-r from-[#b06e03] to-yellow-500">TEAM</span>
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-transparent via-[#b06e03] to-transparent mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <div key={card.id}>
              <PremiumCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;