import React, { useState } from 'react';
import { Search, MapPin, Filter, Calendar, Tag } from 'lucide-react';
import Button from '../components/Button';
import PromotionCard from '../components/promotions/PromotionCard';
import PromotionFilters from '../components/promotions/PromotionFilters';
import FeaturedPromotions from '../components/promotions/FeaturedPromotions';

interface Promotion {
  id: number;
  title: string;
  description: string;
  company: {
    id: number;
    name: string;
    image: string;
  };
  image: string;
  validUntil: string;
  discount: string;
  tags: string[];
  featured?: boolean;
}

const PromotionsPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - In a real app, this would come from an API
  const promotions: Promotion[] = [
    {
      id: 1,
      title: 'Happy Hour Especial',
      description: 'Todos os cafés com 50% de desconto após as 17h',
      company: {
        id: 1,
        name: 'Café Aroma',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      },
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-30',
      discount: '50% OFF',
      tags: ['Happy Hour', 'Café', 'Desconto'],
      featured: true,
    },
    {
      id: 2,
      title: 'Combo Café da Manhã',
      description: 'Café + Croissant por apenas R$ 19,90',
      company: {
        id: 1,
        name: 'Café Aroma',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      },
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-15',
      discount: 'R$ 19,90',
      tags: ['Combo', 'Café da Manhã', 'Promoção'],
      featured: true,
    },
    {
      id: 3,
      title: 'Consultoria Gratuita',
      description: 'Primeira hora de consultoria tecnológica gratuita',
      company: {
        id: 2,
        name: 'Tech Solutions',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      },
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-03-25',
      discount: 'Grátis',
      tags: ['Tecnologia', 'Consultoria', 'Grátis'],
    },
  ];

  const featuredPromotions = promotions.filter(promo => promo.featured);
  const regularPromotions = promotions.filter(promo => !promo.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Aproveite Ofertas Exclusivas
          </h1>
          <p className="text-gray-600 mb-6">
            Descubra as melhores promoções das empresas cadastradas na sua comunidade!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Digite o nome da promoção, empresa ou palavra-chave..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#FA7413] focus:outline-none focus:ring-2 focus:ring-[#FA7413] focus:ring-opacity-20 transition duration-200"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Localização"
                className="w-full md:w-48 pl-10 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#FA7413] focus:outline-none focus:ring-2 focus:ring-[#FA7413] focus:ring-opacity-20 transition duration-200"
              />
            </div>
            <Button
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              Filtros
            </Button>
          </div>
          
          {showFilters && <PromotionFilters />}
        </div>
      </div>

      {/* Featured Promotions */}
      {featuredPromotions.length > 0 && (
        <FeaturedPromotions promotions={featuredPromotions} />
      )}

      {/* All Promotions */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas as Promoções</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPromotions.map(promotion => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline">
            Carregar Mais
          </Button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-4 py-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Você é um empresário?</h3>
          <p className="text-gray-600 mb-6">
            Cadastre sua empresa e comece a divulgar suas promoções hoje mesmo!
          </p>
          <Button>Cadastrar Minha Empresa</Button>
        </div>
      </section>
    </div>
  );
};

export default PromotionsPage;