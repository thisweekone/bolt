import React from 'react';
import { Tag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LatestPromotions = () => {
  const navigate = useNavigate();
  
  const promotions = [
    {
      id: 1,
      company: 'Café Aroma',
      title: 'Café da Manhã Especial',
      description: '50% de desconto em todos os cafés até 10h',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-03-30',
      tags: ['Café', 'Promoção', 'Desconto'],
    },
    {
      id: 2,
      company: 'Tech Solutions',
      title: 'Consultoria Gratuita',
      description: 'Primeira hora de consultoria tecnológica gratuita',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-03-25',
      tags: ['Tecnologia', 'Consultoria', 'Grátis'],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Promoções Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={promo.image}
                    alt={promo.title}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline">
                    <span className="text-sm text-[#FA7413] font-semibold">{promo.company}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{promo.title}</h3>
                  <p className="mt-2 text-gray-600">{promo.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      Válido até {new Date(promo.validUntil).toLocaleDateString()}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {promo.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-[#FA7413] text-white py-2 rounded hover:bg-[#FA8A3D] transition duration-200">
                    Aproveitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button 
            className="inline-flex items-center text-[#FA7413] font-semibold hover:text-[#FA8A3D] transition duration-200"
            onClick={() => navigate('/promocoes')}
          >
            Ver todas as promoções
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPromotions;