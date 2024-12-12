import React from 'react';
import Hero from '../components/Hero';
import FeaturedCompanies from '../components/FeaturedCompanies';
import LatestPromotions from '../components/LatestPromotions';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <main>
        <FeaturedCompanies />
        <LatestPromotions />
        <Features />
        <Testimonials />
      </main>
      <footer className="bg-[#3A3A3A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">HubEmpreenda</h3>
              <p className="text-gray-300">Conectando e capacitando empreendedores locais.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Empresas</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Treinamentos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                />
                <button className="w-full bg-[#FA7413] hover:bg-[#FA8A3D] text-white py-2 rounded transition duration-200">
                  Inscrever
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HubEmpreenda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;