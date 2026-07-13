import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AppDevelopment = () => { // Name changed to AppDevelopment
  const [currentSlide, setCurrentSlide] = useState(0);

  // App Development Related Slides
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
      title: "iOS & Android Apps"
    },
    {
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop",
      title: "Scalable Architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?q=80&w=1470&auto=format&fit=crop",
      title: "Cloud Syncing"
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
            <span className="text-gray-400">App Development</span>
          </motion.div>

          {/* Main Heading updated for App Development */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#00419B] leading-tight mb-8 max-w-4xl tracking-tight">
            Mobile Application <span className="relative inline-block">
              Development,
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#CB8104]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }} d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> <br className="hidden md:block" />
            Product Consultancy, <br className="hidden md:block" />
            and App Lifecycle services
          </motion.h1>

          {/* Description Paragraph updated */}
          <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
            Working with your business goals in mind in a collaborative, transparent, <span className="text-[#00419B] font-semibold">Agile way</span>, our team of developers deliver secure, intuitive, high-performing mobile applications for iOS and Android.
          </motion.p>
        </motion.div>
      </section>

      {/* --- SECTION 2: ROBUST SOLUTIONS (Updated for Apps) --- */}
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
                Developing robust, cross-platform mobile solutions
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-8">
                <p>
                  Leveraging the insights from our <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Mobile UI and UX design experts</span>, our team can create native-feel solutions for your organisation.
                </p>
                <p>
                  While <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">App store performance audits</span> hone the experience, <span className="text-[#00419B] font-bold">Agile sprint cycles</span> let you test MVP products faster.
                </p>
                <p>
                  Our <span className="font-bold text-[#00419B]">ISO 27001-certified</span> process ensures data security in every build. We specialize in <span className="text-[#CB8104] font-bold border-b-2 border-[#CB8104]">Flutter and React Native development</span>.
                </p>
                <p>
                  We deliver <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">apps using Swift and Kotlin</span>, providing consultancy, app store deployment, and <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Real-time API services</span>.
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

      {/* --- SECTION 3: HUMAN-CENTRED CODE (Updated for Mobile) --- */}
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop" 
                  alt="App Development Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle accent glow */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CB8104]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Content updated for App Compliance */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#00419B] leading-tight tracking-tight">
                Human-centred, high-performance and platform-compliant code
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                  Throughout our mobile application development process, we ensure our code follows <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">Apple and Android Accessibility Standards</span>, providing a smooth experience for all users.
                </p>
                <p>
                  Every app is reviewed through continuous unit testing and QA. We focus on low latency and smooth animations to ensure the final product fulfills your users’ needs perfectly.
                </p>
                <p>
                  We have extensive experience in platforms like <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">React Native</span> and <span className="text-[#00419B] font-bold border-b-2 border-[#00419B]">Flutter</span>, ensuring your app reaches the widest audience with the best performance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AppDevelopment;