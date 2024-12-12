import React from 'react';
import { Star } from 'lucide-react';

const CompanyFilters = () => {
  const categories = [
    'Todas',
    'Alimentação',
    'Tecnologia',
    'Varejo',
    'Serviços',
    'Saúde',
    'Educação',
  ];

  const ratings = [
    { value: 4, label: '4+ estrelas' },
    { value: 3, label: '3+ estrelas' },
    { value: 2, label: '2+ estrelas' },
  ];

  return (
    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categorias</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div>
          <h3 className="font-semibold mb-3">Avaliações</h3>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  className="border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
                />
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-gray-700">{rating.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Filters */}
        <div>
          <h3 className="font-semibold mb-3">Outros Filtros</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              />
              <span className="text-gray-700">Empresas com Promoções</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              />
              <span className="text-gray-700">Programa de Fidelidade</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              />
              <span className="text-gray-700">Entrega Disponível</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFilters;