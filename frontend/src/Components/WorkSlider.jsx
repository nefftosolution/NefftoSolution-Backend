import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import webImg from "../assets/images/web.avif";
import appImg from "../assets/images/app.jpg";
import aiImg from "../assets/images/AI.jpg";
import graphicImg from "../assets/images/graphic.jpg";
import marketingImg from "../assets/images/DigitalMarketing.jpg";
import seoImg from "../assets/images/seo.jpg";

// Link ko motion-friendly banane ke liye
const MotionLink = motion(Link);

const allProjects = {
  web: [
    {
      id: 1,
      logoText: "Apex Analytics",
      title: "Scaling a global cloud platform with a custom React portal",
      stats: [
        { value: "60%", label: "increase in engagement" },
        { value: "2.1s", label: "average load speed" },
        { value: "100k+", label: "active daily sessions" }
      ],
      image: webImg,
      link: "/services/web-development"
    },
    {
      id: 2,
      logoText: "Sport England",
      title: "Building Modern Websites That Drive Business Growth",
      stats: [
        { value: "10+", label: "Websites Delivered" },
        { value: "95%", label: "Client Satisfaction" },
        { value: "24/7", label: "Technical Support" }
      ],
      image: webImg,
      link: "/services/web-development"
    }
  ],
  app: [
    {
      id: 1,
      logoText: "FitTrack Pro",
      title: "A cross-platform React Native fitness and wellness tracker",
      stats: [
        { value: "1M+", label: "downloads on App Store" },
        { value: "4.8★", label: "average user rating" },
        { value: "85%", label: "retention rate increase" }
      ],
      image: appImg,
      link: "/services/app-development"
    },
    {
      id: 2,
      logoText: "FreshCart",
      title: "Delivering real-time tracking and instant payments for grocery delivery",
      stats: [
        { value: "30 min", label: "average delivery time" },
        { value: "10k+", label: "daily active riders" },
        { value: "99.9%", label: "transaction success" }
      ],
      image: appImg,
      link: "/services/app-development"
    }
  ],
  ai: [
    {
      id: 1,
      logoText: "SmartBot AI",
      title: "Integrating LLM-powered custom AI agents for automated support",
      stats: [
        { value: "80%", label: "support queries resolved" },
        { value: "24/7", label: "instant response time" },
        { value: "5x", label: "operational cost cut" }
      ],
      image: aiImg,
      link: "/services/ai-solutions"
    },
    {
      id: 2,
      logoText: "InsightCorp",
      title: "Deep learning models for demand forecasting and inventory management",
      stats: [
        { value: "94%", label: "forecasting accuracy" },
        { value: "30%", label: "inventory cost reduction" },
        { value: "12M+", label: "data points processed" }
      ],
      image: aiImg,
      link: "/services/ai-solutions"
    }
  ],
  graphic: [
    {
      id: 1,
      logoText: "Nexa Pay",
      title: "Designing a premium visual identity system from logo to UI guidelines",
      stats: [
        { value: "100%", label: "bespoke typography" },
        { value: "15+", label: "brand touchpoints" },
        { value: "3x", label: "brand recognition growth" }
      ],
      image: graphicImg,
      link: "/services/graphic-design"
    },
    {
      id: 2,
      logoText: "Oceanic Drinks",
      title: "Crafting beautiful packaging and 3D mockups for product launch",
      stats: [
        { value: "50+", label: "assets delivered" },
        { value: "10M+", label: "impressions globally" },
        { value: "45%", label: "increase in retail sales" }
      ],
      image: graphicImg,
      link: "/services/graphic-design"
    }
  ],
  marketing: [
    {
      id: 1,
      logoText: "ClickFlow",
      title: "Scaling monthly recurring revenue through targeted Google & Meta ads",
      stats: [
        { value: "350%", label: "increase in qualified leads" },
        { value: "-40%", label: "reduction in acquisition cost" },
        { value: "4.2x", label: "return on ad spend (ROAS)" }
      ],
      image: marketingImg,
      link: "/services/digital-marketing"
    },
    {
      id: 2,
      logoText: "VogueThreads",
      title: "Executing high-converting email marketing and social media campaigns",
      stats: [
        { value: "1.2M", label: "subscribers reached" },
        { value: "50%", label: "increase in repeat orders" },
        { value: "2.5M", label: "social media impressions" }
      ],
      image: marketingImg,
      link: "/services/digital-marketing"
    }
  ],
  seo: [
    {
      id: 1,
      logoText: "TravelBound",
      title: "Achieving top Google rankings for high-intent keywords",
      stats: [
        { value: "300%", label: "growth in organic traffic" },
        { value: "Top 3", label: "rankings for 50+ keywords" },
        { value: "8.5%", label: "conversion rate from search" }
      ],
      image: seoImg,
      link: "/services/seo"
    },
    {
      id: 2,
      logoText: "UrbanSpaces",
      title: "Optimizing local search presence to capture regional property buyers",
      stats: [
        { value: "5x", label: "increase in local phone calls" },
        { value: "150k+", label: "monthly map impressions" },
        { value: "#1 Spot", label: "on Google Map Pack" }
      ],
      image: seoImg,
      link: "/services/seo"
    }
  ]
};

