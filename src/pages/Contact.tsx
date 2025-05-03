import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';
import ParallaxBackground from '../components/ParallaxBackground';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative pt-16"
    >
      <ParallaxBackground />
      <div className="container mx-auto px-4 py-16">
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center mb-6">
            <MessageSquare className="text-labs-green h-10 w-10 mr-4" />
            <h2 className="heading">Let's Connect</h2>
          </div>
          
          <p className="paragraph">
            Interested in learning more? Reach out to us at:
          </p>
          
          <div className="mt-8 flex items-center">
            <Mail className="text-labs-green h-6 w-6 mr-3" />
            <a 
              href="mailto:info@justcreatelabs.com" 
              className="text-labs-green hover:underline text-xl"
            >
              info@justcreatelabs.com
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20">
              <h3 className="text-xl font-bold mb-4 text-white">OT Cybersecurity Inquiry</h3>
              <p className="text-labs-text mb-4">Email us to discuss CISOT™ or vCISOT™ services.</p>
              <a 
                href="mailto:info@justcreatelabs.com" 
                className="flex items-center text-labs-green hover:underline"
              >
                <span>Contact us</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-labs-dark bg-opacity-50 p-6 rounded-lg border border-labs-green border-opacity-20">
              <h3 className="text-xl font-bold mb-4 text-white">Partnership Opportunities</h3>
              <p className="text-labs-text mb-4">Let's explore ideas together — contact us anytime.</p>
              <a 
                href="mailto:info@justcreatelabs.com" 
                className="flex items-center text-labs-green hover:underline"
              >
                <span>Get in touch</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;