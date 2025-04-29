
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AppDashboard from '@/components/AppDashboard';
import WinFormsSection from '@/components/WinFormsSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const appDashboardRef = useRef<HTMLDivElement>(null);

  const scrollToAppDashboard = () => {
    appDashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('web');
  };

  return (
    <div className="min-h-screen w-full smooth-scroll">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <HeroSection onScroll={scrollToAppDashboard} />
      
      <div ref={appDashboardRef}>
        <AppDashboard />
      </div>
      
      <WinFormsSection />
      
      <AnnouncementsSection />
      
      <SupportSection />
      
      <Footer />
    </div>
  );
};

export default Index;
