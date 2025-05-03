import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div 
        className="parallax-bg"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      />
      <div className="tech-overlay" />
    </>
  );
};

export default ParallaxBackground;