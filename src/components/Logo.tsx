import React from 'react';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logo} 
        alt="Hub Coragem Igreja" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;