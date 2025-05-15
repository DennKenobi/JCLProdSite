import React from 'react';

interface GlowingSectionProps {
    id: string;
    activeId: string | null;
    children: React.ReactNode;
    color?: 'green' | 'copper';
    className?: string;
}

const GlowingSection: React.FC<GlowingSectionProps> = ({
    id,
    activeId,
    children,
    color = 'green',
    className = '',
}) => {
    const isActive = activeId === id;

    const getGlowClasses = () => {
        if (!isActive) return 'bg-transparent';
        if (color === 'copper')
            return 'bg-[#b87333] shadow-[0_0_10px_2px_#b87333]';
        return 'bg-[#208e2e] shadow-[0_0_10px_2px_#208e2e]';
    };

    return (
        <div
            id={id}
            className={`mb-16 min-h-[50vh] scroll-mt-[140px] rounded-md transition-all duration-500 ease-in-out ${
                isActive ? 'bg-cyber-dark bg-opacity-50' : 'opacity-80'
            }`}
        >
            {/* Top Glow Bar */}
            <div
                className={`mb-8 h-0.5 w-full transition-all duration-500 ${getGlowClasses()}`}
            />

            {/* Content */}
            <div className={className}>{children}</div>

            {/* Bottom Glow Bar */}
            <div
                className={`mt-24 h-0.5 w-full transition-all duration-500 ${getGlowClasses()}`}
            />
        </div>
    );
};

export default GlowingSection;
