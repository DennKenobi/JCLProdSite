import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';
import ParallaxBackground from '../components/ParallaxBackground';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

    return (
        <section ref={sectionRef} className="relative pt-16">
            <ParallaxBackground />
            <div className="container mx-auto px-4 py-16">
                <div
                    className={`mx-auto max-w-4xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="mb-6 flex items-center">
                        <MessageSquare className="mr-4 h-10 w-10 text-labs-green" />
                        <h2 className="heading">Let's Connect</h2>
                    </div>

                    <p className="paragraph">
                        Interested in learning more? Reach out to us at:
                    </p>

                    <div className="mt-8 flex items-center">
                        <Mail className="mr-3 h-6 w-6 text-labs-green" />
                        <a
                            href="mailto:info@justcreatelabs.com"
                            className="relative z-10 text-xl text-labs-green hover:underline"
                        >
                            info@justcreatelabs.com
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-labs-green border-opacity-20 bg-labs-dark bg-opacity-50 p-6">
                            <h3 className="mb-4 text-xl font-bold text-white">
                                OT Cybersecurity Inquiry
                            </h3>
                            <p className="mb-4 text-labs-text">
                                Email us to discuss CISOT™ or vCISOT™
                                services.
                            </p>
                            <a
                                href="mailto:info@justcreatelabs.com"
                                className="relative z-10 flex items-center text-labs-green hover:underline"
                            >
                                <span>Contact us</span>
                                <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                        </div>

                        <div className="rounded-lg border border-labs-green border-opacity-20 bg-labs-dark bg-opacity-50 p-6">
                            <h3 className="mb-4 text-xl font-bold text-white">
                                Partnership Opportunities
                            </h3>
                            <p className="mb-4 text-labs-text">
                                Let's explore ideas together — contact us
                                anytime.
                            </p>
                            <a
                                href="mailto:info@justcreatelabs.com"
                                className="relative z-10 flex items-center text-labs-green hover:underline"
                            >
                                <span>Get in touch</span>
                                <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
