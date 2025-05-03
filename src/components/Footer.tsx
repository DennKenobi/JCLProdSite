/*
import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/JCLHorizonTrans.svg';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-labs-dark py-2 border-t border-gray-800 relative mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/">
              <img src={Logo} alt="Just Create Labs" className="h-14 md:h-16 w-auto" />
            </Link>
          </div>
          
          <div className="text-labs-muted text-sm">
            © {new Date().getFullYear()} Just Create Labs LLC.  All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-labs-muted hover:text-labs-green transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-2 bg-labs-dark hover:bg-labs-green hover:bg-opacity-10 rounded-full transition-colors"
      >
        <ArrowUp className="h-6 w-6 text-labs-green" />
      </button>
    </footer>
  );
};

export default Footer;
*/

import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/JCLHorizonTrans.svg';

interface FooterProps {
  variant?: 'default' | 'cyber';
}

const Footer: React.FC<FooterProps> = ({ variant = 'default' }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCyber = variant === 'cyber';

  return (
    <footer className={`${isCyber ? 'bg-cyber-dark text-cyber-blue' : 'bg-labs-dark text-labs-muted'} py-2 border-t border-gray-800 relative mt-12`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/">
              <img src={Logo} alt="Just Create Labs" className="h-14 md:h-16 w-auto" />
            </Link>
          </div>

          <div className="text-sm text-center">
            © {new Date().getFullYear()} Just Create Labs LLC. All rights reserved.
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isCyber ? 'text-cyber-blue hover:text-white' : 'text-labs-muted hover:text-labs-green'} transition-colors`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`absolute bottom-4 right-4 p-2 ${isCyber ? 'bg-cyber-dark hover:bg-cyber-blue' : 'bg-labs-dark hover:bg-labs-green'} hover:bg-opacity-10 rounded-full transition-colors`}
      >
        <ArrowUp className={`h-6 w-6 ${isCyber ? 'text-cyber-blue' : 'text-labs-green'}`} />
      </button>
    </footer>
  );
};

export default Footer;
