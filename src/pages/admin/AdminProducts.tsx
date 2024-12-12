import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import ProductsList from '../../components/admin/products/ProductsList';
import ProductForm from '../../components/admin/products/ProductForm';

const AdminProducts = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
          <p className="text-gray-600">Gerencie os produtos da sua empresa</p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Novo Produto
        </Button>
      </div>

      {showForm ? (
        <ProductForm
          product={editingProduct}
          onClose={handleClose}
        />
      ) : (
        <ProductsList onEdit={handleEdit} />
      )}
    </div>
  );
};

export default AdminProducts;