import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Lightbulb, BarChart, Rocket, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section relative"
      // className="section relative scroll-mt-64"
      style={{ scrollMarginTop: '6rem' }} // 6rem = 96px (equiv to scroll-mt-24)
    >
      <div className="section-container container mx-auto px-4 py-16">
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="heading">About Just Create Labs</h2>
          
          <p className="paragraph">
            We believe in building the future.
          </p>
          
          <p className="paragraph">
            We love to create, and we love helping others create, too. Whether it's through innovation, technology, or strategy, our mission is to empower organizations to focus on what they do best — to Just Create.
          </p>
          
          <p className="paragraph">
            One of the ways we do this is by helping businesses protect the critical environments that power their innovation. Our Cyber Division, launching first, is focused on securing operational technology (OT) environments so our clients can build, grow, and succeed without hesitation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Lightbulb className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
              <p className="text-labs-text">Creating forward-thinking solutions that anticipate tomorrow's challenges.</p>
            </div>
            
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Code className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Technology</h3>
              <p className="text-labs-text">Leveraging cutting-edge technologies to build powerful digital solutions.</p>
            </div>
            
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <BarChart className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Strategy</h3>
              <p className="text-labs-text">Developing comprehensive strategies to help businesses succeed in the digital landscape.</p>
            </div>
            
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Rocket className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Empowerment</h3>
              <p className="text-labs-text">Enabling organizations to focus on their core mission through our supporting solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;