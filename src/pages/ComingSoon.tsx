import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Clock, Globe, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParallaxBackground from '../components/ParallaxBackground';

const ComingSoon: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const navigate = useNavigate();

    return (
        <section ref={sectionRef} className="relative pt-16">
            <ParallaxBackground />
            <div className="container mx-auto px-4 py-16">
                <div
                    className={`mx-auto max-w-4xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="mb-6 flex items-center">
                        <Clock className="mr-4 h-10 w-10 text-labs-green" />
                        <h2 className="heading">What's Next</h2>
                    </div>

                    <p className="paragraph">
                        We'll soon be launching our full company website and
                        OTCyber.info — a dedicated knowledge hub for OT
                        cybersecurity strategy, frameworks, and insight.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="transform rounded-lg border border-labs-green border-opacity-20 bg-labs-dark bg-opacity-50 p-6 transition-all duration-300 hover:scale-105">
                            <Globe className="mb-4 h-10 w-10 text-labs-green" />
                            <h3 className="mb-2 text-xl font-bold text-white">
                                Full Company Website
                            </h3>
                            <p className="text-labs-text">
                                Our complete digital presence with detailed
                                information about all our services and
                                solutions.
                            </p>
                        </div>

                        <div className="transform rounded-lg border border-labs-green border-opacity-20 bg-labs-dark bg-opacity-50 p-6 transition-all duration-300 hover:scale-105">
                            <FileText className="mb-4 h-10 w-10 text-labs-green" />
                            <h3 className="mb-2 text-xl font-bold text-white">
                                OTCyber.info
                            </h3>
                            <p className="text-labs-text">
                                A knowledge hub providing valuable insights,
                                frameworks, and strategies for OT cybersecurity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 rounded-lg border border-labs-green border-opacity-10 bg-labs-dark bg-opacity-30 p-6">
                        <h3 className="mb-2 text-xl font-semibold text-white">
                            Stay Updated
                        </h3>
                        <p className="mb-4 text-labs-text">
                            Want to be notified when we launch new services and
                            resources?
                        </p>
                        <div className="mt-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="relative z-10 text-labs-green hover:underline"
                            >
                                Contact us to stay in the loop →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
