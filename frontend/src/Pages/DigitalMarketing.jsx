import React from 'react';
import MarketingHero from '../Components/DigitalMarketing.jsx'; 
import CapabilitiesMarketing from '../Components/CapabilitiesMarketing.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const DigitalMarketing = () => {
  return (
    <>
      <MarketingHero />
      <CapabilitiesMarketing />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution for our <span className="text-[#00419B] font-bold">Digital Marketing and SEO</span> project 
            following a competitive tender, and have been delighted by the team’s strategic 
            insights, delivering <span className="text-[#00419B] font-bold">exceptional growth results</span> in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default DigitalMarketing;