import React from 'react';
import { Plus, Coffee, Gift, Edit2, Trash2 } from 'lucide-react';
import Button from '../../Button';

const LoyaltyRewards = () => {
  const rewards = [
    {
      id: 1,
      name: 'Café Grátis',
      description: 'Um café expresso ou americano grátis',
      points: 100,
      icon: Coffee,
      status: 'active',
      redeemed: 45,
    },
    {
      id: 2,
      name: 'Desconto de 50%',
      description: '50% de desconto em qualquer bebida',
      points: 200,
      icon: Gift,
      status: 'active',
      redeemed: 23,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Recompensas Disponíveis</h3>
        <Button className="flex items-center gap-2">
          <Plus size={20} />
          Nova Recompensa
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-orange-50 text-[#FA7413] rounded-lg">
                <reward.icon size={24} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Edit2 size={16} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Trash2 size={16} className="text-gray-500" />
                </button>
              </div>
            </div>

            <h4 className="text-lg font-semibold mt-4">{reward.name}</h4>
            <p className="text-gray-600 text-sm mt-1">{reward.description}</p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center text-[#FA7413]">
                <Award size={16} className="mr-1" />
                <span className="font-semibold">{reward.points} pontos</span>
              </div>
              <span className="text-sm text-gray-500">
                {reward.redeemed} resgates
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoyaltyRewards;