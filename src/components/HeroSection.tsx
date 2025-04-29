
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  onScroll: () => void;
}

interface SlideContent {
  title: string;
  description: string;
  terminalLines: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidingDirection, setSlidingDirection] = useState<'left' | 'right' | null>(null);
  
  const slides: SlideContent[] = [
    {
      title: "Build Your Digital Future with DADL",
      description: "A powerful platform for developers and users to access all internal applications in one centralized hub.",
      terminalLines: [
        '> Welcome to DADL App Hub',
        '> Loading security modules...',
        '> Multiple Factor Authentication: Active',
        '> Single Sign-On: Enabled',
        '> Security First Protocol: Running'
      ]
    },
    {
      title: "Seamless Integration Across Platforms",
      description: "Connect your web and desktop applications in one streamlined experience.",
      terminalLines: [
        '> Initializing platform connections',
        '> Web Services: Connected',
        '> WinForms Applications: Ready',
        '> API Gateway: Online',
        '> Integration Complete'
      ]
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built with security and compliance at its core for enterprise applications.",
      terminalLines: [
        '> Security scan initiated',
        '> Encryption: AES-256',
        '> Compliance checks: Passed',
        '> Firewall: Active',
        '> System secured'
      ]
    }
  ];
  
  // Reference to the container for slide transition
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const typewriterTimeout = setTimeout(() => {
      if (currentLine < slides[activeSlide].terminalLines.length) {
        if (currentIndex < slides[activeSlide].terminalLines[currentLine].length) {
          setCurrentText(prev => prev + slides[activeSlide].terminalLines[currentLine][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setCurrentIndex(0);
          setCurrentLine(prevLine => prevLine + 1);
          setCurrentText('');
          
          if (currentLine === slides[activeSlide].terminalLines.length - 1) {
            setTypingComplete(true);
          }
        }
      }
    }, 50);
    
    return () => clearTimeout(typewriterTimeout);
  }, [currentIndex, currentLine, currentText, activeSlide, slides]);
  
  const nextSlide = () => {
    setTypingComplete(false);
    setCurrentLine(0);
    setCurrentIndex(0);
    setCurrentText('');
    setSlidingDirection('right');
    
    setTimeout(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
      setSlidingDirection(null);
    }, 300);
  };
  
  const prevSlide = () => {
    setTypingComplete(false);
    setCurrentLine(0);
    setCurrentIndex(0);
    setCurrentText('');
    setSlidingDirection('left');
    
    setTimeout(() => {
      setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
      setSlidingDirection(null);
    }, 300);
  };
  
  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (typingComplete) {
        nextSlide();
      }
    }, 8000); // Change slide every 8 seconds if typing is complete
    
    return () => clearInterval(slideInterval);
  }, [typingComplete]);

  return (
    <section id="home" className="min-h-screen w-full bg-hero-gradient flex items-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div 
            className={cn(
              "transition-all duration-300 transform",
              slidingDirection === 'left' ? 'translate-x-full opacity-0' : 
              slidingDirection === 'right' ? '-translate-x-full opacity-0' : 
              'translate-x-0 opacity-100'
            )}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-darkLemonLime">
              {slides[activeSlide].title}
            </h1>
            
            <p className="text-xl text-darkGray max-w-xl mt-6">
              {slides[activeSlide].description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-8 overflow-hidden">
              <div className="transform transition-all duration-500 translate-y-0 animate-slideInUp">
                <Button 
                  className="bg-acidGreen text-darkGray hover:bg-dandelion transition-all duration-300 hover:animate-pulse-glow text-lg px-8 py-6"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
              <div className="transform transition-all duration-500 translate-y-0 animate-slideInUp delay-100">
                <Button 
                  variant="outline" 
                  className="border-palmLeaf text-darkGray hover:bg-palmLeaf/10 hover:text-palmLeaf transition-all duration-300 text-lg px-8 py-6"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
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
            <div 
              className={cn(
                "bg-gray-900 rounded-b-lg p-6 h-64 overflow-hidden transition-all duration-300",
                slidingDirection === 'left' ? 'translate-x-full opacity-0' : 
                slidingDirection === 'right' ? '-translate-x-full opacity-0' : 
                'translate-x-0 opacity-100'
              )}
            >
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
      
      {/* Slide Controls */}
      <div className="absolute bottom-1/2 w-full flex justify-between px-4 md:px-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-white/30 backdrop-blur border-white/50 hover:bg-white/50 text-darkGray"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-white/30 backdrop-blur border-white/50 hover:bg-white/50 text-darkGray"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <button 
        onClick={onScroll} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-dandelion flex items-center justify-center animate-bounce hover:bg-acidGreen transition-colors duration-300 cursor-pointer z-10"
      >
        <ChevronDown className="text-darkGray" size={24} />
      </button>
      
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSlide === index ? 'bg-acidGreen w-6' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
