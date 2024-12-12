import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromotionDetailsProps {
  promotion: {
    description: string;
    validUntil: string;
    tags: string[];
    company: {
      id: string;
      name: string;
      logo: string;
    };
    rules: string[];
  };
}

const PromotionDetails = ({ promotion }: PromotionDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Company Info */}
      <Link 
        to={`/empresa/${promotion.company.id}`}
        className="flex items-center gap-4 mb-6 hover:opacity-80 transition-opacity"
      >
        <img
          src={promotion.company.logo}
          alt={promotion.company.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{promotion.company.name}</h3>
          <p className="text-sm text-gray-600">Clique para saber mais sobre a empresa</p>
        </div>
      </Link>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Descrição da Promoção</h3>
        <p className="text-gray-700">{promotion.description}</p>
      </div>

      {/* Validity */}
      <div className="flex items-center gap-2 text-gray-700 mb-6">
        <Calendar size={20} />
        <span>Válido até {new Date(promotion.validUntil).toLocaleDateString()}</span>
      </div>

      {/* Rules */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Regras e Condições</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {promotion.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {promotion.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
          >
            <Tag size={14} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PromotionDetails;