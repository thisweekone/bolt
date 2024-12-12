import React from 'react';
import { Star, TrendingUp, MessageSquare, ThumbsUp } from 'lucide-react';

const ReviewStats = () => {
  const stats = [
    {
      icon: Star,
      label: 'Avaliação Média',
      value: '4.8',
      change: '+0.2',
      trend: 'up',
    },
    {
      icon: MessageSquare,
      label: 'Total de Avaliações',
      value: '234',
      change: '+12',
      trend: 'up',
    },
    {
      icon: ThumbsUp,
      label: 'Recomendações',
      value: '98%',
      change: '+2%',
      trend: 'up',
    },
    {
      icon: TrendingUp,
      label: 'Taxa de Resposta',
      value: '95%',
      change: '+5%',
      trend: 'up',
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Stats Cards */}
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

      {/* Rating Distribution */}
      <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Distribuição de Avaliações</h3>
        <div className="space-y-3">
          {ratingDistribution.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-20">
                <Star
                  size={16}
                  className="text-yellow-400 fill-current"
                />
                <span className="text-sm font-medium">{stars}</span>
              </div>
              <div className="flex-grow">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FA7413] rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-medium w-12">{percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;