
import React from 'react';
import { User, Phone, Mail, Map, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer id="policy" className="bg-darkGray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-acidGreen mb-4">DADL App Hub</h3>
            <p className="text-gray-300 mb-4">Your centralized platform for accessing all company applications and resources.</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 hover:bg-acidGreen hover:text-darkGray p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-acidGreen hover:text-darkGray p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-acidGreen hover:text-darkGray p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-acidGreen hover:text-darkGray p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Home</a></li>
              <li><a href="#web" className="text-gray-300 hover:text-acidGreen transition-colors">Web Applications</a></li>
              <li><a href="#desktop" className="text-gray-300 hover:text-acidGreen transition-colors">Desktop Applications</a></li>
              <li><a href="#help" className="text-gray-300 hover:text-acidGreen transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Login</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Acceptable Use Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Security Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-acidGreen transition-colors">Data Retention Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-acidGreen" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-acidGreen" />
                <span className="text-gray-300">contact@dadlhub.com</span>
              </li>
              <li className="flex items-center">
                <Map size={16} className="mr-2 text-acidGreen" />
                <span className="text-gray-300">123 Tech Street, Innovation City</span>
              </li>
              <li className="flex items-center">
                <User size={16} className="mr-2 text-acidGreen" />
                <span className="text-gray-300">IT Department: Ext. 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DADL Application Hub. All rights reserved.</p>
          <p className="mt-1">A secure enterprise solution for application management.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
