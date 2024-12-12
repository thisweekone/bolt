import React from 'react';
import { Users, Award, TrendingUp, Gift } from 'lucide-react';

const LoyaltyStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Membros Ativos',
      value: '234',
      change: '+12',
      trend: 'up',
    },
    {
      icon: Award,
      label: 'Pontos Distribuídos',
      value: '12.5k',
      change: '+2.3k',
      trend: 'up',
    },
    {
      icon: Gift,
      label: 'Recompensas Resgatadas',
      value: '89',
      change: '+15',
      trend: 'up',
    },
    {
      icon: TrendingUp,
      label: 'Taxa de Engajamento',
      value: '68%',
      change: '+5%',
      trend: 'up',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
            <div className="p-3 bg-orange-50 text-[#FA7413] rounded-lg">
              <stat.icon size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className={`font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
            <span className="text-gray-600 ml-2">este mês</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoyaltyStats;