import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  // Text elements ke liye animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-[#00419B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: ABSTRACT GRAPHIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              {/* Spinning Dashed Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border-2 border-dashed border-white/20 rounded-full"
              ></motion.div>

              {/* Main Circular Background */}
              <div className="absolute inset-0 bg-[#002d6b] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl flex items-center justify-center">
                {/* 1. Monochrome Photo Overlay - Slide from Top-Right */}
                <motion.div
                  initial={{ x: 50, y: -50, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden border-l-2 border-b-2 border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
                    alt="Work Vision"
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>

                {/* 2. Orange/Gold Semicircle Accent - Slide from Bottom-Left */}
                <motion.div
                  initial={{ x: -50, y: 50, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 0.9 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#CB8104] rounded-tr-full"
                ></motion.div>

                {/* 3. Central Eye Pupil Structure - Subtle Breathing Animation */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-[#00419B] rounded-full border-[10px] border-white/20 flex items-center justify-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="w-1/2 h-1/2 bg-black rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>

                {/* 4. Abstract Icons */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-18 p-2 bg-white rounded-lg shadow-xl hidden md:block"
                >
                  <div className="w-8 h-1 bg-gray-200 mb-1"></div>
                  <div className="w-6 h-1 bg-gray-200"></div>
                </motion.div>

                {/* 5. Gold Arrow Upward */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-18 right-18 text-[#CB8104]"
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT with Staggered Fade-in */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Share your vision. <br />
              <span className="text-[#CB8104]">Let’s Build It Together</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100/80 leading-relaxed max-w-lg"
            >
              Whatever challenge or idea you’re carrying, Neffto brings the
              right people, disciplined process, and proven technology to turn
              it into something real. We work with care, clarity, and
              commitment—delivering meaningful transformation that lasts beyond
              launch
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-white rounded-full font-bold text-xl text-white overflow-hidden transition-all hover:border-[#CB8104] hover:text-white cursor-pointer"
                >
                  {/* Sliding Background */}
                  <span className="absolute inset-0 bg-[#CB8104] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                  {/* Text */}
                  <span className="relative z-10">Talk to us</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
