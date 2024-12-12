import React, { useState } from 'react';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import CompanyCard from '../components/companies/CompanyCard';
import CompanyFilters from '../components/companies/CompanyFilters';
import Button from '../components/Button';

interface Company {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
  featured?: boolean;
}

const CompaniesListPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data - In a real app, this would come from an API
  const companies: Company[] = [
    {
      id: 1,
      name: 'Café Aroma',
      category: 'Alimentação',
      description: 'Café artesanal e produtos orgânicos',
      rating: 4.8,
      reviewCount: 150,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      featured: true,
    },
    {
      id: 2,
      name: 'Tech Solutions',
      category: 'Tecnologia',
      description: 'Soluções em tecnologia para pequenas empresas',
      rating: 4.6,
      reviewCount: 98,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      featured: true,
    },
    {
      id: 3,
      name: 'Eco Store',
      category: 'Varejo',
      description: 'Produtos sustentáveis e ecológicos',
      rating: 4.7,
      reviewCount: 120,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 4,
      name: 'Padaria Delícia',
      category: 'Alimentação',
      description: 'Pães artesanais e doces especiais',
      rating: 4.5,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  const featuredCompanies = companies.filter(company => company.featured);
  const regularCompanies = companies.filter(company => !company.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Descubra Negócios Locais
          </h1>
          <p className="text-gray-600 mb-6">
            Encontre empresas da sua comunidade e aproveite suas promoções e serviços exclusivos
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Digite o nome da empresa ou palavra-chave..."
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
          
          {showFilters && <CompanyFilters />}
        </div>
      </div>

      {/* Featured Companies */}
      {featuredCompanies.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Empresas em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCompanies.map(company => (
              <CompanyCard key={company.id} company={company} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Companies */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Todas as Empresas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline">
            Carregar Mais
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CompaniesListPage;