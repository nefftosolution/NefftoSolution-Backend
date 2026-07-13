import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from "../assets/images/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'AI & ML', href: '/services/ai-solutions' },
    { name: 'Graphic Designing', href: '/services/graphic-design' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'SEO', href: '/services/seo' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591430441959' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-ahad-a848b641b/' },
    { name: 'Instagram', href: 'https://www.instagram.com/nefftosolution/' },
    { name: 'Twitter', href: '#' },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#0a0f1a] text-gray-400 py-7 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        
        {/* TOP SECTION: LOGO & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo and Tagline */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <motion.div whileHover={{ scale: 1.02 }} className="inline-block mb-8">
              <Link to="/">
                <img 
                  src={Logo}
                  alt="Logo" 
                  className="h-12 md:h-14 w-auto object-contain brightness-110"
                />
              </Link>
            </motion.div>
            <p className="text-lg md:text-xl leading-relaxed max-w-sm">
              We build digital products people actually enjoy using. Based wherever good WiFi and coffee meet.
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      to={link.href} 
                      className="text-lg hover:text-[#CB8104] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      to={link.href} 
                      className="text-lg hover:text-[#CB8104] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">
              Connect
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={link.href} 
                    className="text-lg hover:text-[#CB8104] transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#CB8104]">
                      →
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="order-2 md:order-1"
          >
            © {currentYear} Neffto Solutions. All rights reserved.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="order-1 md:order-2 italic text-gray-500"
          >
            Crafted with obsessive attention to detail.
          </motion.p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;