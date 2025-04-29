
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppDashboard from '@/components/AppDashboard';
import WinFormsSection from '@/components/WinFormsSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import RadialSupportMenu from '@/components/RadialSupportMenu';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const appDashboardRef = useRef<HTMLDivElement>(null);

  // Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when section is visible
          const headers = entry.target.querySelectorAll('[data-section-header], [data-section-description]');
          headers.forEach(header => {
            header.classList.add('animate-active');
          });
        }
      });
    }, { threshold: 0.25 });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToAppDashboard = () => {
    if (appDashboardRef.current) {
      // Adding smooth scrolling with easing
      appDashboardRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active section after scrolling
      setTimeout(() => {
        setActiveSection('web');
      }, 800); // Add a longer delay to match the scroll animation
    }
  };

  return (
    <div className="min-h-screen w-full smooth-scroll">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <HeroSection onScroll={scrollToAppDashboard} />
      
      <div id="web" ref={appDashboardRef}>
        <AppDashboard />
      </div>
      
      <div id="desktop">
        <WinFormsSection />
      </div>
      
      {/* Temporarily comment out the Projects section */}
      {/* <div id="project">
        <AnnouncementsSection />
      </div> */}
      
      <div id="help">
        <SupportSection />
      </div>
      
      <Footer />
      
      {/* Add the Radial Support Menu */}
      <RadialSupportMenu />
    </div>
  );
};

export default Index;
