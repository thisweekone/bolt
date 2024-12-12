import React from 'react';
import { Calendar } from 'lucide-react';

interface CompanyAboutProps {
  company: {
    description: string;
    foundedDate: string;
  };
}

const CompanyAbout = ({ company }: CompanyAboutProps) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Sobre a Empresa</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        {company.description}
      </p>
      <div className="flex items-center gap-2 text-gray-600">
        <Calendar size={20} />
        <span>Fundada em {company.foundedDate}</span>
      </div>
    </section>
  );
};

export default CompanyAbout;