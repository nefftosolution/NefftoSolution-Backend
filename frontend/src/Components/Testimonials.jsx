import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/logo.png';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    { id: 1, text: "Neffto has been our trusted digital partner for years. Their team supported the launch of a modern, inclusive digital platform with clarity, precision, and care.", author: "David Harrison", company: "Client Partner", logo: Logo },
    { id: 2, text: "Their expertise in cloud and system architecture is exceptional. Neffto migrated our legacy infrastructure seamlessly, with zero downtime and zero disruption.", author: "Sarah Jenkins", company: "Technology Lead", logo: Logo },
    { id: 3, text: "Innovation in EdTech demands speed and reliability. Neffto delivered both. Their React and mobile development skills are among the best we’ve worked with.", author: "Michael Ross", company: " Product Manager", logo: Logo },
    { id: 4, text: "We needed a modern, intuitive UI for our fintech platform. Neffto went beyond expectations—transforming complexity into a clean, powerful experience.", author: "Emma Watson", company: "Fintech Founder", logo: Logo },
    { id: 5, text: "From strategy to deployment, Neffto showed true professionalism. Their data-driven approach uncovered insights that changed how we make decisions.", author: "Dr. Robert Fox", company: "Operations Director", logo: Logo }
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "circOut" }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 0.95,
      transition: { duration: 0.4, ease: "circIn" }
    })
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#00419B] inline-block relative">
            What our clients say
            <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                d="M0 5 Q 25 0, 50 5 T 100 5" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="transparent" 
              />
            </svg>
          </h2>
        </motion.div>

        {/* The Slider Card - Rounded for desktop, curved for mobile/tablet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[2.5rem] lg:rounded-full shadow-2xl overflow-hidden min-h-[550px] lg:min-h-[250px] flex items-center border border-gray-100 "
        >
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 pt-12 pb-32 lg:p-20 w-full relative z-10"
            >
              {/* Left: Logo Section */}
              <div className="lg:col-span-4 flex justify-center items-center">
                <div className="relative w-40 h-40 lg:w-72 lg:h-72">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-[#CB8104]/40 rounded-full"
                  ></motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-3 lg:inset-4 bg-white rounded-full flex items-center justify-center p-8 lg:p-12 shadow-lg"
                  >
                    <img src={testimonials[current].logo} alt="Logo" className="max-w-full h-auto object-contain" />
                  </motion.div>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#CB8104] mb-4 lg:mb-6 flex justify-center lg:justify-start"
                >
                  <svg className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V7C1 4.79086 2.79086 3 5 3H8C9.10457 3 10 3.89543 10 5V6C10 7.10457 9.10457 8 8 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8C9.10457 16 10 16.8954 10 18V21H8C4.13401 22 1 18.866 1 15Z" /></svg>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg lg:text-3xl text-gray-800 italic leading-snug lg:leading-tight mb-8 lg:mb-10"
                >
                  "{testimonials[current].text}"
                </motion.p>
                
                <div className="flex items-center gap-4 justify-center lg:justify-start text-left">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "48px" }}
                    className="hidden lg:block w-1.5 bg-[#00419B] rounded-full"
                  ></motion.div>
                  <div className="border-l-4 border-[#00419B] lg:border-none pl-4 lg:pl-0">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 leading-none">{testimonials[current].author}</h4>
                    <p className="text-[#CB8104] font-semibold text-xs lg:text-sm mt-1">{testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Optimized Controls Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] lg:w-auto lg:bottom-12 lg:right-20 lg:left-auto lg:translate-x-0 flex flex-col lg:flex-row items-center p-2 z-20"
          >
            {/* Dots */}
            <div className="flex gap-2 px-4 py-2 lg:py-0 lg:border-r lg:border-gray-300">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`h-2 rounded-full transition-all duration-500 ${i === current ? 'bg-[#00419B] w-6 lg:w-8' : 'bg-gray-300 w-2 hover:bg-[#CB8104]'}`} />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3 px-2 mt-2 lg:mt-0">
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => paginate(-1)} className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00419B] text-white rounded-full flex items-center justify-center hover:bg-[#CB8104] transition-colors shadow-md cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => paginate(1)} className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00419B] text-white rounded-full flex items-center justify-center hover:bg-[#CB8104] transition-colors shadow-md cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
