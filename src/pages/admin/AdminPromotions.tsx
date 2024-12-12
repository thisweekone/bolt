import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import PromotionsList from '../../components/admin/promotions/PromotionsList';
import PromotionForm from '../../components/admin/promotions/PromotionForm';

const AdminPromotions = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<any>(null);

  const handleEdit = (promotion: any) => {
    setEditingPromotion(promotion);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingPromotion(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promoções</h1>
          <p className="text-gray-600">Gerencie as promoções da sua empresa</p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Nova Promoção
        </Button>
      </div>

      {showForm ? (
        <PromotionForm
          promotion={editingPromotion}
          onClose={handleClose}
        />
      ) : (
        <PromotionsList onEdit={handleEdit} />
      )}
    </div>
  );
};

export default AdminPromotions;