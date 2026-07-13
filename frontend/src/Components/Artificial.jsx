import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AISolutions = () => { // Name changed to AISolutions
  const [currentSlide, setCurrentSlide] = useState(0);

  // AI & ML Related Slides
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
      title: "Neural Networks"
    },
    {
      url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1470&auto=format&fit=crop",
      title: "Predictive Modeling"
    },
    {
      url: "https://images.unsplash.com/photo-1555255707-c079664889ec?q=80&w=1632&auto=format&fit=crop",
      title: "Intelligent Automation"
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
            <span className="text-gray-400">AI & Machine Learning</span>
          </motion.div>

          {/* Main Heading updated for AI & ML */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#00419B] leading-tight mb-8 max-w-4xl tracking-tight">
            Artificial Intelligence <span className="relative inline-block">
              & Machine Learning,
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }} d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> <br className="hidden md:block" />
            Data Consultancy, <br className="hidden md:block" />
            and Smart Automation services
          </motion.h1>

          {/* Description Paragraph updated */}
          <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
            Working with your data strategy in mind in a collaborative, transparent, <span className="text-[#00419B] font-semibold">Agile way</span>, our team of data scientists deliver secure, ethical, and high-performing AI models that drive growth.
          </motion.p>
        </motion.div>
      </section>

      {/* --- SECTION 2: ROBUST SOLUTIONS (Updated for AI/ML) --- */}
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
                Developing robust, data-driven AI solutions
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-8">
                <p>
                  Leveraging the insights from our <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Big Data and Analytics experts</span>, our team can create tailored AI models for your organisation.
                </p>
                <p>
                  While <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Predictive performance audits</span> hone the accuracy, <span className="text-[#00419B] font-bold">Agile development cycles</span> let you validate ML products faster.
                </p>
                <p>
                  Our <span className="font-bold text-[#00419B]">ISO 27001-certified</span> process ensures data privacy in every model. We specialize in <span className="text-[#CB8104] font-bold border-b-2 border-[#CB8104]">TensorFlow and PyTorch development</span>.
                </p>
                <p>
                  We deliver <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">solutions using Python and OpenAI</span>, providing consultancy, model deployment, and <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Real-time Inference services</span>.
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

      {/* --- SECTION 3: HUMAN-CENTRED DATA (Updated for AI) --- */}
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop" 
                  alt="AI Development Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle accent glow */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CB8104]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Content updated for Ethical AI */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#00419B] leading-tight tracking-tight">
                Human-centred, ethical and unbiased AI models
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  Throughout our AI development process, we ensure our models are fully <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Ethics-compliant</span>, going beyond standard algorithms to ensure fairness and transparency.
                </p>
                <p>
                  Every model is reviewed through rigorous validation and stress-testing. We focus on explainable AI and clean data processing to ensure the final product delivers on your business goals.
                </p>
                <p>
                  We have extensive experience in frameworks like <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">Scikit-Learn</span> and <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">HuggingFace</span>, always selecting the right tools for your data requirements.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AISolutions;