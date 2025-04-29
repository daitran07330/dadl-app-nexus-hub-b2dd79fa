
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScroll: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const terminalLines = [
    '> Welcome to DADL App Hub',
    '> Loading security modules...',
    '> Multiple Factor Authentication: Active',
    '> Single Sign-On: Enabled',
    '> Security First Protocol: Running'
  ];
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const typewriterTimeout = setTimeout(() => {
      if (currentLine < terminalLines.length) {
        if (currentIndex < terminalLines[currentLine].length) {
          setCurrentText(prev => prev + terminalLines[currentLine][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setCurrentIndex(0);
          setCurrentLine(prevLine => prevLine + 1);
          setCurrentText('');
          
          if (currentLine === terminalLines.length - 1) {
            setTypingComplete(true);
          }
        }
      }
    }, 50);
    
    return () => clearTimeout(typewriterTimeout);
  }, [currentIndex, currentLine, currentText, terminalLines]);

  return (
    <section id="home" className="min-h-screen w-full bg-hero-gradient flex items-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-darkLemonLime">
            Build Your Digital Future with DADL
          </h1>
          
          <p className="text-xl text-darkGray max-w-xl">
            A powerful platform for developers and users to access all internal applications in one centralized hub.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              className="bg-acidGreen text-darkGray hover:bg-dandelion transition-all duration-300 hover:animate-pulse-glow text-lg px-8 py-6"
              size="lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-palmLeaf text-darkGray hover:bg-palmLeaf/10 hover:text-palmLeaf transition-all duration-300 text-lg px-8 py-6"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 mt-12 md:mt-0 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative mx-auto w-full max-w-lg animate-float">
            <div className="bg-darkGray rounded-t-lg p-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-b-lg p-6 h-64 overflow-hidden">
              <div className="font-mono text-sm text-green-400">
                <div className="mb-2">{currentText}</div>
                {typingComplete && (
                  <div className="animate-pulse">_</div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-6 w-full h-6 bg-gray-800 rounded-b-full transform skew-x-6"></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onScroll} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-dandelion flex items-center justify-center animate-bounce hover:bg-acidGreen transition-colors duration-300 cursor-pointer z-10"
      >
        <ChevronDown className="text-darkGray" size={24} />
      </button>
      
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 pb-4">
        <span className="w-2 h-2 rounded-full bg-acidGreen"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
};

export default HeroSection;
