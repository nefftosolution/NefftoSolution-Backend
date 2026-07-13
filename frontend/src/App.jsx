import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

// Service Pages Imports
import WebDevelopment from './Pages/WebDevelopment';
import AppDevelopment from './Pages/AppDevelopment';
import Artificial from './Pages/Artificial';
import GraphicDesignPage from './Pages/Graphic';
import DigitalMarketing from './Pages/DigitalMarketing';
import SEO from './Pages/Seo';
import InteractiveCTA from './Components/InteractiveCTA';

// Helper: Page change hone par scroll top par le janay aur SEO meta tags dynamic karne ke liye
const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo(0, 0);

    // 2. SEO Data mapping for each route path
    const seoData = {
      '/': {
        title: 'NEFTTO IT Solution | Premium Software & Digital Agency',
        description: 'NEFTTO IT Solution is a premier digital agency providing custom Web Development, Mobile Apps, AI & Machine Learning, SEO, and Graphic Design.'
      },
      '/services': {
        title: 'Our Services | NEFTTO IT Solution',
        description: 'Explore our premium digital solutions including web coding, app development, AI solutions, graphic design, SEO, and digital marketing.'
      },
      '/about': {
        title: 'About Us | NEFTTO IT Solution',
        description: 'Learn about NEFTTO IT Solution, our dedicated team of professionals, and our commitment to delivering modern, high-quality IT services.'
      },
      '/contact': {
        title: 'Contact Us | Get in Touch with NEFTTO IT Solution',
        description: 'Get in touch with NEFTTO IT Solution. Reach out for custom software, web development, mobile apps, or digital marketing inquiries.'
      },
      '/services/web-development': {
        title: 'Custom Web Development Services | NEFTTO IT Solution',
        description: 'We build fast, secure, and scalable websites and web applications using modern technologies like React, Node, and Vite.'
      },
      '/services/app-development': {
        title: 'Mobile App Development | iOS & Android Apps | NEFTTO',
        description: 'Develop high-performance, cross-platform mobile apps for iOS and Android tailored to your business needs.'
      },
      '/services/ai-solutions': {
        title: 'AI & Machine Learning Solutions | NEFTTO IT Solution',
        description: 'Integrate advanced artificial intelligence, LLM agents, and machine learning models to automate and scale your workflows.'
      },
      '/services/graphic-design': {
        title: 'Creative Graphic Design & Brand Identity | NEFTTO',
        description: 'Premium UI/UX designs, branding packages, logos, and high-fidelity visual assets designed to captivate your audience.'
      },
      '/services/digital-marketing': {
        title: 'Data-Driven Digital Marketing Campaigns | NEFTTO',
        description: 'Maximize your ROI and acquire more leads with targeted search ads, social campaigns, and email marketing.'
      },
      '/services/seo': {
        title: 'Professional SEO Services | Organic Traffic Growth | NEFTTO',
        description: 'Dominate Google rankings, optimize your local map presence, and drive high-intent organic traffic to your site.'
      }
    };

    const currentSeo = seoData[pathname] || seoData['/'];
    const siteUrl = window.location.origin + pathname;

    // Update Title
    document.title = currentSeo.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (nameAttr, nameVal, contentVal) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.getElementsByTagName('head')[0].appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Update Standard Meta tags
    updateMetaTag('name', 'description', currentSeo.description);
    updateMetaTag('name', 'robots', 'index, follow');

    // Update Open Graph (OG) tags for social sharing
    updateMetaTag('property', 'og:title', currentSeo.title);
    updateMetaTag('property', 'og:description', currentSeo.description);
    updateMetaTag('property', 'og:url', siteUrl);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:image', window.location.origin + '/src/assets/images/logo.png');

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', currentSeo.title);
    updateMetaTag('name', 'twitter:description', currentSeo.description);

    // Update Canonical URL link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.getElementsByTagName('head')[0].appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', siteUrl);

  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <SEOManager />
      <div className="min-h-screen bg-white">
        <Header />
       
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ai-solutions" element={<Artificial />} />
          <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
        </Routes>
        <InteractiveCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;