import React from 'react';
import SearchBar from './SearchBar';

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md leading-tight">
          Conecte-se com{' '}
          <span className="text-yellow-300">Empreendedores Locais</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white font-medium drop-shadow leading-relaxed">
          Descubra, aprenda e cresça com a maior rede de empreendedores da sua região
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroContent;