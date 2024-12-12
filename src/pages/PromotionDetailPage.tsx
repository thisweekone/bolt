import React from 'react';
import { useParams } from 'react-router-dom';
import PromotionHeader from '../components/promotion/PromotionHeader';
import PromotionDetails from '../components/promotion/PromotionDetails';
import PromotionActions from '../components/promotion/PromotionActions';
import PromotionLocation from '../components/promotion/PromotionLocation';
import PromotionReviews from '../components/promotion/PromotionReviews';
import RelatedPromotions from '../components/promotion/RelatedPromotions';

const PromotionDetailPage = () => {
  const { id } = useParams();

  // Mock data - In a real app, this would come from an API
  const promotion = {
    id: '1',
    title: '50% de desconto no Café Gourmet!',
    description: 'Aproveite 50% de desconto em todos os cafés artesanais do nosso cardápio. Promoção válida para consumo no local e disponível até o final de março.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
    ],
    validUntil: '2024-03-29',
    discount: '50% OFF',
    tags: ['Café', 'Promoção', 'Desconto', 'Consumo Local'],
    company: {
      id: '1',
      name: 'Café Aroma',
      logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      phone: '(11) 99999-9999',
      whatsapp: '5511999999999',
      website: 'www.cafearoma.com',
      address: {
        street: 'Rua das Flores, 123',
        city: 'São Paulo',
        state: 'SP',
        coordinates: {
          lat: -23.550520,
          lng: -46.633308,
        }
      },
      hours: {
        monday: '08:00 - 18:00',
        tuesday: '08:00 - 18:00',
        wednesday: '08:00 - 18:00',
        thursday: '08:00 - 18:00',
        friday: '08:00 - 18:00',
        saturday: '09:00 - 13:00',
        sunday: 'Fechado',
      },
    },
    rules: [
      'Promoção válida apenas para consumo no local',
      'Limitado a um café por cliente',
      'Não acumulativo com outras promoções',
      'Necessário apresentar o cupom no momento do pedido',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PromotionHeader promotion={promotion} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PromotionDetails promotion={promotion} />
            <PromotionReviews promotionId={promotion.id} />
            <RelatedPromotions currentPromotionId={promotion.id} />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <PromotionActions promotion={promotion} />
            <PromotionLocation company={promotion.company} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromotionDetailPage;