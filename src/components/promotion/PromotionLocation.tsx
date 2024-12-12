import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface PromotionLocationProps {
  company: {
    address: {
      street: string;
      city: string;
      state: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    hours: Record<string, string>;
  };
}

const PromotionLocation = ({ company }: PromotionLocationProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Address */}
      <div className="mb-6">
        <h3 className="font-semibold mb-4">Localização</h3>
        <div className="flex items-start gap-3 text-gray-700">
          <MapPin size={20} className="flex-shrink-0 mt-1" />
          <div>
            <p>{company.address.street}</p>
            <p>{company.address.city}, {company.address.state}</p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
        <MapPin size={32} className="text-gray-400" />
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="font-semibold mb-4">Horário de Funcionamento</h3>
        <div className="space-y-2">
          {Object.entries(company.hours).map(([day, hours]) => (
            <div key={day} className="flex items-center gap-3 text-gray-700">
              <Clock size={16} className="flex-shrink-0" />
              <div className="flex justify-between w-full">
                <span className="capitalize">{day}:</span>
                <span>{hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionLocation;