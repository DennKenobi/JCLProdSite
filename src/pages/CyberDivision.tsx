import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Shield, CheckCircle, Lock, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CyberLogo from '../assets/CyberDivisionHorizonTransp.png';
import ParallaxBackground from '../components/ParallaxBackground';
// import Header from '../components/Header';
// import { Disclosure } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';

const CyberDivision: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const navigate = useNavigate();
    const [openCard, setOpenCard] = useState<'cisot' | 'vcisot' | null>(null);
    const toggleCard = (id: 'cisot' | 'vcisot') => {
        setOpenCard((prev: 'cisot' | 'vcisot' | null) =>
            prev === id ? null : id,
        );
    };

    return (
        <>
            <div className="relative min-h-screen">
                <div className="fixed inset-0 bg-cyber-dark" />
                <ParallaxBackground />

                <section
                    ref={sectionRef}
                    // className="relative pt-16 pb-32"
                    className="relative z-10 pb-36 pt-2"
                >
                    <div className="container relative z-10 mx-auto px-4 py-16">
                        <div
                            className={`mx-auto max-w-4xl transition-opacity duration-1000 ${
                                isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="mb-12 flex flex-col items-center">
                                <img
                                    src={CyberLogo}
                                    alt="Cyber Division"
                                    // className="h-32 md:h-36 mb-16"
                                    className="mb-16 mt-[-2rem] h-32 md:h-36"
                                />
                                <div className="flex items-center">
                                    <Shield className="mr-4 h-10 w-10 text-cyber-blue" />
                                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                                        Introducing Our{' '}
                                        <span className="text-cyber-blue">
                                            Cybersecurity
                                        </span>{' '}
                                        Division
                                    </h2>
                                </div>
                            </div>

                            <p className="paragraph">
                                Protecting operational technology (OT)
                                environments requires more than traditional IT
                                security approaches.
                            </p>

                            <div className="mb-12 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="transform rounded-lg border border-cyber-blue border-opacity-20 bg-cyber-dark bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                    <Lock className="mb-4 h-10 w-10 text-cyber-blue" />
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        OT-Specific Security
                                    </h3>
                                    <p className="text-labs-text">
                                        Specialized security strategies tailored
                                        to the unique needs of operational
                                        technology environments.
                                    </p>
                                </div>

                                <div className="transform rounded-lg border border-cyber-blue border-opacity-20 bg-cyber-dark bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                    <Server className="mb-4 h-10 w-10 text-cyber-blue" />
                                    <h3 className="mb-2 text-xl font-bold text-white">
                                        Executive Leadership
                                    </h3>
                                    <p className="text-labs-text">
                                        Strategic guidance at the executive
                                        level to align security with business
                                        objectives.
                                    </p>
                                </div>
                            </div>

                            <p className="paragraph">
                                Our Cyber Division delivers executive-level OT
                                cybersecurity leadership, guidance, and strategy
                                through offerings like:
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="feature-item">
                                    <div className="cyber-feature-check">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">
                                            CISOT™
                                        </span>{' '}
                                        – Chief of Information Security for OT
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="cyber-feature-check">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">
                                            vCISOT™
                                        </span>{' '}
                                        – Virtual Chief of Information Security
                                        for OT
                                    </div>
                                </div>
                            </div>

                            <p className="paragraph mt-8">
                                These roles are designed to close the growing
                                leadership gap as CISOs are tasked with OT
                                security responsibility without OT-specific
                                expertise.
                            </p>

                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                {/* CISOT Box */}
                                <div
                                    className={`rounded-lg border p-6 transition-all duration-200 ${
                                        openCard === 'cisot'
                                            ? 'border-cyber-glow bg-cyber-dark shadow-lg shadow-cyber-glow/40'
                                            : 'border-cyber-blue bg-cyber-dark hover:border-cyber-glow hover:shadow-lg hover:shadow-cyber-glow/50'
                                    } self-start`}
                                >
                                    <button
                                        onClick={() => toggleCard('cisot')}
                                        className="flex w-full items-start gap-3 rounded px-2 py-1 text-left" //  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyber-blue"  // removed from the line
                                    >
                                        <div className="mt-1 shrink-0">
                                            {openCard === 'cisot' ? (
                                                <Minus className="h-5 w-5 text-cyber-blue" />
                                            ) : (
                                                <Plus className="h-5 w-5 text-cyber-blue" />
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                className={`text-xl font-semibold ${
                                                    openCard === 'cisot'
                                                        ? 'text-cyber-blue drop-shadow-[2px_2px_15px_#00F0FF]'
                                                        : 'text-white'
                                                }`}
                                            >
                                                CISOT™
                                            </div>
                                            <div
                                                className={`mt-0.5 text-sm leading-tight ${
                                                    openCard === 'cisot'
                                                        ? 'text-white'
                                                        : 'text-labs-muted'
                                                }`}
                                            >
                                                Chief of Information Security
                                                for OT
                                            </div>
                                        </div>
                                    </button>

                                    {openCard === 'cisot' && (
                                        <div className="mt-4 space-y-4 text-sm text-labs-muted">
                                            <blockquote className="border-l-4 border-cyber-blue pl-4 italic">
                                                The CISOT™ is a dedicated
                                                executive role focused entirely
                                                on OT cybersecurity. They lead
                                                the development of OT-specific
                                                programs, strategy, and
                                                governance, ensuring alignment
                                                with business objectives and
                                                addressing the complex realities
                                                of physical operations.
                                                <br /> <br />
                                                This role bridges gaps between
                                                IT and OT while establishing
                                                robust security leadership for
                                                manufacturing, labs, and other
                                                industrial environments.
                                            </blockquote>
                                            <div className="border-t border-cyber-blue pt-3 text-xs font-semibold text-cyber-blue">
                                                Coming soon — a dedicated
                                                in-depth page on the CISOT
                                                service!
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* vCISOT Box */}
                                <div
                                    className={`rounded-lg border p-6 transition-all duration-200 ${
                                        openCard === 'vcisot'
                                            ? 'border-cyber-glow bg-cyber-dark shadow-lg shadow-cyber-glow/40'
                                            : 'border-cyber-blue bg-cyber-dark hover:border-cyber-glow hover:shadow-lg hover:shadow-cyber-glow/50'
                                    } self-start`}
                                >
                                    <button
                                        onClick={() => toggleCard('vcisot')}
                                        className="flex w-full items-start gap-3 rounded px-2 py-1 text-left" // hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyber-blue" // removed from the line
                                    >
                                        <div className="mt-1 shrink-0">
                                            {openCard === 'vcisot' ? (
                                                <Minus className="h-5 w-5 text-cyber-blue" />
                                            ) : (
                                                <Plus className="h-5 w-5 text-cyber-blue" />
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                className={`text-xl font-semibold ${
                                                    openCard === 'vcisot'
                                                        ? 'text-cyber-blue drop-shadow-[2px_2px_15px_#00F0FF]'
                                                        : 'text-white'
                                                }`}
                                            >
                                                vCISOT™
                                            </div>
                                            <div
                                                className={`mt-0.5 text-sm leading-tight ${
                                                    openCard === 'vcisot'
                                                        ? 'text-white'
                                                        : 'text-labs-muted'
                                                }`}
                                            >
                                                Virtual Chief of Information
                                                Security for OT
                                            </div>
                                        </div>
                                    </button>

                                    {openCard === 'vcisot' && (
                                        <div className="mt-4 space-y-4 text-sm text-labs-muted">
                                            <blockquote className="border-l-4 border-cyber-blue pl-4 italic">
                                                The vCISOT™ provides fractional
                                                or advisory OT cybersecurity
                                                leadership, offering expert
                                                guidance without requiring a
                                                full-time executive. <br />
                                                <br />
                                                Ideal for organizations that
                                                need strategic direction,
                                                governance input, or oversight
                                                of OT initiatives — while
                                                maintaining flexibility and
                                                scalability for the business.
                                            </blockquote>
                                            <div className="border-t border-cyber-blue pt-3 text-xs font-semibold text-cyber-blue">
                                                Coming soon — a dedicated
                                                in-depth page on the vCISOT
                                                service!
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-12 pb-8">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="button cyber-button"
                                >
                                    Learn More About Our Cyber Services
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CyberDivision;
