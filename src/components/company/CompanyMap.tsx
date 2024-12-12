import React from 'react';
import { MapPin } from 'lucide-react';

interface CompanyMapProps {
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
  };
}

const CompanyMap = ({ company }: CompanyMapProps) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Localização</h2>
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
        {/* In a real app, this would be a map component */}
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <MapPin size={32} className="text-gray-400" />
        </div>
      </div>
      <div className="text-gray-700">
        <p>{company.address.street}</p>
        <p>{company.address.city}, {company.address.state}</p>
      </div>
    </section>
  );
};

export default CompanyMap;