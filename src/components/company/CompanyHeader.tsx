import React from 'react';
import { Star, MessageCircle, Heart } from 'lucide-react';
import Button from '../Button';

interface CompanyHeaderProps {
  company: {
    name: string;
    logo: string;
    category: string;
    rating: number;
    reviewCount: number;
  };
}

const CompanyHeader = ({ company }: CompanyHeaderProps) => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Logo */}
          <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {company.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-600">{company.category}</span>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">{company.rating}</span>
                <span className="text-gray-500">
                  ({company.reviewCount} avaliações)
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <Button
              className="flex items-center gap-2"
              variant="primary"
            >
              <MessageCircle size={20} />
              Falar com a Empresa
            </Button>
            <Button
              className="flex items-center gap-2"
              variant="outline"
            >
              <Heart size={20} />
              Seguir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;