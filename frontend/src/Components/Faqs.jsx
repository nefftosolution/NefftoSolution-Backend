import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faqs = () => {
  const [openId, setOpenId] = useState(0); // Default first one open

  const faqData = [
    {
      id: 1,
      question: "How do I start a project with you?",
      answer: "Starting a project is simple! Just reach out through our contact form or email us directly. We'll schedule a discovery call to understand your needs, goals, and timeline. From there, we'll create a tailored proposal for your project."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "The timeline depends on the complexity of the project. A standard website might take 4-6 weeks, while a more complex application could take 3-4 months. We provide a detailed timeline during the proposal stage."
    },
    {
      id: 3,
      question: "What industries do you work in?",
      answer: "We work across various sectors including Fintech, EdTech, Healthcare, and E-commerce. Our process is designed to adapt to the specific challenges of any industry."
    },
    {
      id: 4,
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital product stays up-to-date, secure, and continues to perform optimally after launch."
    },
    {
      id: 5,
      question: "What makes your design agency different?",
      answer: "We focus on the intersection of style and substance. We don't just build pretty interfaces; we solve real business problems through user-centric design and scalable technology."
    },
    {
      id: 6,
      question: "What is your pricing structure?",
      answer: "We offer both project-based pricing and retainer models. Since every project is unique, we provide custom quotes after our initial discovery call."
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 lg:py-24 px-4 md:px-10 lg:px-20 bg-[#f8fafc]">
      {/* Google Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');`}
      </style>

      <div className="max-w-350 mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
        
        {/* Header Section */}
        <div className="mb-16">
          <p 
            className="uppercase tracking-[0.2em] text-[13px] font-bold mb-4"
            style={{ color: '#CB8104' }}
          >
            • FAQ
          </p>
          
          <h2 
            className="font-bold leading-[1.1]"
            style={{ 
              fontSize: 'clamp(40px, 5vw, 60px)', 
              color: '#00419B' 
            }}
          >
            Frequently <br className="hidden md:block" /> Asked Questions
          </h2>
        </div>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 items-start">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-200 py-6 lg:py-8 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span 
                  className="text-xl lg:text-2xl font-bold transition-colors duration-300"
                  style={{ color: openId === faq.id ? '#CB8104' : '#00419B' }}
                >
                  {faq.question}
                </span>
                
                {/* Icon Circle */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300"
                  style={{ 
                    backgroundColor: openId === faq.id ? '#00419B' : '#f1f5f9',
                    color: openId === faq.id ? '#fff' : '#000'
                  }}
                >
                  {openId === faq.id ? (
                    <span className="text-2xl leading-none">−</span>
                  ) : (
                    <span className="text-2xl leading-none">+</span>
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p 
                      className="mt-6 leading-relaxed text-gray-500 pr-10"
                      style={{ fontSize: '18px' }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faqs;