const homeProjects = [
  allProjects.web[1],
  allProjects.app[0],
  allProjects.ai[0],
  allProjects.graphic[0],
  allProjects.marketing[0],
  allProjects.seo[0]
];


const WorkSlider = () => {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const path = location.pathname;

  // Route path ke according projects dynamically load karein
  let projects = homeProjects;
  if (path === '/services/web-development') {
    projects = allProjects.web;
  } else if (path === '/services/app-development') {
    projects = allProjects.app;
  } else if (path === '/services/ai-solutions') {
    projects = allProjects.ai;
  } else if (path === '/services/graphic-design') {
    projects = allProjects.graphic;
  } else if (path === '/services/digital-marketing') {
    projects = allProjects.marketing;
  } else if (path === '/services/seo') {
    projects = allProjects.seo;
  }

  // Path change hone par index state ko reset karein
  useEffect(() => {
    setCurrent(0);
  }, [path]);

  // Modulo calculation mapping runtime errors avoid karne ke liye
  const activeIndex = current % projects.length;
  const project = projects[activeIndex] || projects[0];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const slideVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  };

  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-24 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00419B]">
            Discover our work
          </h2>

          {/* UPDATED BUTTON: View all client stories */}
          <MotionLink 
            to="/services" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-[#00419B] text-[#00419B] px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold transition-all text-sm md:text-base overflow-hidden hover:text-white cursor-pointer"
          >
            {/* Sliding Background */}
            <span className="absolute inset-0 w-0 bg-[#00419B] transition-all duration-300 group-hover:w-full -z-10"></span>
            
            {/* Text */}
            <span className="relative z-10">View all services</span>
          </MotionLink>
        </div>

        <div className="relative group">
          
          <div className="relative bg-white shadow-2xl rounded-[2rem] md:rounded-[3rem] h-[680px] md:h-[600px] flex items-stretch overflow-hidden border border-gray-100">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${path}-${activeIndex}`}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row w-full h-full"
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-between bg-white relative z-10">
                  <div className="flex-grow">
                    {/* Brand Gradient Logo Badge */}
                    <div className="flex items-center gap-3 mb-8 md:mb-10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00419B] to-[#0066FF] flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                        {project.logoText ? project.logoText[0] : 'N'}
                      </div>
                      <span className="font-bold text-[#00419B] text-xl tracking-wider uppercase font-sans">
                        {project.logoText}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-3xl font-medium text-gray-800 leading-tight mb-8 md:mb-12">
                      {project.title}
                    </h3>

                    <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="relative pt-4 border-t-2 border-[#CB8104]">
                          <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                          <div className="text-[9px] md:text-xs text-gray-500 uppercase font-semibold leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center gap-4 mt-auto mb-24 md:mb-0">
                    <Link to={project.link} className="flex items-center gap-2 border-b-2 border-black hover:text-[#CB8104] transition-all pb-1">
                      <span className="text-sm md:text-lg font-bold">Explore Service</span>
                      <span className="text-[#CB8104] text-xl">→</span>
                    </Link>

                    <div className="flex gap-1.5">
                      {projects.map((_, i) => (
                        <div key={i} className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-[#00419B] w-6' : 'bg-gray-200 w-1.5'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-[250px] md:h-auto overflow-hidden order-first md:order-none">
                  <motion.img 
                    initial={{ scale: 1.1 }} animate={{ scale: 1 }}
                    src={project.image} 
                    className="h-full w-full object-cover"
                    alt="Project"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto flex justify-center gap-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:left-0 md:translate-x-0 md:w-full md:justify-between md:px-0 pointer-events-none z-50">
            <button 
              onClick={prev}
              className="pointer-events-auto w-14 h-14 lg:w-16 lg:h-16 bg-[#00419B] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#CB8104] hover:scale-110 transition-all md:-translate-x-1/8 active:scale-90 cursor-pointer"
            >
              <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={next}
              className="pointer-events-auto w-14 h-14 lg:w-16 lg:h-16 bg-[#00419B] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#CB8104] hover:scale-110 transition-all md:translate-x-1/8 active:scale-90 cursor-pointer"
            >
              <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSlider;
