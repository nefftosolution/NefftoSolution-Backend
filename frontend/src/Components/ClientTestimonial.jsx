import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const ClientTestimonial = ({ quote }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-playfair">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Container - Responsive Min-Height 315px for Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#DCEBF2] relative flex flex-col md:flex-row items-center md:min-h-[315px] py-12 px-8 md:px-16 
                     rounded-t-[50px] md:rounded-t-[100px] rounded-bl-[50px] md:rounded-bl-[100px] rounded-br-[20px]"
        >
          
          {/* Left Side: White Circle & Logo */}
          <div className="relative mb-8 md:mb-0 md:mr-16 flex-shrink-0">
            <div className="w-44 h-44 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow-sm relative z-10">
              <div className="text-center p-4">
                <span className="text-[#00419B] font-black text-lg md:text-xl leading-tight">
                  CANCER <br /> RESEARCH <br /> 
                  <span className="text-[#CB8104]">TECHNOLOGY</span>
                </span>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="absolute -top-2 -right-2 md:top-2 md:-right-4 z-20">
              <div className="bg-[#00419B] text-white p-3 md:p-5 rounded-full shadow-xl">
                <Quote size={28} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-snug font-medium mb-6"
            >
              {quote}
            </motion.p>

            {/* Signature / Company Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#" 
                className="text-base md:text-lg font-bold text-[#00419B] border-b-2 border-[#CB8104] pb-0.5 hover:text-[#CB8104] transition-colors inline-block"
              >
                Cancer Research Technology
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
