import React from 'react';
import { Building2, MapPin, Upload } from 'lucide-react';
import Button from '../../../components/Button';

interface CompanyDetailsStepProps {
  data: {
    description: string;
    category: string;
    address: {
      street: string;
      number: string;
      city: string;
      state: string;
      zipCode: string;
    };
    logo: string;
    images: string[];
  };
  onUpdate: (data: Partial<CompanyDetailsStepProps['data']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const CompanyDetailsStep = ({ data, onUpdate, onNext, onBack }: CompanyDetailsStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleAddressChange = (field: keyof CompanyDetailsStepProps['data']['address'], value: string) => {
    onUpdate({
      address: {
        ...data.address,
        [field]: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descrição da Empresa
        </label>
        <textarea
          value={data.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Categoria
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <select
            value={data.category}
            onChange={(e) => onUpdate({ category: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="alimentacao">Alimentação</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="varejo">Varejo</option>
            <option value="servicos">Serviços</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900 flex items-center gap-2">
          <MapPin size={20} />
          Endereço
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rua
            </label>
            <input
              type="text"
              value={data.address.street}
              onChange={(e) => handleAddressChange('street', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número
            </label>
            <input
              type="text"
              value={data.address.number}
              onChange={(e) => handleAddressChange('number', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cidade
            </label>
            <input
              type="text"
              value={data.address.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <input
              type="text"
              value={data.address.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CEP
            </label>
            <input
              type="text"
              value={data.address.zipCode}
              onChange={(e) => handleAddressChange('zipCode', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-4">
          <Upload size={20} />
          Imagens
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo da Empresa
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload size={24} className="mx-auto text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-[#FA7413] hover:text-[#FA8A3D] focus-within:outline-none">
                    <span>Fazer upload</span>
                    <input type="file" className="sr-only" accept="image/*" />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG até 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fotos Adicionais (até 3)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload size={24} className="mx-auto text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer rounded-md font-medium text-[#FA7413] hover:text-[#FA8A3D] focus-within:outline-none">
                    <span>Fazer upload</span>
                    <input type="file" className="sr-only" accept="image/*" multiple />
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG até 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button type="submit">
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default CompanyDetailsStep;