import React from 'react';
import AppDevComponent from '../Components/AppDevelopment.jsx';
import CapabilitiesApp from '../Components/CapabilitiesApp.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const AppDevelopment = () => {
  return (
    <>
      <AppDevComponent />
      <CapabilitiesApp />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-[#00419B] font-bold">App Development</span> project 
            following a competitive tender, and have been delighted by the team’s dedication 
            and Agile approach, delivering a great mobile application in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default AppDevelopment;