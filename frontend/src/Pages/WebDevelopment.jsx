import React from 'react';
import WebDevComponent from '../Components/WebDevelopment.jsx';
import Capabilities from '../Components/Capabilities.jsx';
import WorkSlider from '../Components/WorkSlider.jsx';
import ClientTestimonial from '../Components/ClientTestimonial.jsx';
import ContactCTA from '../Components/ContactCTA.jsx';

const WebDevelopmentPage = () => {
  return (
    <>
      <WebDevComponent />
      <Capabilities />
      <WorkSlider />
      <ClientTestimonial 
        quote={
          <>
            "We selected NEFTTO IT Solution following a competitive tender, 
            and have been delighted by the team’s dedication and Agile approach, 
            delivering a great product in tight timelines and on budget."
          </>
        }
      />
      <ContactCTA />
    </>
  );
};

export default WebDevelopmentPage;