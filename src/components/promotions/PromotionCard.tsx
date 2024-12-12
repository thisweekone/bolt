import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface PromotionCardProps {
  promotion: {
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
  };
}

const PromotionCard = ({ promotion }: PromotionCardProps) => {
  const navigate = useNavigate();

  const handlePromotionClick = () => {
    navigate(`/promocao/${promotion.id}`);
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 overflow-hidden
      ${promotion.featured ? 'border-2 border-[#FA7413]' : 'border border-gray-100'}`}
    >
      <div className="relative">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 right-4 bg-[#FA7413] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {promotion.discount}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={promotion.company.image}
            alt={promotion.company.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{promotion.company.name}</h3>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-900 mb-2">{promotion.title}</h4>
        <p className="text-gray-700 mb-4">{promotion.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {promotion.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar size={16} className="mr-1" />
          Válido até {new Date(promotion.validUntil).toLocaleDateString()}
        </div>
        
        <Button 
          fullWidth
          onClick={handlePromotionClick}
        >
          Aproveitar Promoção
        </Button>
      </div>
    </div>
  );
};

export default PromotionCard;