import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Calendar } from 'lucide-react';

interface RelatedPromotionsProps {
  currentPromotionId: string;
}

const RelatedPromotions = ({ currentPromotionId }: RelatedPromotionsProps) => {
  const navigate = useNavigate();

  // Mock data - In a real app, this would come from an API
  const promotions = [
    {
      id: '2',
      title: '30% em Sobremesas',
      description: 'Todas as sobremesas com 30% de desconto',
      company: {
        name: 'Café Aroma',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      },
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-15',
      discount: '30% OFF',
      tags: ['Sobremesas', 'Desconto'],
    },
    {
      id: '3',
      title: 'Delivery Grátis',
      description: 'Entrega grátis em pedidos acima de R$ 50',
      company: {
        name: 'Café Aroma',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      },
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-30',
      discount: 'Grátis',
      tags: ['Delivery', 'Frete Grátis'],
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Você também pode gostar</h2>
      
      <div className="space-y-4">
        {promotions.map((promotion) => (
          <div
            key={promotion.id}
            className="flex gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#FA7413] cursor-pointer transition-colors"
            onClick={() => navigate(`/promocao/${promotion.id}`)}
          >
            <img
              src={promotion.image}
              alt={promotion.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={promotion.company.image}
                  alt={promotion.company.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm text-gray-600">{promotion.company.name}</span>
              </div>
              <h3 className="font-semibold mb-1">{promotion.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{promotion.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  Válido até {new Date(promotion.validUntil).toLocaleDateString()}
                </div>
                <span className="text-[#FA7413] font-semibold">{promotion.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPromotions;