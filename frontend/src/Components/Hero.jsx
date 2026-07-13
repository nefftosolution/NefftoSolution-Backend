import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Antigravity from '../Components/Antigravity';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop",
      title: "Innovation"
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop",
      title: "Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470&auto=format&fit=crop",
      title: "Technology"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[80vh] flex items-start lg:items-center overflow-hidden bg-white">
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
      {/* Background Shape */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-[#00419B]/5 -skew-x-12 transform translate-x-20 hidden lg:block"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 lg:pt-8 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 mt-6 lg:mt-0"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#00419B] leading-tight">
              Together, we <span className="relative inline-block">
                Build what
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                    d="M0 5 Q 25 0, 50 5 T 100 5" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="transparent" 
                  />
                </svg>
              </span> the Future Relies On
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
             At Neffto, we build strong digital foundations, not trends. From web and app development to AI, design, and marketing, we create clear, reliable systems designed to perform across every platform.
            </motion.p>

            {/* UPDATED BUTTONS SECTION */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
              
              {/* Button 1: Explore Our Work */}
              <Link 
                to={'/services'}
                className="group hover:scale-102 relative px-9 py-3.5 border-2 border-[#00419B] text-[#00419B] rounded-full font-bold text-lg overflow-hidden transition-all hover:border-[#00419B] hover:text-white cursor-pointer"
              >
                <span className="absolute inset-0 w-0 bg-[#00419B] transition-all duration-300 group-hover:w-full -z-10"></span>
                <span className="relative z-10">Explore Our Work</span>
              </Link>

              {/* Button 2: Learn More */}
              <Link 
                to={'/contact'}
                className="group hover:scale-102 relative px-9 py-3.5 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-lg overflow-hidden transition-all hover:border-[#CB8104] hover:text-white cursor-pointer"
              >
                <span className="absolute inset-0 w-0 bg-[#CB8104] transition-all duration-300 group-hover:w-full -z-10"></span>
                <span className="relative z-10">Learn More</span>
              </Link>

            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 lg:order-2 relative group h-75 md:h-112.5 w-full mt-4 lg:mt-0"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <motion.img
                    animate={index === currentSlide ? { scale: 1 } : { scale: 1.05 }}
                    transition={{ duration: 5 }}
                    src={slide.url}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                </div>
              ))}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#CB8104]/90 backdrop-blur-sm px-8 py-3 rounded-2xl shadow-2xl"
                >
                  <span className="text-white text-xl md:text-2xl font-bold tracking-wider uppercase">
                    {slides[currentSlide].title}
                  </span>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-2.5 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-2.5 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-20 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;