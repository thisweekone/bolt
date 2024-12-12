import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface CompanyCardProps {
  company: {
    id: number;
    name: string;
    category: string;
    description: string;
    rating: number;
    reviewCount: number;
    image: string;
  };
  featured?: boolean;
}

const CompanyCard = ({ company, featured }: CompanyCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 overflow-hidden
        ${featured ? 'border-2 border-[#FA7413]' : 'border border-gray-100'}`}
    >
      <div className="relative">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <span className="absolute top-4 right-4 bg-[#FA7413] text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destaque
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {company.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{company.category}</p>
          <p className="text-gray-700">{company.description}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-current" size={20} />
            <span className="font-semibold">{company.rating}</span>
            <span className="text-gray-500 text-sm">
              ({company.reviewCount} avaliações)
            </span>
          </div>
        </div>
        
        <Button 
          fullWidth
          onClick={() => navigate(`/empresa/${company.id}`)}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;