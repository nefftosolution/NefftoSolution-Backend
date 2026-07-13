import React from 'react';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import WorkSlider from '../Components/WorkSlider';
import Testimonials from '../Components/Testimonials';
import AboutSections from '../Components/AboutSections';
import ContactCTA from '../Components/ContactCTA';
import TeamGrid from '../Components/TeamGrid';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WorkSlider />
      <Testimonials />
      <AboutSections />
      <TeamGrid />
      <ContactCTA />
    </>
  );
};

export default Home;