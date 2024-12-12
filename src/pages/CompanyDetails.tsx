import React from 'react';
import CompanyHeader from '../components/company/CompanyHeader';
import CompanyAbout from '../components/company/CompanyAbout';
import CompanyContact from '../components/company/CompanyContact';
import CompanyProducts from '../components/company/CompanyProducts';
import CompanyPromotions from '../components/company/CompanyPromotions';
import CompanyReviews from '../components/company/CompanyReviews';
import CompanyGallery from '../components/company/CompanyGallery';
import CompanyMap from '../components/company/CompanyMap';
import CompanyLoyalty from '../components/company/CompanyLoyalty';
import RelatedCompanies from '../components/company/RelatedCompanies';

const CompanyDetails = () => {
  // Mock data - In a real app, this would come from an API
  const company = {
    id: '1',
    name: 'Café Aroma',
    logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
    category: 'Alimentação',
    rating: 4.8,
    reviewCount: 200,
    description: 'No Café Aroma, valorizamos a produção artesanal e orgânica. Nossos produtos são cuidadosamente preparados para oferecer experiências únicas aos nossos clientes.',
    foundedDate: '2020',
    contact: {
      phone: '(11) 99999-9999',
      email: 'contato@cafearoma.com',
      website: 'www.cafearoma.com',
      socialMedia: {
        instagram: '@cafearoma',
        facebook: '/cafearoma',
      },
    },
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zip: '01234-567',
      coordinates: {
        lat: -23.550520,
        lng: -46.633308,
      },
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CompanyHeader company={company} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CompanyAbout company={company} />
            <CompanyProducts />
            <CompanyPromotions />
            <CompanyReviews />
            <CompanyGallery />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <CompanyContact company={company} />
            <CompanyMap company={company} />
            <CompanyLoyalty />
            <RelatedCompanies />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyDetails;