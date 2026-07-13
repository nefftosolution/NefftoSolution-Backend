import React from 'react';
import AIHero from '../Components/Artificial.jsx'; 
import CapabilitiesAi from '../Components/CapabilitiesAi.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const Artificial = () => {
  return (
    <>
      <AIHero />
      <CapabilitiesAi />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-[#00419B] font-bold">AI and Machine Learning</span> project 
            following a competitive tender, and have been delighted by the team’s dedication 
            and Agile approach, delivering <span className="text-[#00419B] font-bold">advanced intelligent solutions</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default Artificial;