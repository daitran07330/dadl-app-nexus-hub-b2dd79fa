
import React, { useEffect, useState } from 'react';
import { User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'project', label: 'Project' },
    { id: 'policy', label: 'Policy' },
    { id: 'help', label: 'Help' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check which section is currently in view
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Add offset for header

      // Find the section that's currently in view
      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection, menuItems]);

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Add smooth scrolling with easing
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Prevent default action for anchor links
      return false;
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 glass',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" 
            className="text-xl md:text-2xl font-bold text-acidGreen text-shadow-glow hover:animate-scale transform transition-transform origin-left"
            onClick={(e) => { e.preventDefault(); handleMenuClick('home'); }}
          >
            DADL App Hub
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleMenuClick(item.id); }}
              className={cn(
                'underline-animation font-medium hover:scale-110 transition-transform',
                activeSection === item.id ? 'text-dandelion active-nav-link' : 'text-darkGray hover:text-darkLemonLime'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-dandelion/20">
            <Search className="h-5 w-5 text-darkLemonLime hover:text-dandelion" />
          </Button>
          <Button variant="ghost" size="icon" className={cn(
            "rounded-full overflow-hidden hover:bg-dandelion/20 transition-all",
            isScrolled ? "animate-slide-in-right" : ""
          )}>
            <User className="h-5 w-5 text-darkLemonLime hover:text-dandelion" />
          </Button>
          <Button className="bg-acidGreen hover:bg-dandelion text-darkGray font-medium transition-all hover:shadow-lg hover:shadow-dandelion/20">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
