import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/logo.png" 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full h-20 bg-white flex items-center border-b border-gray-100 sticky top-0 z-100 px-6 md:px-12 lg:px-20 font-['Playfair_Display'] ">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              className='h-12 md:h-15 w-auto object-contain' 
              src={Logo}
              alt="Logo" 
            />
          </Link>
        </div>

        {/* Desktop Nav Links - Updated to 16px */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[16px] font-medium transition-all relative py-1 ${
                location.pathname === link.href 
                ? "text-[#00419B] border-b-2 border-[#CB8104]" 
                : "text-gray-500 hover:text-[#00419B]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Let's Talk Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="group relative inline-block overflow-hidden bg-white border border-[#CB8104] text-[#CB8104] px-9 py-3 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer shadow-md">
            <span className="absolute inset-0 bg-[#CB8104] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Let's talk
            </span>
          </Link>
        </div>

        {/* --- PREMIUM STYLISH HAMBURGER BUTTON --- */}
        <div className="md:hidden ">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="group relative w-12 h-12 flex flex-col justify-center items-center bg-gray-50 rounded-full transition-all duration-300 active:scale-90 focus:outline-none cursor-pointer"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              <span className={`h-0.5 bg-[#00419B] rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-2.25' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-[#00419B] rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-0 opacity-0' : 'w-4 ml-auto'}`}></span>
              <span className={`h-0.5 bg-[#00419B] rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-2.25' : 'w-6'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* --- ANIMATED MOBILE MENU OVERLAY --- */}
      <div className={`absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-125 opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col px-8 space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-2xl font-semibold transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} ${location.pathname === link.href ? 'text-[#CB8104]' : 'text-[#00419B]'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={`transition-all duration-500 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
             <Link to="/contact" onClick={() => setIsOpen(false)} className="group relative block text-center overflow-hidden bg-white border border-[#CB8104] text-[#CB8104] w-full py-4 rounded-xl font-bold text-xl transition-all duration-300 cursor-pointer shadow-lg mt-2">
                <span className="absolute inset-0 bg-[#CB8104] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Let's talk
                </span>
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;