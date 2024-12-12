import React, { useState } from 'react';
import { X, Upload, Calendar, Tag } from 'lucide-react';
import Button from '../../Button';

interface PromotionFormProps {
  promotion?: any;
  onClose: () => void;
}

const PromotionForm = ({ promotion, onClose }: PromotionFormProps) => {
  const [form, setForm] = useState({
    title: promotion?.title || '',
    description: promotion?.description || '',
    image: promotion?.image || '',
    validUntil: promotion?.validUntil || '',
    discount: promotion?.discount || '',
    tags: promotion?.tags || [],
    rules: promotion?.rules || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to an API
    console.log('Saving promotion:', form);
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {promotion ? 'Editar Promoção' : 'Nova Promoção'}
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Título da Promoção
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            placeholder="Ex: 50% de desconto no Café Gourmet!"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            placeholder="Descreva os detalhes da sua promoção..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem da Promoção
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload size={24} className="mx-auto text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-[#FA7413] hover:text-[#FA8A3D] focus-within:outline-none"
                >
                  <span>Fazer upload de arquivo</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF até 10MB
              </p>
            </div>
          </div>
        </div>

        {/* Validity and Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Validade
            </label>
            <div className="relative">
              <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={form.validUntil}
                onChange={(e) => setForm({ ...form, validUntil: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Desconto
            </label>
            <input
              type="text"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              placeholder="Ex: 50% OFF"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <Tag size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Adicione tags para categorizar sua promoção"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
            <Button variant="outline" type="button">
              Adicionar
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {form.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                {tag}
                <button
                  type="button"
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    const newTags = [...form.tags];
                    newTags.splice(index, 1);
                    setForm({ ...form, tags: newTags });
                  }}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Regras e Condições
          </label>
          <div className="space-y-2">
            {form.rules.map((rule: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={rule}
                  onChange={(e) => {
                    const newRules = [...form.rules];
                    newRules[index] = e.target.value;
                    setForm({ ...form, rules: newRules });
                  }}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newRules = [...form.rules];
                    newRules.splice(index, 1);
                    setForm({ ...form, rules: newRules });
                  }}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm({ ...form, rules: [...form.rules, ''] })}
            >
              Adicionar Regra
            </Button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">
            {promotion ? 'Salvar Alterações' : 'Criar Promoção'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PromotionForm;