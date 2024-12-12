import React from 'react';
import { User, Mail, Phone, Lock } from 'lucide-react';
import Button from '../../../components/Button';

interface BasicInfoStepProps {
  data: {
    companyName: string;
    responsibleName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };
  onUpdate: (data: Partial<BasicInfoStepProps['data']>) => void;
  onNext: () => void;
}

const BasicInfoStep = ({ data, onUpdate, onNext }: BasicInfoStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome da Empresa
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={data.companyName}
            onChange={(e) => onUpdate({ companyName: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome do Responsável
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={data.responsibleName}
            onChange={(e) => onUpdate({ responsibleName: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          E-mail
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefone
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            value={data.password}
            onChange={(e) => onUpdate({ password: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
            minLength={8}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirmar Senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(e) => onUpdate({ confirmPassword: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            required
            minLength={8}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default BasicInfoStep;