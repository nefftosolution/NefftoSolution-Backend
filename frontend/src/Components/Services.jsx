import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Routing ke liye Link import kiya
import WebDev from '../assets/images/web.avif';
import AppDev from '../assets/images/app.jpg';
import AI from '../assets/images/AI.jpg';
import GraphicDesign from '../assets/images/graphic.jpg';
import DigitalMarketing from '../assets/images/DigitalMarketing.jpg';
import SEO from '../assets/images/seo.jpg';

const Services = () => {
  const services = [
    {
      title: "Web Development (Coding)",
      image: WebDev,
      path: "/services/web-development"
    },
    {
      title: "App Development",
      image: AppDev,
      path: "/services/app-development"
    },
    {
      title: "AI & ML",
      image: AI,
      path: "/services/ai-solutions"
    },
    {
      title: "Graphic Designing",
      image: GraphicDesign,
      path: "/services/graphic-design"
    },
    {
      title: "Digital Marketing",
      image: DigitalMarketing,
      path: "/services/digital-marketing"
    },
    {
      title: "SEO",
      image: SEO,
      path: "/services/seo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00419B] mb-6">
            Our services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           Every service at Neffto begins with understanding—because real solutions are never rushed. We study the problem at its roots, analyze it with clarity, and design with purpose.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border border-gray-100"
        >
          {services.map((service, index) => (
            // standard anchor tag ki jagah Link use kiya
            <Link 
              key={index} 
              to={service.path} 
              className="block group relative h-87.5 overflow-hidden cursor-pointer border-[0.5px] border-white/20"
            >
              <motion.div variants={cardVariants} className="h-full w-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent group-hover:from-[#00419B]/90 transition-all duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <span className="text-[#CB8104] transform group-hover:translate-x-2 transition-transform duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-0 h-1 bg-[#CB8104] group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;