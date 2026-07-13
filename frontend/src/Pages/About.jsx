import React from 'react';
import AboutHero from '../Components/AboutHero';
import TeamSection from '../Components/TeamSection';
import DesignIntro from '../Components/DesignIntro';
import TeamGrid from '../Components/TeamGrid';
import CareersScrollSection from '../Components/CareersScrollSection';
import StorySection from '../Components/StorySection';
import StatsSection from '../Components/StatsSection';
import JoinOurTeam from '../Components/JoinOurTeam';
import ReadyCTA from '../Components/ReadyCTA';

const About = () => {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <DesignIntro />
      <TeamGrid />
      <CareersScrollSection />
      <StorySection />
      <StatsSection />
      <JoinOurTeam />
    </>
  );
};

export default About;