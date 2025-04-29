
import { useState, useRef } from 'react';
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

  const scrollToAppDashboard = () => {
    if (appDashboardRef.current) {
      // Adding smooth scrolling with easing
      appDashboardRef.current.scrollIntoView({ 
        behavior: 'smooth',
      });
      
      // Update active section after scrolling
      setTimeout(() => {
        setActiveSection('web');
      }, 500); // Add a delay to match the scroll animation
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
      
      <div id="project">
        <AnnouncementsSection />
      </div>
      
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
