import React from 'react';
import { Star } from 'lucide-react';

const PromotionFilters = () => {
  const categories = [
    'Todas',
    'Alimentação',
    'Tecnologia',
    'Varejo',
    'Serviços',
    'Saúde',
    'Educação',
  ];

  const validityPeriods = [
    { value: 'today', label: 'Ativas Hoje' },
    { value: 'week', label: 'Válidas até o final da semana' },
    { value: 'month', label: 'Válidas até o final do mês' },
  ];

  const priceRanges = [
    { value: '50', label: 'Até R$ 50' },
    { value: '100', label: 'Até R$ 100' },
    { value: '200', label: 'Até R$ 200' },
    { value: 'more', label: 'Acima de R$ 200' },
  ];

  return (
    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

        {/* Validity */}
        <div>
          <h3 className="font-semibold mb-3">Validade</h3>
          <div className="space-y-2">
            {validityPeriods.map((period) => (
              <label key={period.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="validity"
                  className="border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
                />
                <span className="text-gray-700">{period.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Faixa de Preço</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  className="border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
                />
                <span className="text-gray-700">{range.label}</span>
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
              <span className="text-gray-700">Mais Populares</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              />
              <span className="text-gray-700">Exclusivas para Membros</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              />
              <span className="text-gray-700">Promoções Relâmpago</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionFilters;