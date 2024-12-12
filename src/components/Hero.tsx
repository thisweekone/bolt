import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </div>
  );
};

export default Hero;