import React, { useState } from 'react';
import { X, Upload, Tag, Package } from 'lucide-react';
import Button from '../../Button';

interface ProductFormProps {
  product?: any;
  onClose: () => void;
}

const ProductForm = ({ product, onClose }: ProductFormProps) => {
  const [form, setForm] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    image: product?.image || '',
    stock: product?.stock || '',
    tags: product?.tags || [],
    status: product?.status || 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to an API
    console.log('Saving product:', form);
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {product ? 'Editar Produto' : 'Novo Produto'}
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Produto
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              placeholder="Ex: Café Gourmet"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoria
            </label>
            <div className="relative">
              <Package size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              >
                <option value="">Selecione uma categoria</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Padaria">Padaria</option>
                <option value="Doces">Doces</option>
                <option value="Salgados">Salgados</option>
              </select>
            </div>
          </div>
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
            placeholder="Descreva seu produto..."
          />
        </div>

        {/* Price and Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                R$
              </span>
              <input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                placeholder="0,00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estoque
            </label>
            <input
              type="number"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              placeholder="Quantidade em estoque"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagem do Produto
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
                placeholder="Adicione tags para categorizar seu produto"
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

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
            <option value="outOfStock">Sem Estoque</option>
          </select>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">
            {product ? 'Salvar Alterações' : 'Criar Produto'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;