import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const FeaturedCompanies = () => {
  const navigate = useNavigate();
  
  const companies = [
    {
      id: 1,
      name: 'Café Aroma',
      category: 'Alimentação',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      description: 'Café artesanal e produtos orgânicos',
    },
    {
      id: 2,
      name: 'Tech Solutions',
      category: 'Tecnologia',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Soluções em tecnologia para pequenas empresas',
    },
    {
      id: 3,
      name: 'Eco Store',
      category: 'Varejo',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Produtos sustentáveis e ecológicos',
    },
  ];

  const handleViewDetails = (companyId: number) => {
    navigate(`/empresa/${companyId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Empresas em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <p className="text-gray-600 text-sm">{company.category}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-medium">{company.rating}</span>
                  </div>
                </div>
                <p className="text-gray-700">{company.description}</p>
                <Button 
                  className="mt-4 w-full"
                  onClick={() => handleViewDetails(company.id)}
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button 
            className="inline-flex items-center text-[#FA7413] font-semibold hover:text-[#FA8A3D] transition duration-200"
            onClick={() => navigate('/empresas')}
          >
            Ver todas as empresas
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;