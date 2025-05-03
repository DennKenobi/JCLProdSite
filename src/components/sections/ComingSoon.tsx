import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Clock, Globe, FileText } from 'lucide-react';

const ComingSoon: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="coming-soon" 
      ref={sectionRef}
      className="section relative"
    >
      <div className="section-container container mx-auto px-4 py-16">
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center mb-6">
            <Clock className="text-labs-green h-10 w-10 mr-4" />
            <h2 className="heading">What's Next</h2>
          </div>
          
          <p className="paragraph">
            We'll soon be launching our full company website and OTCyber.info — a dedicated knowledge hub for OT cybersecurity strategy, frameworks, and insight.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Globe className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Full Company Website</h3>
              <p className="text-labs-text">Our complete digital presence with detailed information about all our services and solutions.</p>
            </div>
            
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <FileText className="text-labs-green h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">OTCyber.info</h3>
              <p className="text-labs-text">A knowledge hub providing valuable insights, frameworks, and strategies for OT cybersecurity.</p>
            </div>
          </div>
          
          <div className="mt-10 bg-labs-dark bg-opacity-30 p-6 rounded-lg border border-labs-green border-opacity-10">
            <h3 className="text-xl font-semibold mb-2 text-white">Stay Updated</h3>
            <p className="text-labs-text mb-4">Want to be notified when we launch new services and resources?</p>
            <div className="mt-4">
              <a 
                href="#contact"
                className="text-labs-green hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact us to stay in the loop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;