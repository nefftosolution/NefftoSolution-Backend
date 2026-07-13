
import React, { useState, useRef } from 'react';
import ContactHero from '../Components/ContactHero';
import ContactSection from '../Components/ContactSection';


const Contact = () => {
  const [activeTab, setActiveTab] = useState('collaborate');
  
  // 1. Ref create kiya location section ke liye
  const locationRef = useRef(null);

  // 2. Scroll function jo tab change bhi karega aur scroll bhi
  const scrollToLocation = () => {
    setActiveTab('location');
    // Thora sa delay taake state update ho jaye aur element render ho jaye
    setTimeout(() => {
      locationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
    <div className="bg-white min-h-screen">
      {/* Hero ko scroll function pass kar rahe hain */}
      <ContactHero 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        scrollToLocation={scrollToLocation} 
      />
      
      {/* Section ko ref pass kar rahe hain */}
      <ContactSection 
        activeTab={activeTab} 
        locationRef={locationRef} 
      />
    </div>
    
  </>
  );
};

export default Contact;