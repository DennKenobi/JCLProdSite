import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="section relative min-h-screen flex items-center">
      <div className="section-container container mx-auto px-4 py-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Just <span className="text-labs-green">Create</span> Labs
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-labs-text">
            Build. Create. Empower.
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 text-labs-text max-w-xl">
            Helping businesses and creators focus on what they do best — to Just Create.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('cyber-division')}
              className="button labs-button"
            >
              Explore Our Cyber Division
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="button bg-transparent border border-labs-green text-labs-green hover:bg-labs-green hover:bg-opacity-10"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-10 w-10 text-labs-green cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;