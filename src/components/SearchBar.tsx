import React from 'react';
import { Search, MapPin } from 'lucide-react';
import Button from './Button';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar empresas ou serviços"
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#FA7413] focus:outline-none focus:ring-2 focus:ring-[#FA7413] focus:ring-opacity-20 transition duration-200"
          />
        </div>
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Localização"
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#FA7413] focus:outline-none focus:ring-2 focus:ring-[#FA7413] focus:ring-opacity-20 transition duration-200"
          />
        </div>
        <Button className="md:w-auto py-3 px-8">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;