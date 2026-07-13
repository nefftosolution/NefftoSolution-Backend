import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const Capabilities = () => {
  const services = [
    "Laravel",
    "Systems & API Integration",
    "CRM Integrations",
    "Ecommerce",
    "Application Maintenance ",
    "Frontend Development",
    "Mobile App Development",
    "Legacy Application Transformation",
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-24 font-playfair">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading - Thora chota aur tight */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-extrabold text-[#00419B] mb-10 tracking-tight"
        >
          Explore our capabilities and <br className="hidden md:block" /> 
          web development services
        </motion.h2>

        {/* Capabilities Grid - Boxes ko chota kiya gaya hai */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={{ backgroundColor: "#ffffff" }}
              // Padding p-12 se p-8 kar di aur min-height kam kar di
              className="group flex items-center p-7 md:p-8 border-r border-b border-gray-200 transition-all duration-300 cursor-default min-h-[110px]"
            >
              {/* Arrow Icon - Size thora chota kiya (22) */}
              <div className="mr-5 text-[#CB8104] transform group-hover:translate-x-2 transition-transform duration-300">
                <MoveRight size={22} strokeWidth={2.5} />
              </div>

              {/* Capability Text - Font size text-lg md:text-xl rakha hai */}
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

export default Capabilities;