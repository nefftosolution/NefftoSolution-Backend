import React from 'react';
import SEOHero from '../Components/SEO.jsx'; 
import CapabilitiesSEO from '../Components/CapabilitiesSEO.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const SEO = () => {
  return (
    <>
      <SEOHero />
      <CapabilitiesSEO />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-[#00419B] font-bold">Search Engine Optimization (SEO)</span> project 
            following a competitive tender, and have been delighted by the team’s technical 
            expertise, delivering <span className="text-[#00419B] font-bold">unmatched organic visibility</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default SEO;