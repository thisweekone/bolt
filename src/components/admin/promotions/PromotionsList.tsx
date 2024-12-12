import React from 'react';
import { Calendar, Tag, MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react';
import Button from '../../Button';

interface PromotionsListProps {
  onEdit: (promotion: any) => void;
}

const PromotionsList = ({ onEdit }: PromotionsListProps) => {
  // Mock data - In a real app, this would come from an API
  const promotions = [
    {
      id: 1,
      title: '50% de desconto no Café Gourmet!',
      description: 'Aproveite 50% de desconto em todos os cafés artesanais do nosso cardápio.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-03-29',
      status: 'active',
      views: 245,
      clicks: 67,
      tags: ['Café', 'Desconto'],
    },
    {
      id: 2,
      title: 'Combo Café da Manhã',
      description: 'Café + Croissant por apenas R$ 19,90',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      validUntil: '2024-04-15',
      status: 'scheduled',
      views: 0,
      clicks: 0,
      tags: ['Combo', 'Café da Manhã'],
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      scheduled: 'bg-blue-100 text-blue-800',
      expired: 'bg-gray-100 text-gray-800',
    }[status] || 'bg-gray-100 text-gray-800';

    const labels = {
      active: 'Ativa',
      scheduled: 'Agendada',
      expired: 'Expirada',
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
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Promoção</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Validade</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Visualizações</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliques</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {promotions.map((promotion) => (
              <tr key={promotion.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{promotion.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {promotion.tags.map((tag) => (
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
                  {getStatusBadge(promotion.status)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    {new Date(promotion.validUntil).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-500">
                    <Eye size={16} className="mr-2" />
                    {promotion.views}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-500">
                    <span className="font-medium">{promotion.clicks}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      className="p-2"
                      onClick={() => onEdit(promotion)}
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

export default PromotionsList;