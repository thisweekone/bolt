import React from 'react';
import { Tag, Package, Edit2, Trash2 } from 'lucide-react';
import Button from '../../Button';

interface ProductsListProps {
  onEdit: (product: any) => void;
}

const ProductsList = ({ onEdit }: ProductsListProps) => {
  // Mock data - In a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Café Gourmet',
      description: 'Blend exclusivo de grãos selecionados',
      price: 29.90,
      category: 'Bebidas',
      image: 'https://images.unsplash.com/photo-1587734195342-5fbf0d155862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      stock: 50,
      tags: ['Café', 'Gourmet'],
      status: 'active',
    },
    {
      id: 2,
      name: 'Croissant',
      description: 'Croissant artesanal com manteiga francesa',
      price: 12.90,
      category: 'Padaria',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      stock: 15,
      tags: ['Padaria', 'Artesanal'],
      status: 'active',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      outOfStock: 'bg-red-100 text-red-800',
    }[status] || 'bg-gray-100 text-gray-800';

    const labels = {
      active: 'Ativo',
      inactive: 'Inativo',
      outOfStock: 'Sem Estoque',
    }[status] || status;

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
        {labels}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Produto</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Categoria</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Preço</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Estoque</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-500">
                    <Package size={16} className="mr-2" />
                    {product.category}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">
                    R$ {product.price.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">
                    {product.stock} unidades
                  </span>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(product.status)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      className="p-2"
                      onClick={() => onEdit(product)}
                    >
                      <Edit2 size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      className="p-2"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;