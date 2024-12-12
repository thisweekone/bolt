import React from 'react';
import { Gift, Coffee } from 'lucide-react';
import Button from '../Button';

const CompanyLoyalty = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Programa de Fidelidade</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Gift className="text-[#FA7413]" size={24} />
          <div>
            <h3 className="font-semibold">Pontos Acumulados</h3>
            <p className="text-2xl font-bold text-[#FA7413]">350</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Próxima Recompensa</h3>
          <div className="flex items-center gap-2 text-gray-700">
            <Coffee size={20} />
            <span>Café grátis em 150 pontos</span>
          </div>
        </div>
        
        <Button fullWidth>
          Ver Recompensas
        </Button>
      </div>
    </section>
  );
};

export default CompanyLoyalty;