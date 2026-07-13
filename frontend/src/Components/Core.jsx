import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// images
import WebDev from "../assets/images/web.avif";
import AppDev from "../assets/images/app.jpg";
import AI from "../assets/images/AI.jpg";
import GraphicDesign from "../assets/images/graphic.jpg";
import DigitalMarketing from "../assets/images/DigitalMarketing.jpg";
import SEO from "../assets/images/seo.jpg";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    id: 1,
    title: "Web Development (Coding)",
    desc: "Build fast, secure, and responsive websites tailored to your business needs using the latest web technologies.",
    image: WebDev,
    to: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    desc: "Develop high-performance Android, iOS, and cross-platform mobile applications with modern UI and seamless functionality.",
    image: AppDev,
    to: "/services/app-development",
  },
  {
    id: 3,
    title: "AI & ML",
    desc: "Leverage Artificial Intelligence and Machine Learning to automate processes, analyze data, and create smart business solutions.",
    image: AI,
    to: "/services/ai-solutions",
  },
  {
    id: 4,
    title: "Graphic Designing",
    desc: "Create eye-catching logos, branding, social media posts, brochures, and marketing materials that leave a lasting impression.",
    image: GraphicDesign,
    to: "/services/graphic-design",
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "Grow your online presence with strategic social media marketing, paid advertising, content marketing, and lead generation.",
    image: DigitalMarketing,
    to: "/services/digital-marketing",
  },
  {
    id: 6,
    title: "SEO",
    desc: "Improve your website's search engine rankings with on-page, off-page, technical SEO, and keyword optimization strategies.",
    image: SEO,
    to: "/services/seo",
  },
];

const FeatureCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-120 w-full rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border border-gray-100"
    >
      <motion.img
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.8 }}
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 transition-all duration-500 bg-linear-to-t from-[#00419B]/95 via-[#00419B]/30 to-transparent ${isHovered ? "backdrop-blur-xs" : "backdrop-blur-0"}`}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-left">
        <motion.h3
          className={`font-bold leading-tight transition-colors duration-300 text-white text-2xl mb-2`}
        >
          {card.title}
        </motion.h3>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-base mb-2 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <Link
          to={card.to}
          className="flex items-center gap-2 mt-4 text-[#CB8104] font-bold"
        >
          <span>Learn More</span>
          <span className="text-xl">→</span>
        </Link>
      </div>
    </motion.div>
  );
};

const Core = () => {
  return (
    // Update 1: Added 'min-h-screen' and 'flex-col justify-center' to ensure the section fills the viewport
    // This forces the mouse to be inside the section when scrolling, activating the Swiper effect immediately.
    <section className="min-h-screen py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00419B] inline-block relative">
            Core Capabilities
            <svg
              className="absolute -bottom-3 left-0 w-full h-3 text-[#CB8104]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </h2>
        </div>

        {/* SWIPER CONFIGURATION UPDATE */}
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          speed={1000} // Slower speed for smoother scroll-like feel
          mousewheel={{
            forceToAxis: false, // Allows vertical mouse scroll to trigger horizontal slide
            sensitivity: 1.5, // Thoda sensitive kiya taaki easily catch ho
            releaseOnEdges: true, // Jab last slide aaye to page neeche scroll ho
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 feature-swiper" // Increased bottom padding for pagination
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <FeatureCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Core;
