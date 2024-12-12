import React from 'react';
import PromotionCard from './PromotionCard';

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

interface FeaturedPromotionsProps {
  promotions: Promotion[];
}

const FeaturedPromotions = ({ promotions }: FeaturedPromotionsProps) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Promoções em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map(promotion => (
          <PromotionCard key={promotion.id} promotion={promotion} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPromotions;