import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSections = () => {
  // Animation Variants for Text Elements
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* SECTION 1: ABOUT US */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Abstract Circular Image Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-[#CB8104] rounded-full blur-3xl"
            ></motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00419B]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex justify-center lg:justify-start">
              <div className="relative w-70 h-70 sm:w-87.5 sm:h-87.5 md:w-112.5 md:h-112.5">
                <div className="absolute inset-0 border-15 border-[#00419B]/10 rounded-full"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 border-2 border-dashed border-[#CB8104]/30 rounded-full"
                ></motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl transition ease-in-out duration-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop"
                    alt="Our Office"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-extrabold text-[#00419B] relative inline-block"
            >
              About Us
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#CB8104]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </motion.h2>

            <motion.p
              variants={fadeInRight}
              className="text-xl text-gray-700 leading-relaxed font-medium"
            >
              Neffto exists to bring design, technology, and content into one
              clear direction. We build reliable software solutions and
              thoughtful digital experiences that are meant to last. Our focus
              is simple and disciplined: create{" "}
              <span className="text-[#00419B] font-bold border-b-2 border-[#CB8104]">
                products and services that deliver real value
              </span>
              , support sustainable growth, and enable meaningful change for
              businesses and people alike.
            </motion.p>

            {/* BUTTON 1: Explore our Culture */}
            <motion.div variants={fadeInRight}>
              <Link
                to="/about"
                className="group relative hover:scale-105 inline-flex items-center justify-center px-10 py-4 border-2 border-[#00419B] rounded-full font-bold text-[#00419B] overflow-hidden transition-all duration-300 hover:text-white shadow-lg"
              >
                {/* Sliding Background */}
                <span className="absolute inset-0 bg-[#00419B] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

                {/* Text */}
                <span className="relative z-10">Explore our Culture</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FORCE FOR GOOD */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-8"
            >
              <motion.h2
                variants={fadeInLeft}
                className="text-4xl md:text-5xl font-extrabold text-[#00419B]"
              >
                Force for Good
              </motion.h2>
              <motion.p
                variants={fadeInLeft}
                className="text-xl text-gray-700 leading-relaxed"
              >
                Our mission is guided by responsibility. At Neffto, we build
                technology that empowers people, drives positive social and
                environmental impact, and creates shared value for businesses,
                communities, and the world we all share.
              </motion.p>

              {/* BUTTON 1: Explore our Culture */}
              <motion.div variants={fadeInRight}>
                <Link
                  to="/services"
                  className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-[#CB8104] rounded-full font-bold text-[#00419B] overflow-hidden transition-all duration-300 hover:text-white shadow-lg"
                >
                  {/* Sliding Background */}
                  <span className="absolute inset-0 bg-[#00419B] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

                  {/* Text */}
                  <span className="relative z-10">How we work for good</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side: Geometric Image Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center relative"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-5 top-80 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border-20 border-[#00419B]/10 rounded-full"
              ></motion.div>
              <div className="relative w-70 h-70 sm:w-87.5 sm:h-87.5 md:w-112.5 md:h-112.5">
                <motion.div
                  whileHover={{ rotate: 1.5 }}
                  className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                    alt="Awards"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.15, 1], y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-[#fff7ed] rounded-full shadow-xl z-20 flex items-center justify-center p-6 border border-white"
                >
                  <svg
                    className="w-full h-full text-[#CB8104]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
                <div className="absolute bottom-18 -right-20 w-48 h-48 md:w-64 md:h-64 bg-[#00419B] rounded-full opacity-10 z-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSections;
