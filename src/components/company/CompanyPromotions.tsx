import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import Button from '../Button';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  validUntil: string;
  discount: string;
  tags: string[];
}

const CompanyPromotions = () => {
  // Mock data - In a real app, this would come from an API
  const promotions: Promotion[] = [
    {
      id: 1,
      title: 'Happy Hour Especial',
      description: 'Todos os cafés com 50% de desconto após as 17h',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-30',
      discount: '50% OFF',
      tags: ['Happy Hour', 'Café', 'Desconto'],
    },
    {
      id: 2,
      title: 'Combo Café da Manhã',
      description: 'Café + Croissant por apenas R$ 19,90',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-15',
      discount: 'R$ 19,90',
      tags: ['Combo', 'Café da Manhã', 'Promoção'],
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Promoções</h2>
        <Button variant="outline">Ver Todas</Button>
      </div>
      
      <div className="space-y-6">
        {promotions.map((promo) => (
          <div key={promo.id} className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{promo.title}</h3>
                  <p className="text-gray-700 mt-1">{promo.description}</p>
                </div>
                <span className="bg-[#FA7413] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {promo.discount}
                </span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
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
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  Válido até {new Date(promo.validUntil).toLocaleDateString()}
                </div>
                <Button>
                  Aproveitar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyPromotions;