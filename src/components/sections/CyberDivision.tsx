import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Shield, CheckCircle, Lock, Server } from 'lucide-react';
import CyberLogo from '../../assets/CyberDivisionHorizonTransp.png';

const CyberDivision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="cyber-division" 
      ref={sectionRef}
      // className="section cyber-section relative" // 
      className="section cyber-section relative pb-32 overflow-hidden pb-32"  //bottom padding fix//
    >
      <div className="absolute inset-0 bg-cyber-dark z-0" />
      
      <div className="section-container container mx-auto px-4 py-16 relative z-10">
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center -mt-4 mb-12">
            <img 
              src={CyberLogo} 
              alt="Cyber Division" 
              // className="h-24 mb-8" //
              className="h-32 md:h-36 mb-10"
            />
            <div className="flex items-center">
              <Shield className="text-cyber-blue h-10 w-10 mr-4" />
              <h2 className="heading">
                Introducing Our <span className="text-cyber-blue">Cybersecurity</span> Division
              </h2>
            </div>
          </div>
          
          <p className="paragraph">
            Protecting operational technology (OT) environments requires more than traditional IT security approaches.
          </p>
          
          <p className="paragraph">
            Our Cyber Division delivers executive-level OT cybersecurity leadership, guidance, and strategy through offerings like:
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="feature-item">
              <div className="cyber-feature-check">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-white font-bold">CISOT™</span> – Chief of Information Security for OT
              </div>
            </div>
            
            <div className="feature-item">
              <div className="cyber-feature-check">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-white font-bold">vCISOT™</span> – Virtual Chief of Information Security for OT
              </div>
            </div>
          </div>
          
          <p className="paragraph mt-8">
            These roles are designed to close the growing leadership gap as CISOs are tasked with OT security responsibility without OT-specific expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-cyber-dark bg-opacity-70 p-6 rounded-lg border border-cyber-blue border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Lock className="text-cyber-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">OT-Specific Security</h3>
              <p className="text-labs-text">Specialized security strategies tailored to the unique needs of operational technology environments.</p>
            </div>
            
            <div className="bg-cyber-dark bg-opacity-70 p-6 rounded-lg border border-cyber-blue border-opacity-20 transform transition-all duration-300 hover:scale-105">
              <Server className="text-cyber-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Executive Leadership</h3>
              <p className="text-labs-text">Strategic guidance at the executive level to align security with business objectives.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="#contact"
              className="button cyber-button"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More About Our Cyber Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberDivision;