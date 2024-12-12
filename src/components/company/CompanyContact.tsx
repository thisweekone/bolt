import React from 'react';
import { Phone, Mail, Globe, Clock, MapPin, Instagram, Facebook } from 'lucide-react';

interface CompanyContactProps {
  company: {
    contact: {
      phone: string;
      email: string;
      website: string;
      socialMedia: {
        instagram: string;
        facebook: string;
      };
    };
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    hours: Record<string, string>;
  };
}

const CompanyContact = ({ company }: CompanyContactProps) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contato</h2>
      
      {/* Contact Info */}
      <div className="space-y-4 mb-6">
        <a
          href={`tel:${company.contact.phone}`}
          className="flex items-center gap-3 text-gray-700 hover:text-[#FA7413] transition-colors"
        >
          <Phone size={20} />
          {company.contact.phone}
        </a>
        <a
          href={`mailto:${company.contact.email}`}
          className="flex items-center gap-3 text-gray-700 hover:text-[#FA7413] transition-colors"
        >
          <Mail size={20} />
          {company.contact.email}
        </a>
        <a
          href={`https://${company.contact.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-[#FA7413] transition-colors"
        >
          <Globe size={20} />
          {company.contact.website}
        </a>
      </div>

      {/* Social Media */}
      <div className="flex gap-4 mb-6">
        <a
          href={`https://instagram.com${company.contact.socialMedia.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-[#FA7413] transition-colors"
        >
          <Instagram size={24} />
        </a>
        <a
          href={`https://facebook.com${company.contact.socialMedia.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-[#FA7413] transition-colors"
        >
          <Facebook size={24} />
        </a>
      </div>

      {/* Address */}
      <div className="border-t pt-6 mb-6">
        <div className="flex items-start gap-3 text-gray-700">
          <MapPin size={20} className="flex-shrink-0 mt-1" />
          <div>
            <p>{company.address.street}</p>
            <p>{company.address.city}, {company.address.state}</p>
            <p>{company.address.zip}</p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="border-t pt-6">
        <div className="flex items-start gap-3 text-gray-700">
          <Clock size={20} className="flex-shrink-0 mt-1" />
          <div className="space-y-2">
            {Object.entries(company.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between">
                <span className="capitalize">{day}:</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyContact;