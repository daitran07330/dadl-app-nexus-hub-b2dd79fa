
import React, { useState } from 'react';
import { Headset, PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SupportOption {
  icon: React.ElementType;
  label: string;
  color: string;
  action: () => void;
}

const RadialSupportMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const supportOptions: SupportOption[] = [
    {
      icon: PhoneCall,
      label: "Call Support",
      color: "bg-palmLeaf",
      action: () => window.open("tel:+1234567890", "_blank")
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      color: "bg-acidGreen",
      action: () => console.log("Open chat")
    },
    {
      icon: MessageCircle,
      label: "AI Chat",
      color: "bg-dandelion",
      action: () => console.log("Open AI chat")
    },
    {
      icon: Mail,
      label: "Send Email",
      color: "bg-darkLemonLime",
      action: () => window.open("mailto:support@dadl.com", "_blank")
    }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Support Options */}
      {supportOptions.map((option, index) => (
        <TooltipProvider key={option.label}>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <button
                onClick={option.action}
                className={cn(
                  "absolute w-12 h-12 rounded-full flex items-center justify-center text-darkGray shadow-lg transition-all duration-500",
                  option.color,
                  isOpen 
                    ? `transform translate-${getPosition(index, supportOptions.length)}`
                    : "scale-0 opacity-0"
                )}
                style={{
                  transform: isOpen 
                    ? `translate(${getCoordinates(index, supportOptions.length).x}px, ${getCoordinates(index, supportOptions.length).y}px)`
                    : 'scale(0)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.3s ease'
                }}
              >
                <option.icon className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{option.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      {/* Main Support Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "w-16 h-16 rounded-full bg-acidGreen hover:bg-dandelion text-darkGray flex items-center justify-center shadow-lg hover:shadow-dandelion/50 z-10 transition-all duration-300 hover:scale-110",
          isOpen && "bg-dandelion rotate-45"
        )}
      >
        <Headset className="h-8 w-8" />
      </button>
    </div>
  );
};

// Updated helper function to calculate positions towards top-left
function getCoordinates(index: number, total: number) {
  const radius = 80; // Distance from center
  // Start from top-left quadrant
  const angle = Math.PI + (index * (Math.PI / 2)) / (total - 1);
  
  return {
    x: radius * Math.cos(angle), // Will be negative for left side
    y: radius * Math.sin(angle)  // Will be negative for top side
  };
}

// This is a fallback function kept for compatibility
function getPosition(index: number, total: number) {
  const positions = ["y-[-80px]", "x-[-80px]", "y-[80px]", "x-[80px]"];
  return positions[index % positions.length];
}

export default RadialSupportMenu;
