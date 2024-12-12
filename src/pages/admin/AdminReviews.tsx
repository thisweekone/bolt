import React, { useState } from 'react';
import { Star, Filter } from 'lucide-react';
import Button from '../../components/Button';
import ReviewsList from '../../components/admin/reviews/ReviewsList';
import ReviewStats from '../../components/admin/reviews/ReviewStats';

const AdminReviews = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Avaliações</h1>
          <p className="text-gray-600">Gerencie as avaliações da sua empresa</p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter size={20} />
          Filtros
        </Button>
      </div>

      <ReviewStats />
      <ReviewsList />
    </div>
  );
};

export default AdminReviews;