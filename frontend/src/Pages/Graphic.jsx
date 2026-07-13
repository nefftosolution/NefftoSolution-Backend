import React from 'react';
import GraphicHero from '../Components/GraphicDesign.jsx'; 
import CapabilitiesGraphic from '../Components/CapabilitiesGraphic.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const GraphicDesign = () => {
  return (
    <>
      <GraphicHero />
      <CapabilitiesGraphic />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-[#00419B] font-bold">Graphic Design and Branding</span> project 
            following a competitive tender, and have been delighted by the team’s creativity 
            and strategic approach, delivering <span className="text-[#00419B] font-bold">stunning visual identities</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default GraphicDesign;