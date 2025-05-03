import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParallaxBackground from '../components/ParallaxBackground';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center -mt-24">
      <ParallaxBackground />
      <div className="container mx-auto px-4 py-16">
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
              onClick={() => navigate('/cyber')}
              className="button labs-button"
            >
              Explore Our Cyber Division
            </button>
            <button 
              onClick={() => navigate('/about')}
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
          onClick={() => navigate('/about')}
        />
      </div>
    </section>
  );
};

export default Home;