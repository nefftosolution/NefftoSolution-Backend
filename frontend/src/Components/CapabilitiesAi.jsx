import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const CapabilitiesAI = () => {
  // AI & Machine Learning specific services
  const services = [
    "Predictive Analytics & Modeling",
    "Natural Language Processing (NLP)",
    "Computer Vision Solutions",
    "Deep Learning & Neural Networks",
    "Generative AI & LLM Implementation",
    "Big Data & Data Mining",
    "AI-Driven Process Automation",
    "Recommendation Systems",
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-24 font-playfair">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading - Updated for AI & ML */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-extrabold text-[#00419B] mb-10 tracking-tight"
        >
          Explore our capabilities and <br className="hidden md:block" /> 
          AI and machine learning services
        </motion.h2>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={{ backgroundColor: "#ffffff" }}
              className="group flex items-center p-7 md:p-8 border-r border-b border-gray-200 transition-all duration-300 cursor-default min-h-[110px]"
            >
              {/* Gold Arrow Icon */}
              <div className="mr-5 text-[#CB8104] transform group-hover:translate-x-2 transition-transform duration-300">
                <MoveRight size={22} strokeWidth={2.5} />
              </div>

              {/* Capability Text */}
              <span className="text-lg md:text-xl font-bold text-[#00419B] group-hover:text-[#CB8104] transition-colors duration-300 leading-tight">
                {service}
              </span>
            </motion.div>
          ))}
          
          {/* Grid balance spacer */}
          {services.length % 3 !== 0 && (
            <div className="hidden lg:block border-r border-b border-gray-200 bg-transparent"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesAI;