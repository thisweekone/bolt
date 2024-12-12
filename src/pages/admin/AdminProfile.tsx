import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, Globe, Clock, Camera, Instagram, Facebook } from 'lucide-react';
import Button from '../../components/Button';

const AdminProfile = () => {
  const [company, setCompany] = useState({
    name: 'Café Aroma',
    description: 'No Café Aroma, valorizamos a produção artesanal e orgânica. Nossos produtos são cuidadosamente preparados para oferecer experiências únicas aos nossos clientes.',
    category: 'Alimentação',
    logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
    coverImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    contact: {
      phone: '(11) 99999-9999',
      email: 'contato@cafearoma.com',
      website: 'www.cafearoma.com',
      instagram: '@cafearoma',
      facebook: '/cafearoma',
    },
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zip: '01234-567',
    },
    hours: {
      monday: '08:00 - 18:00',
      tuesday: '08:00 - 18:00',
      wednesday: '08:00 - 18:00',
      thursday: '08:00 - 18:00',
      friday: '08:00 - 18:00',
      saturday: '09:00 - 13:00',
      sunday: 'Fechado',
    },
  });

  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Saving company profile:', company);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Perfil da Empresa</h1>
        <Button onClick={handleSave}>Salvar Alterações</Button>
      </div>

      {/* Basic Information */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Building2 size={20} />
          Informações Básicas
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Empresa
            </label>
            <input
              type="text"
              value={company.name}
              onChange={(e) => setCompany({ ...company, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              value={company.description}
              onChange={(e) => setCompany({ ...company, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoria
            </label>
            <select
              value={company.category}
              onChange={(e) => setCompany({ ...company, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            >
              <option>Alimentação</option>
              <option>Tecnologia</option>
              <option>Varejo</option>
              <option>Serviços</option>
            </select>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Camera size={20} />
          Imagens
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo da Empresa
            </label>
            <div className="flex items-center gap-4">
              <img
                src={company.logo}
                alt="Logo"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <Button variant="outline">Alterar Logo</Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagem de Capa
            </label>
            <div className="flex items-center gap-4">
              <img
                src={company.coverImage}
                alt="Cover"
                className="w-48 h-24 rounded-lg object-cover"
              />
              <Button variant="outline">Alterar Capa</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Phone size={20} />
          Informações de Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              value={company.contact.phone}
              onChange={(e) => setCompany({
                ...company,
                contact: { ...company.contact, phone: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={company.contact.email}
              onChange={(e) => setCompany({
                ...company,
                contact: { ...company.contact, email: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              type="url"
              value={company.contact.website}
              onChange={(e) => setCompany({
                ...company,
                contact: { ...company.contact, website: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instagram
            </label>
            <div className="flex items-center">
              <span className="px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                <Instagram size={20} className="text-gray-500" />
              </span>
              <input
                type="text"
                value={company.contact.instagram}
                onChange={(e) => setCompany({
                  ...company,
                  contact: { ...company.contact, instagram: e.target.value }
                })}
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook
            </label>
            <div className="flex items-center">
              <span className="px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                <Facebook size={20} className="text-gray-500" />
              </span>
              <input
                type="text"
                value={company.contact.facebook}
                onChange={(e) => setCompany({
                  ...company,
                  contact: { ...company.contact, facebook: e.target.value }
                })}
                className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <MapPin size={20} />
          Endereço
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rua
            </label>
            <input
              type="text"
              value={company.address.street}
              onChange={(e) => setCompany({
                ...company,
                address: { ...company.address, street: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cidade
            </label>
            <input
              type="text"
              value={company.address.city}
              onChange={(e) => setCompany({
                ...company,
                address: { ...company.address, city: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <input
              type="text"
              value={company.address.state}
              onChange={(e) => setCompany({
                ...company,
                address: { ...company.address, state: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CEP
            </label>
            <input
              type="text"
              value={company.address.zip}
              onChange={(e) => setCompany({
                ...company,
                address: { ...company.address, zip: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Clock size={20} />
          Horário de Funcionamento
        </h2>

        <div className="space-y-4">
          {Object.entries(company.hours).map(([day, hours]) => (
            <div key={day} className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700 capitalize">
                {day}
              </label>
              <input
                type="text"
                value={hours}
                onChange={(e) => setCompany({
                  ...company,
                  hours: { ...company.hours, [day]: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="08:00 - 18:00"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;