import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
    //Shield,
    CheckCircle,
    //Lock,
    //Server,
    ArrowRight,
    Flag,
    ShieldCheck,
    Network,
    Presentation,
    Boxes,
    Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
//import CyberLogo from '../assets/CyberDivisionHorizonTransp.png';
//import ParallaxBackground from '../components/ParallaxBackground';
import vCISOTBadge from '../assets/vCISOTBadge.svg';
import BackgroundImage from '../assets/vCISOT-BG-Image.jpg';
import { useScrollSpy } from '../hooks/useScrollSpy';

// Placeholder for CISOT badge - replace with actual asset
//const CISOTBadge = '../assets/CISOTBadge.svg';

function VCISOTService() {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const navigate = useNavigate();
    const responsibilitiesRef = useRef(null);
    const positioningRef = useRef(null);
    const comparisonRef = useRef(null);
    const successRef = useRef(null);
    const leadershipRef = useRef(null);
    const ctaRef = useRef(null);
    const sectionRefs = [
        { id: 'responsibilities', ref: responsibilitiesRef },
        { id: 'positioning', ref: positioningRef },
        { id: 'comparison', ref: comparisonRef },
        { id: 'success', ref: successRef },
        { id: 'leadership', ref: leadershipRef },
        { id: 'cta', ref: ctaRef },
    ];

    const activeId = useScrollSpy(sectionRefs, 200); // 200 = top offset for nav height
    const mainBadgeRef = useRef(null);
    const showMiniBadge = !useIntersectionObserver(mainBadgeRef, {
        threshold: 0.87,
    });

    return (
        <>
            {/* </><div className="relative min-h-screen bg-[#1a1a1a] text-white"> */}
            <div
                className="relative min-h-screen bg-[#1a1a1a] bg-cover bg-center bg-no-repeat text-white"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/*<div className="fixed inset-0 bg-[#010a02]" /> 
                <ParallaxBackground /> */}
                <div className="absolute inset-0 z-0 bg-[#1a1a1a] opacity-80" />

                {/*<section ref={sectionRef} className="relative z-10 pb-36 pt-2"> */}
                <section
                    ref={sectionRef}
                    className="relative z-10 px-4 pb-36 pt-2"
                >
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-0 px-6 pt-2 lg:flex-row">
                        {/* Left Sidebar Navigation */}
                        <aside className="sticky top-0 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto px-2 pt-60 text-sm text-[#b0b0b0] lg:block">
                            {/* <aside className="sticky top-36 mt-52 hidden self-start px-2 text-sm text-[#b0b0b0] lg:block lg:w-1/5"> */}
                            {/* Mini Badge (appears when main badge scrolls out of view) */}
                            <div
                                className={`mb-6 transition-opacity duration-1000 ${showMiniBadge ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img
                                    src={vCISOTBadge}
                                    alt="Mini vCISOT Badge"
                                    className="ml-4 h-[8rem] w-auto opacity-70"
                                />
                            </div>
                            <hr className="my-4 border-t border-[#444]" />
                            <nav className="space-y-4">
                                <a
                                    href="#responsibilities"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'responsibilities'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    Key Responsibilities
                                </a>
                                <a
                                    href="#positioning"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'positioning'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    Strategic Positioning
                                </a>
                                <a
                                    href="#comparison"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'comparison'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    vCISOT™ vs. CISOT™
                                </a>
                                <a
                                    href="#success"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'success'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    What Success Looks Like
                                </a>
                                <a
                                    href="#leadership"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'leadership'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    Leadership Qualities
                                </a>
                                <a
                                    href="#cta"
                                    className={`block border-l-2 pl-2 transition ${
                                        activeId === 'cta'
                                            ? 'border-[#4b7a4e] font-semibold text-white'
                                            : 'border-transparent text-[#b0b0b0]'
                                    } hover:border-[#4b7a4e] hover:font-semibold hover:text-white`}
                                >
                                    Next Steps
                                </a>
                                <hr className="my-4 border-t border-[#444]" />

                                <a
                                    href="#top"
                                    className="block border-l-2 border-transparent pl-2 text-xs uppercase italic tracking-wide text-[#b0b0b0] transition hover:border-[#4b7a4e] hover:text-white"
                                >
                                    ⬆ Back to Top
                                </a>
                            </nav>
                        </aside>

                        <div className="w-full lg:w-4/5">
                            <div className="relative z-10 px-2 py-16">
                                {/*<div className="container relative z-10 mx-auto px-4 py-16"> */}
                                <div
                                    className={`mx-auto max-w-4xl transition-opacity duration-1000 ${
                                        isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    {/* Hero Section */}
                                    <div className="mb-12 flex flex-col items-center">
                                        <div
                                            ref={mainBadgeRef}
                                            className="mb-2 flex flex-col items-center text-center"
                                        >
                                            <img
                                                src={vCISOTBadge}
                                                alt="vCISOT Badge"
                                                className="mb-4 h-36 w-auto md:h-44"
                                            />
                                            <hr className="my-8 h-0.5 w-full border-0 bg-[#4b7a4e] opacity-40" />
                                            <h1 className="text-4xl font-bold text-white md:text-5xl">
                                                <span className="text-[#4b7a4e] drop-shadow-[-1px_2px_2px_#b87333]">
                                                    <span className="text-[#b87333]">
                                                        v
                                                    </span>
                                                    CISOT™
                                                </span>
                                            </h1>

                                            <h2 className="mt-2 text-2xl font-medium text-white md:text-3xl">
                                                <span className="text-xl font-bold text-[#b87333]">
                                                    virtual{' '}
                                                </span>
                                                Chief of Information Security
                                                for OT
                                            </h2>
                                        </div>
                                    </div>

                                    <hr className="my-8 h-0.5 w-full border-0 bg-[#4b7a4e] opacity-40" />

                                    {/* Intro Paragraph */}
                                    {/*}
                                    <section
                                        id="cisot-intro"
                                        className="mx-auto mb-32 max-w-5xl space-y-16 px-4 text-left"
                                    >
                                        <div
                                            id="what-is"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                What is the vCISOT™?
                                            </h3>
                                            <p className="text-labs-text">
                                                The vCISOT™ is a dedicated
                                                executive role focused entirely
                                                on OT cybersecurity. It provides
                                                consistent leadership, strategic
                                                alignment, and operational
                                                credibility across industrial,
                                                lab, and embedded systems.
                                                Unlike traditional OT security
                                                leads, the vCISOT™ is formally
                                                positioned — not informally
                                                inherited — and is empowered to
                                                influence enterprise-level
                                                decisions, governance, and
                                                investment.
                                            </p>
                                        </div>

                                        <div
                                            id="why-needed"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                Why It’s Needed
                                            </h3>
                                            <p className="mb-4 text-labs-text">
                                                For years, OT cybersecurity
                                                lacked a clear home. CISO teams
                                                often carried the accountability
                                                but didn’t have the visibility.
                                                Business or operations teams had
                                                the visibility, but not the
                                                security depth. This led to
                                                siloed efforts, inconsistent
                                                ownership, and strategic blind
                                                spots that left OT environments
                                                vulnerable and unprioritized.
                                            </p>
                                            <p className="text-labs-text">
                                                The vCISOT™ addresses this gap
                                                by establishing a centralized,
                                                named role with both executive
                                                presence and OT credibility. It
                                                brings clarity to expectations,
                                                formal authority to lead, and a
                                                direct voice in enterprise cyber
                                                risk.
                                            </p>
                                        </div>

                                        <div
                                            id="philosophy"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                The Philosophy
                                            </h3>
                                            <p className="mb-4 italic text-[#b87333cc]">
                                                “To name a thing is to know it.
                                                Giving the role a name gives it
                                                power, presence, and
                                                permanence.”
                                            </p>
                                            <p className="text-labs-text">
                                                The vCISOT™ isn’t just a title
                                                — it’s a statement that OT
                                                cybersecurity deserves real
                                                leadership. It signals to the
                                                business, to IT, and to
                                                regulators that this function
                                                matters. It legitimizes the
                                                voice of OT security at the
                                                executive table and ensures it’s
                                                no longer hidden behind vague
                                                responsibilities or temporary
                                                task forces.
                                            </p>
                                        </div>
                                    </section>
                                    */}

                                    <section
                                        id="vcisot-intro"
                                        className="mx-auto mb-32 max-w-5xl space-y-16 px-4 text-left"
                                    >
                                        <div
                                            id="what-is"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                What is the vCISOT™?
                                            </h3>
                                            <p className="text-labs-text">
                                                The vCISOT™ is a strategic OT
                                                cybersecurity executive who
                                                brings the full intent and
                                                impact of a CISOT role — but on
                                                a fractional, advisory, or
                                                contract basis. Designed for
                                                organizations that may not be
                                                ready for a full-time hire, the
                                                vCISOT™ acts as your Chief of
                                                Information Security for OT,
                                                providing the same structure,
                                                expertise, and direction you
                                                would expect from a permanent
                                                position.
                                            </p>
                                            <p className="mt-4 text-labs-text">
                                                This role is not a lighter
                                                version of the CISOT — it{' '}
                                                <em>is</em> the CISOT role,
                                                delivered with flexibility. A
                                                vCISOT may support your
                                                organization through one
                                                critical initiative or serve as
                                                an embedded strategic partner
                                                over the long term. Whether
                                                full-spectrum or advisory-only,
                                                the vCISOT adapts to your needs.
                                            </p>
                                        </div>

                                        <div
                                            id="why-needed"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                Why It’s Needed
                                            </h3>
                                            <p className="mb-4 text-labs-text">
                                                Many organizations are grappling
                                                with OT cybersecurity demands
                                                but aren’t yet prepared to hire
                                                a full-time OT cyber leader.
                                                Whether due to budget, maturity
                                                level, or organizational
                                                uncertainty, these gaps can
                                                delay critical progress.
                                            </p>
                                            <p className="text-labs-text">
                                                The vCISOT bridges that gap —
                                                offering immediate access to
                                                high-level OT security
                                                leadership without requiring
                                                long-term headcount or internal
                                                restructuring. This model
                                                ensures you have the expertise
                                                to build momentum, make
                                                strategic decisions, and
                                                establish foundational
                                                governance — even if you're just
                                                beginning your OT cybersecurity
                                                journey.
                                            </p>
                                        </div>

                                        <div
                                            id="philosophy"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                The Philosophy
                                            </h3>
                                            <p className="mb-4 italic text-[#b87333cc]">
                                                “To name a thing is to give it
                                                structure. The vCISOT™ creates
                                                clarity, credibility, and
                                                continuity in a space where OT
                                                cybersecurity leadership has
                                                often been ad hoc or absent.”
                                            </p>
                                            <p className="text-labs-text">
                                                The vCISOT is not just a
                                                consultant. It is a named
                                                executive role — one that brings
                                                strategic leadership,
                                                operational credibility, and
                                                long-term alignment. The vCISOT
                                                partners across business and
                                                technical stakeholders, defines
                                                direction, and helps establish
                                                sustainable practices. Whether
                                                fractional or full-time, the
                                                vCISOT gives OT cybersecurity a
                                                seat at the table — and someone
                                                accountable for moving it
                                                forward.
                                            </p>
                                        </div>

                                        <div
                                            id="flexibility"
                                            className="scroll-mt-[140px] rounded-md bg-[#010a02] bg-opacity-40 p-6 backdrop-blur-[20px]"
                                        >
                                            <h3 className="mb-4 text-xl font-bold text-[#b87333]">
                                                Built for Flexibility
                                            </h3>
                                            <p className="text-labs-text">
                                                The vCISOT role is designed to
                                                flex with your organization's
                                                size, complexity, and readiness.
                                                You may engage a vCISOT for
                                                advisory support only — helping
                                                you define strategy, funding, or
                                                foundational governance. Or you
                                                may choose to have the vCISOT
                                                lead your full OT cybersecurity
                                                function on a part-time basis.
                                            </p>
                                            <p className="mt-4 text-labs-text">
                                                For some organizations, the
                                                vCISOT is a stepping stone to a
                                                future full-time CISOT hire. For
                                                others, it is the long-term
                                                solution. The engagement is
                                                designed around your goals — not
                                                a fixed template.
                                            </p>
                                        </div>
                                    </section>

                                    <hr className="my-8 h-0.5 w-full border-0 bg-[#4b7a4e] opacity-40" />

                                    {/* Responsibilities Section */}
                                    <div
                                        ref={responsibilitiesRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'responsibilities'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="responsibilities"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'responsibilities'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'responsibilities'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            Key Responsibilities
                                        </h2>

                                        <div className="grid grid-cols-1 gap-6 pb-24 md:grid-cols-2 xl:grid-cols-3">
                                            {/*}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <Flag className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Strategic Leadership
                                                </h4>
                                                <p className="text-labs-text">
                                                    Define and maintain a
                                                    long-term vision and roadmap
                                                    for OT cybersecurity aligned
                                                    with business goals and
                                                    regulations.
                                                </p>
                                            </div>
                                            */}

                                            {/* 1. Strategic Direction */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <Flag className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Strategic Direction
                                                </h4>
                                                <p className="text-labs-text">
                                                    Define or refine the
                                                    organization’s OT
                                                    cybersecurity strategy and
                                                    roadmap — ensuring alignment
                                                    with business priorities,
                                                    operational realities, and
                                                    regulatory expectations. A
                                                    vCISOT can guide initial
                                                    planning or provide
                                                    executive leadership over
                                                    long-term program evolution.
                                                </p>
                                            </div>

                                            {/* 2. Executive Advisory */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <Presentation className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Executive Advisory
                                                </h4>
                                                <p className="text-labs-text">
                                                    Advise the CISO, business
                                                    unit leaders, and senior
                                                    stakeholders on OT risk
                                                    posture, investment
                                                    decisions, and governance
                                                    models. The vCISOT ensures
                                                    cyber-physical risk is
                                                    represented at the executive
                                                    level and in enterprise
                                                    decisions.
                                                </p>
                                            </div>

                                            {/* 3. Program Enablement */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <Boxes className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Program Enablement
                                                </h4>
                                                <p className="text-labs-text">
                                                    Guide the design, launch, or
                                                    maturation of the OT
                                                    security program. This may
                                                    include developing
                                                    segmentation strategies,
                                                    access control models,
                                                    policy structures, or asset
                                                    inventory frameworks — all
                                                    scaled to your current
                                                    maturity level.
                                                </p>
                                            </div>

                                            {/* 4. Governance Development */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <ShieldCheck className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Governance Development
                                                </h4>
                                                <p className="text-labs-text">
                                                    Establish or strengthen the
                                                    governance structures that
                                                    support OT cybersecurity.
                                                    The vCISOT may help define
                                                    oversight models, draft
                                                    policies, or create
                                                    cross-functional committees
                                                    — and can serve in a formal
                                                    or advisory capacity within
                                                    those structures as they
                                                    evolve.
                                                </p>
                                            </div>

                                            {/* 5. Stakeholder Alignment */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <Users className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Stakeholder Alignment
                                                </h4>
                                                <p className="text-labs-text">
                                                    Build relationships across
                                                    OT, IT, business, and vendor
                                                    communities. The vCISOT
                                                    fosters cross-functional
                                                    coordination, establishes
                                                    engagement models, and helps
                                                    translate between
                                                    operational and security
                                                    teams.
                                                </p>
                                            </div>

                                            {/* 6. Delegated Leadership */}
                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-110 hover:text-[#b87333]">
                                                <Network className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold">
                                                    Delegated Leadership
                                                </h4>
                                                <p className="text-labs-text">
                                                    The vCISOT may serve as the
                                                    interim or fractional Chief
                                                    of Information Security for
                                                    OT — with the ability to
                                                    lead initiatives directly,
                                                    or advise and guide others
                                                    with delegated authority.
                                                    This enables organizations
                                                    to operate with full
                                                    strategic leadership while
                                                    preserving flexibility in
                                                    scope and structure.
                                                </p>
                                            </div>

                                            {/*}

                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <ShieldCheck className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Governance Development
                                                </h4>
                                                <p className="text-labs-text">
                                                    Lead the creation and
                                                    evolution of OT-specific
                                                    cybersecurity frameworks,
                                                    standards, and decision
                                                    models.
                                                </p>
                                            </div>

                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <Network className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Cross-Domain Integration
                                                </h4>
                                                <p className="text-labs-text">
                                                    Serve as the bridge between
                                                    IT cybersecurity teams and
                                                    OT stakeholders, aligning
                                                    priorities and constraints.
                                                </p>
                                            </div>

                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <Presentation className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Executive Advisory
                                                </h4>
                                                <p className="text-labs-text">
                                                    Advise CISOs, BU leaders,
                                                    and board-level stakeholders
                                                    on OT risk, investment
                                                    needs, and program maturity.
                                                </p>
                                            </div>

                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <Boxes className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Program Ownership
                                                </h4>
                                                <p className="text-labs-text">
                                                    Guide the establishment or
                                                    refinement of the OT
                                                    security program—including
                                                    controls, segmentation,
                                                    inventory, and lifecycle
                                                    planning.
                                                </p>
                                            </div>

                                            <div className="transform rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-6 transition-all duration-300 hover:scale-105">
                                                <Users className="mb-4 h-10 w-10 text-[#4b7a4e]" />
                                                <h4 className="mb-2 text-xl font-bold text-white">
                                                    Team Enablement
                                                </h4>
                                                <p className="text-labs-text">
                                                    Build or coordinate a team
                                                    with operational insight and
                                                    cybersecurity depth to
                                                    support OT security
                                                    execution.
                                                </p>
                                            </div>
                                            */}
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'responsibilities'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>

                                    {/* Strategic Positioning */}
                                    <div
                                        ref={positioningRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md pb-1 shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'positioning'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="positioning"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'positioning'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'positioning'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            Strategic Positioning
                                        </h2>

                                        <div className="mb-24 rounded-lg border border-[#4b7a4e] border-opacity-50 bg-[#010a02] bg-opacity-70 p-8">
                                            <p className="mb-6 text-labs-text">
                                                The vCISOT™ is positioned as a{' '}
                                                <strong>
                                                    fractional executive leader
                                                </strong>
                                                , empowered with visibility and
                                                influence over{' '}
                                                <strong>
                                                    OT cybersecurity risk
                                                </strong>
                                                , governance, investment
                                                decisions, and program maturity.
                                                While they operate as a
                                                consultant or contractor, they
                                                function at the{' '}
                                                <strong>
                                                    same strategic level as a
                                                    full-time CISOT™
                                                </strong>
                                                .
                                            </p>

                                            <p className="mb-6 text-labs-text">
                                                They may report to the{' '}
                                                <strong>CISO</strong> or to a{' '}
                                                <strong>
                                                    similar-level business
                                                    executive
                                                </strong>{' '}
                                                within the organization’s
                                                manufacturing, operations, or
                                                industrial function. In some
                                                cases, they may advise multiple
                                                stakeholders or governance
                                                bodies simultaneously, offering
                                                high-level guidance even without
                                                direct operational ownership.
                                            </p>

                                            <p className="mb-4 text-labs-text">
                                                Depending on the engagement
                                                structure, the vCISOT™ may:
                                            </p>

                                            <ul className="mb-6 space-y-4">
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#4b7a4e]" />
                                                    <span className="text-labs-text">
                                                        Participate in{' '}
                                                        <strong>
                                                            executive-level
                                                            decision-making
                                                            forums
                                                        </strong>{' '}
                                                        related to OT
                                                        cybersecurity strategy
                                                        and investment
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#4b7a4e]" />
                                                    <span className="text-labs-text">
                                                        Report into the{' '}
                                                        <strong>CISO</strong> or
                                                        an executive within the{' '}
                                                        <strong>
                                                            business unit
                                                            accountable for OT
                                                            operations
                                                        </strong>
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#4b7a4e]" />
                                                    <span className="text-labs-text">
                                                        Serve as an{' '}
                                                        <strong>
                                                            advisor to
                                                            governance boards
                                                        </strong>{' '}
                                                        or cybersecurity
                                                        steering committees
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#4b7a4e]" />
                                                    <span className="text-labs-text">
                                                        Be empowered to{' '}
                                                        <strong>
                                                            represent OT
                                                            cybersecurity risk
                                                        </strong>{' '}
                                                        within broader
                                                        enterprise risk and
                                                        compliance processes
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#4b7a4e]" />
                                                    <span className="text-labs-text">
                                                        Collaborate directly
                                                        with OT and IT
                                                        leadership to ensure{' '}
                                                        <strong>
                                                            strategic alignment
                                                            and cross-functional
                                                            coordination
                                                        </strong>
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className="text-labs-text">
                                                This positioning enables the
                                                vCISOT™ to establish{' '}
                                                <strong>
                                                    peer relationships with both
                                                    business and cybersecurity
                                                    leaders
                                                </strong>
                                                , bridging gaps and driving
                                                alignment across strategic,
                                                technical, and operational
                                                domains — even in a part-time or
                                                advisory capacity.
                                            </p>

                                            {/* Placeholder for future org chart */}
                                            <div className="mt-12 text-center text-sm italic text-gray-400">
                                                [Future diagram: CISOT reporting
                                                & relationship models]
                                            </div>
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 mt-24 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'positioning'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>

                                    {/* Comparison Table */}
                                    <div
                                        ref={comparisonRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'comparison'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="comparison"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'comparison'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'comparison'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            vCISOT™ vs CISOT™
                                        </h2>

                                        <div className="overflow-x-auto">
                                            {/*
                                            <table className="mb-24 w-full border-collapse text-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            Attribute
                                                        </th>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            Typical OT Security
                                                            Lead
                                                        </th>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            vCISOT™
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Level of Authority
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Mid-level or
                                                            matrixed manager
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Executive, empowered
                                                            by CISO or business
                                                            unit leader
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Domain Expertise
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Engineering, IT, or
                                                            cyber—but rarely all
                                                            three
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            OT-aware
                                                            cybersecurity
                                                            executive with
                                                            cross-domain fluency
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Organizational
                                                            Impact
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Tactical
                                                            coordination and
                                                            issue resolution
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Strategic leadership
                                                            and cross-functional
                                                            influence
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Reporting Structure
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Often buried or
                                                            matrixed without
                                                            clear escalation
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Direct or
                                                            dotted-line
                                                            alignment to CISO or
                                                            business executive
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Program Scope
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Local,
                                                            site-specific, or
                                                            regionally scoped
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Enterprise-wide OT
                                                            cybersecurity
                                                            accountability
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Role Definition
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Ad hoc or informally
                                                            defined; scope often
                                                            unclear
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Formally defined
                                                            executive role with
                                                            clear charter and
                                                            mission
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            */}

                                            <table className="mb-24 w-full border-collapse text-sm">
                                                <thead>
                                                    <tr>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            Attribute
                                                        </th>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            vCISOT™
                                                        </th>
                                                        <th className="border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-4 text-left text-[#b87333]">
                                                            CISOT™
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Role Type
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Fractional /
                                                            Contract Executive
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Full-Time Executive
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Engagement Model
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Flexible: Advisory,
                                                            Fractional, or
                                                            Project-Based
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Permanent Role
                                                            (Internal Leader)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Authority
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Influence without
                                                            formal authority
                                                            (unless explicitly
                                                            delegated)
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Formal
                                                            organizational
                                                            authority over OT
                                                            cybersecurity
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Reporting Line
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Typically reports to
                                                            CISO or business
                                                            leader overseeing OT
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Typically reports to
                                                            CISO or business
                                                            leader overseeing OT
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Focus Areas
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Strategy,
                                                            governance,
                                                            alignment, and
                                                            potentially full
                                                            program execution
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Strategy,
                                                            governance,
                                                            alignment, and full
                                                            program execution
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 font-semibold text-white">
                                                            Ideal For
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Organizations with
                                                            limited budget,
                                                            evolving needs, or
                                                            early maturity
                                                        </td>
                                                        <td className="border border-[#4b7a4e] border-opacity-40 bg-[#1a1a1a] bg-opacity-80 p-4 text-labs-text">
                                                            Organizations
                                                            needing permanent
                                                            leadership with
                                                            broad operational
                                                            scope
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'comparison'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>

                                    {/* What Success Looks Like */}
                                    {/*
                                    <div
                                        ref={successRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'success'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="success"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'success'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                      
                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'success'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            What Success Looks Like
                                        </h2>
                                        <div className="rounded-md border border-[#4b7a4e] border-opacity-50 bg-[#010a02]/60 px-6 py-8 shadow-md">
                                            <div className="mb-24 space-y-4">
                                                {[
                                                    'Fewer OT security incidents and more effective incident response',
                                                    'Stronger foundational controls and measurable maturity improvements',
                                                    'Fewer delays or disruptions to OT operations caused by security',
                                                    'Better risk visibility and business-driven security decisions',
                                                    'Clearer investment needs and more credible cybersecurity plans',
                                                    'Stronger alignment across OT, cybersecurity, and business leadership',
                                                ].map((text, index) => (
                                                    <div
                                                        className="flex items-start"
                                                        key={index}
                                                    >
                                                        <CheckCircle className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                        <div className="text-labs-text">
                                                            {text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'success'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>
                                    */}

                                    {/* What Success Looks Like */}
                                    <div
                                        ref={successRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md pb-24 shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'success'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="success"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'success'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'success'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            What Success Looks Like
                                        </h2>

                                        <div className="rounded-md border border-[#4b7a4e] border-opacity-50 bg-[#010a02]/60 px-6 py-8 shadow-md">
                                            <div className="mb-6 text-labs-text">
                                                Success in a vCISOT™ engagement
                                                depends entirely on the
                                                organization’s goals, maturity
                                                level, and reason for engagement
                                                — but it often begins with
                                                creating clarity. In many cases,
                                                the vCISOT is brought in to help
                                                define <em>where to begin</em>,
                                                what’s driving the need for OT
                                                cybersecurity investment, and
                                                how to approach the challenge in
                                                a way that fits the business.
                                            </div>

                                            <div className="mb-12 space-y-4">
                                                <div className="mb-2 text-labs-text">
                                                    Depending on the engagement,
                                                    success could include:
                                                </div>
                                                {[
                                                    'A defined OT cybersecurity strategy aligned to business needs',
                                                    'A clarified scope, roadmap, and set of guiding objectives for the OT security program',
                                                    'A governance structure that supports decisions, accountability, and prioritization',
                                                    'Stakeholder alignment across OT, IT, and business leadership',
                                                    'Visibility into risk and maturity — with clear, achievable next steps',
                                                    'Embedded processes for secure design, segmentation, access, and system management',
                                                    'A sense of ownership, clarity, and direction — even in a part-time or advisory capacity',
                                                ].map((text, index) => (
                                                    <div
                                                        className="flex items-start"
                                                        key={index}
                                                    >
                                                        <CheckCircle className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                        <div className="text-labs-text">
                                                            {text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="text-labs-text">
                                                Success is not just about
                                                standing up tools or
                                                implementing controls. It’s
                                                about establishing a foundation
                                                that the organization can
                                                sustain, scale, and evolve —
                                                with the guidance of a leader
                                                who knows how to get there, even
                                                when the starting point is
                                                unclear.
                                            </div>
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'success'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>

                                    {/* Leadership Qualities */}
                                    <div
                                        ref={leadershipRef}
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'leadership'
                                                ? 'bg-[#208e2e] bg-opacity-10'
                                                : 'opacity-70'
                                        }`}
                                        id="leadership"
                                    >
                                        <div
                                            className={`mb-8 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'leadership'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <h2
                                            className={`mb-8 text-center text-3xl font-bold transition-colors duration-500 ${
                                                activeId === 'leadership'
                                                    ? 'text-[#b87333] drop-shadow-[-1px_1px_20px_#b87333]'
                                                    : 'text-[#4b7a4e] drop-shadow-[-1px_1px_20px_#b87333]'
                                            }`}
                                        >
                                            Leadership Qualities
                                        </h2>
                                        {/*}
                                        <div className="mb-24">
                                            <blockquote className="mb-6 rounded-lg border border-[#b87333] bg-[#010a02] bg-opacity-70 p-6 italic text-[#b87333] shadow-[0_0_10px_2px_#b87333]">
                                                "The ideal vCISOT™ combines a
                                                working knowledge of OT systems
                                                and cybersecurity practices with
                                                executive presence and
                                                communication skills. They must
                                                navigate complex organizational
                                                dynamics, translate technical
                                                risks into business terms, and
                                                build consensus across
                                                traditionally siloed
                                                departments."
                                            </blockquote>

                                            <div className="rounded-lg border border-[#4b7a4e] bg-[#010a02] bg-opacity-50 px-6 py-4">
                                                <p className="mb-4 text-[#f0f0f0cc]">
                                                    While many leaders possess
                                                    technical depth or executive
                                                    presence, the vCISOT™
                                                    requires both. Success in
                                                    this role depends on
                                                    emotional intelligence,
                                                    communication finesse, and
                                                    the ability to earn trust
                                                    across divergent teams—from
                                                    cybersecurity engineers to
                                                    manufacturing leads to
                                                    corporate leadership.
                                                </p>

                                                <p className="text-[#f0f0f0cc]">
                                                    In many ways, the vCISOT™
                                                    is less of a
                                                    command-and-control role and
                                                    more of a diplomat,
                                                    translator, and
                                                    unifier—capable of moving
                                                    between domains while
                                                    maintaining credibility in
                                                    each.
                                                </p>
                                            </div>
                                        </div>
*/}

                                        <div className="mb-24 rounded-lg border border-[#4b7a4e] bg-[#010a02] bg-opacity-50 px-6 py-6">
                                            <p className="mb-6 text-labs-text">
                                                The vCISOT™ must demonstrate
                                                many of the same traits as a
                                                full-time CISOT™ — but with
                                                added emphasis on adaptability,
                                                influence, and
                                                relationship-building. Because
                                                the role often functions in an
                                                advisory capacity and without
                                                formal authority, success
                                                depends on the ability to lead
                                                through credibility and clarity.
                                            </p>

                                            <ul className="mb-6 space-y-4">
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        Executive-level presence
                                                        with the ability to
                                                        build trust quickly
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        Deep understanding of
                                                        both OT systems and
                                                        cybersecurity principles
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        Strong communication and
                                                        political navigation
                                                        skills
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        Comfort working across
                                                        industries, cultures,
                                                        and levels of maturity
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        Ability to define
                                                        structure without being
                                                        rigid — adapting to the
                                                        organization’s needs and
                                                        pace
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="mr-3 mt-1 h-5 w-5 text-[#b87333]" />
                                                    <span className="text-labs-text">
                                                        A calm, focused approach
                                                        in high-stakes or
                                                        ambiguous situations
                                                    </span>
                                                </li>
                                            </ul>

                                            <p className="text-labs-text">
                                                This is a role that requires
                                                depth and nuance. The vCISOT™
                                                must not only bring technical
                                                and strategic credibility — they
                                                must also be able to meet the
                                                business where it is and help it
                                                move forward with clarity and
                                                confidence.
                                            </p>
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'leadership'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>

                                    {/* CTA Section */}
                                    <div
                                        ref={ctaRef}
                                        id="cta"
                                        className={`relative mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md shadow-[0_4px_20px_#00000040] backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                                            activeId === 'cta'
                                                ? 'bg-[#b87333] bg-opacity-5'
                                                : 'opacity-70'
                                        }`}
                                    >
                                        <div
                                            className={`mb-16 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'cta'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>

                                        <div className="mb-16 scroll-mt-[140px] rounded-lg border border-[#4b7a4e] border-opacity-60 bg-[#010a02] bg-opacity-80 p-8 text-center">
                                            <h3 className="mb-6 text-2xl font-bold text-white">
                                                <span className="font-bold text-[#b87333] drop-shadow-[0px_0px_20px_#b87333]">
                                                    vCISOT™
                                                </span>
                                                : Trusted OT Security Leadership
                                                — <br />
                                                Without the Full-Time Commitment{' '}
                                                <br />
                                                <br />
                                                Or explore the full-time{' '}
                                                <span className="font-bold text-[#f4a100] drop-shadow-[0px_0px_20px_#f4a100]">
                                                    CISOT™
                                                </span>
                                                .
                                            </h3>

                                            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                <button
                                                    onClick={() =>
                                                        navigate('/contact')
                                                    }
                                                    className="button rounded-md border-[2px] border-[#b87333] bg-[#4b7a4e] bg-opacity-30 px-6 py-3 font-extrabold text-[#b87333] transition-colors duration-300 hover:border-[#4b7a4e] hover:bg-[#b87333] hover:text-white hover:opacity-80"
                                                >
                                                    <span className="text-semibold text-[#f0f0f0]">
                                                        {' '}
                                                        Contact Us About
                                                    </span>{' '}
                                                    vCISOT™
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        navigate(
                                                            '/cyber/cisot',
                                                        );
                                                        window.scrollTo({
                                                            top: 0,
                                                            behavior: 'smooth',
                                                        });
                                                    }}
                                                    className="button rounded-md border-[2px] border-[#208e2e] px-6 py-3 font-semibold text-[#208e2e] transition-colors duration-300 hover:bg-[#208e2e]/80 hover:text-white"
                                                >
                                                    Learn About CISOT™
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-500 ${
                                                activeId === 'cta'
                                                    ? 'bg-[#4b7a4e] shadow-[0_0_10px_2px_#4b7a4e]'
                                                    : 'bg-transparent'
                                            }`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default VCISOTService;
