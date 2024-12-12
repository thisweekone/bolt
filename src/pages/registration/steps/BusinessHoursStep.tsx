import React from 'react';
import { Clock, Globe, Instagram, Facebook, Linkedin } from 'lucide-react';
import Button from '../../../components/Button';

interface BusinessHoursStepProps {
  data: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    website: string;
  };
  onUpdateHours: (data: BusinessHoursStepProps['data']) => void;
  onUpdateSocial: (data: BusinessHoursStepProps['socialMedia']) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessHoursStep = ({
  data,
  socialMedia,
  onUpdateHours,
  onUpdateSocial,
  onNext,
  onBack,
}: BusinessHoursStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleHoursChange = (day: string, field: 'open' | 'close' | 'isOpen', value: string | boolean) => {
    onUpdateHours({
      ...data,
      [day]: {
        ...data[day],
        [field]: value,
      },
    });
  };

  const days = [
    { key: 'monday', label: 'Segunda-feira' },
    { key: 'tuesday', label: 'Terça-feira' },
    { key: 'wednesday', label: 'Quarta-feira' },
    { key: 'thursday', label: 'Quinta-feira' },
    { key: 'friday', label: 'Sexta-feira' },
    { key: 'saturday', label: 'Sábado' },
    { key: 'sunday', label: 'Domingo' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-4">
          <Clock size={20} />
          Horário de Funcionamento
        </h3>

        <div className="space-y-4">
          {days.map((day) => (
            <div key={day.key} className="flex items-center gap-4">
              <div className="w-40">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={data[day.key].isOpen}
                    onChange={(e) => handleHoursChange(day.key, 'isOpen', e.target.checked)}
                    className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
                  />
                  <span className="ml-2 text-sm text-gray-700">{day.label}</span>
                </label>
              </div>

              <div className="flex items-center gap-2 flex-1">
                <input
                  type="time"
                  value={data[day.key].open}
                  onChange={(e) => handleHoursChange(day.key, 'open', e.target.value)}
                  disabled={!data[day.key].isOpen}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413] disabled:bg-gray-100 disabled:text-gray-500"
                />
                <span className="text-gray-500">até</span>
                <input
                  type="time"
                  value={data[day.key].close}
                  onChange={(e) => handleHoursChange(day.key, 'close', e.target.value)}
                  disabled={!data[day.key].isOpen}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413] disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-4">
          <Globe size={20} />
          Redes Sociais
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="url"
                value={socialMedia.website}
                onChange={(e) => onUpdateSocial({ ...socialMedia, website: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="www.seusite.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instagram
            </label>
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={socialMedia.instagram}
                onChange={(e) => onUpdateSocial({ ...socialMedia, instagram: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="@seuinstagram"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook
            </label>
            <div className="relative">
              <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={socialMedia.facebook}
                onChange={(e) => onUpdateSocial({ ...socialMedia, facebook: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="/suapagina"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn
            </label>
            <div className="relative">
              <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={socialMedia.linkedin}
                onChange={(e) => onUpdateSocial({ ...socialMedia, linkedin: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="/company/suaempresa"
              />
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

export default BusinessHoursStep;