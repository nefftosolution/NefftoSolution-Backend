import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Antigravity from '../Components/Antigravity';


const ContactHero = ({ activeTab, setActiveTab, scrollToLocation }) => {
  
  // Animation Variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har element 0.2s ke gap se aayega
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="w-full bg-[#F8FAFC] pt-16 pb-0 md:pt-24 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden">
      
      {/* eanimation */}
        {/* eanimatiom */}
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
      {/* Background Decorative Element (Optional but subtle) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#00419B] rounded-full blur-3xl pointer-events-none"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Breadcrumb - Fade in from Left */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-10">
          <Link 
            to="/" 
            className="text-gray-900 font-semibold hover:text-[#CB8104] transition-colors border-b border-black/20 leading-none pb-0.5"
          >
            Home
          </Link>
          <span className="text-[#CB8104] font-bold text-xl mt-0.5">›</span>
        </motion.div>

        {/* Heading with SVG Animation */}
        <div className="mb-10">
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold text-[#00419B] inline-block relative tracking-tight"
          >
            Contact us
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }} 
                d="M0 5 Q 25 0, 50 5 T 100 5" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="transparent" 
              />
            </svg>
          </motion.h1>
        </div>

        {/* Paragraph Text */}
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mb-16"
        >
          Tell us about your project and let's talk about how we can help. We look forward to talking to you soon!
        </motion.p>

        {/* Tabs - connected to state */}
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute bottom-0 left-0 w-full  bg-gray-300"></div>
          <div className="flex gap-10 md:gap-16 relative">
            
            <button 
              onClick={() => setActiveTab('collaborate')} 
              className={`text-xl md:text-2xl font-bold pb-6 relative transition-colors cursor-pointer ${activeTab === 'collaborate' ? "text-[#00419B]" : "text-gray-400 hover:text-gray-600"}`}
            >
              Let's collaborate
              {activeTab === 'collaborate' && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-[#CB8104] rounded-t-full" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>

            <button 
              onClick={scrollToLocation} 
              className={`text-xl md:text-2xl font-bold pb-6 relative transition-colors cursor-pointer ${activeTab === 'location' ? "text-[#00419B]" : "text-gray-400 hover:text-gray-600"}`}
            >
              Our location
              {activeTab === 'location' && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-[#CB8104] rounded-t-full" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactHero;