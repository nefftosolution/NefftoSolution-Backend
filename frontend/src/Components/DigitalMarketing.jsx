import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => { // Name changed to DigitalMarketing
  const [currentSlide, setCurrentSlide] = useState(0);

  // Digital Marketing Related Slides
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
      title: "SEO & SEM Strategy"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1470&auto=format&fit=crop",
      title: "Data Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop",
      title: "Paid Advertising"
    }
  ];

  // Slider auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#00419B]/5 -skew-x-12 transform translate-x-16 hidden lg:block"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Breadcrumb Section */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 text-xs md:text-sm font-bold tracking-wide uppercase">
            <Link to="/" className="text-gray-500 hover:text-[#00419B]">Home</Link>
            <span className="text-[#CB8104]">›</span>
            <Link to="/services" className="text-gray-500 hover:text-[#00419B]">What We Do</Link>
            <span className="text-[#CB8104]">›</span>
            <span className="text-gray-400">Digital Marketing</span>
          </motion.div>

          {/* Main Heading updated for Digital Marketing */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#00419B] leading-tight mb-8 max-w-4xl tracking-tight">
            Strategic Growth <span className="relative inline-block">
              & Digital Marketing,
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }} d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> <br className="hidden md:block" />
            Performance Consultancy, <br className="hidden md:block" />
            and Search Engine services
          </motion.h1>

          {/* Description Paragraph updated */}
          <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
            Working with your business ROI in mind in a collaborative, transparent, <span className="text-[#00419B] font-semibold">Data-driven way</span>, our team of experts deliver high-impact marketing campaigns that scale your online presence.
          </motion.p>
        </motion.div>
      </section>

      {/* --- SECTION 2: ROBUST MARKETING SOLUTIONS --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 relative bottom-10 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6x1 font-extrabold text-[#00419B] leading-tight">
                Developing robust, result-oriented marketing solutions
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-8">
                <p>
                  Leveraging the insights from our <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">SEO and PPC experts</span>, our team can create the right traffic-driving solutions for your organisation.
                </p>
                <p>
                  While <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Conversion rate audits</span> hone the platform, <span className="text-[#00419B] font-bold">Agile campaign management</span> lets you scale your budget faster.
                </p>
                <p>
                  Our <span className="font-bold text-[#00419B]">process-driven strategy</span> adapts to fit your market needs. We specialize in <span className="text-[#CB8104] font-bold border-b-2 border-[#CB8104]">Google Ads and Social Media marketing</span>.
                </p>
                <p>
                  We deliver <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">results using Advanced Analytics</span>, providing consultancy, support, and <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Content marketing services</span>.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Slider */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[500px] w-full"
            >
              <div className="absolute top-1/2 left-[-40px] w-[100px] h-[8px] bg-[#CB8104] rounded-full z-0 hidden lg:block"></div>
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img src={slides[currentSlide].url} alt={slides[currentSlide].title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00419B]/40 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#CB8104]/95 backdrop-blur-sm px-8 py-3 rounded-2xl shadow-2xl">
                    <span className="text-white text-lg md:text-2xl font-black uppercase tracking-widest">{slides[currentSlide].title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PERFORMANCE-CENTRED CODE --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Image with specific Screenshot Curves */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-video md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-tl-[6rem] rounded-br-[6rem] md:rounded-tl-[9rem] md:rounded-br-[9rem] shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop" 
                  alt="Marketing Strategy Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle accent glow */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CB8104]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Content updated for Marketing Metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#00419B] leading-tight tracking-tight">
                Performance-led, data-backed and ROI focused marketing
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  Throughout our digital marketing process, we ensure our campaigns are fully <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">GDPR and Privacy compliant</span>, going beyond standard metrics to be truly impactful.
                </p>
                <p>
                  Campaign performance is reviewed and optimized throughout the month. Through continuous A/B testing, we create ads and content that deliver on your organisation’s ROI and fulfill your growth goals.
                </p>
                <p>
                  We have extensive experience in platforms like <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">Google Ads</span> and <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">Meta Business Suite</span>, always selecting the right channels for your unique business needs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;