import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RelatedCompany {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
}

const RelatedCompanies = () => {
  const navigate = useNavigate();
  
  // Mock data - In a real app, this would come from an API
  const companies: RelatedCompany[] = [
    {
      id: 2,
      name: 'Padaria Delícia',
      category: 'Alimentação',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 3,
      name: 'Café Express',
      category: 'Cafeteria',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Empresas Relacionadas</h2>
      
      <div className="space-y-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-200"
            onClick={() => navigate(`/empresa/${company.id}`)}
          >
            <img
              src={company.image}
              alt={company.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.category}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{company.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedCompanies;