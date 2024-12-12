import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PromotionHeaderProps {
  promotion: {
    title: string;
    image: string;
    gallery?: string[];
    discount: string;
  };
}

const PromotionHeader = ({ promotion }: PromotionHeaderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [promotion.image, ...(promotion.gallery || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Image Gallery */}
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <img
            src={images[currentImageIndex]}
            alt={promotion.title}
            className="w-full h-full object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          <div className="absolute top-4 right-4 bg-[#FA7413] text-white px-4 py-2 rounded-full text-lg font-bold">
            {promotion.discount}
          </div>
        </div>

        {/* Title */}
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {promotion.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PromotionHeader;