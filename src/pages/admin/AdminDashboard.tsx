import React from 'react';
import { Users, Star, Eye, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      icon: Eye,
      label: 'Visualizações',
      value: '1.2k',
      change: '+12%',
      trend: 'up',
    },
    {
      icon: Users,
      label: 'Clientes Fidelizados',
      value: '234',
      change: '+5%',
      trend: 'up',
    },
    {
      icon: Star,
      label: 'Avaliação Média',
      value: '4.8',
      change: '+0.2',
      trend: 'up',
    },
    {
      icon: TrendingUp,
      label: 'Promoções Ativas',
      value: '8',
      change: '+2',
      trend: 'up',
    },
  ];

  return (
    <div className="space-y-6">
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
              <span className="text-gray-600 ml-2">vs. último mês</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Atividade Recente</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div>
              <p className="font-medium">Nova avaliação recebida</p>
              <p className="text-sm text-gray-600">Maria Silva avaliou sua empresa com 5 estrelas</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">2 min atrás</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div>
              <p className="font-medium">Promoção ativada</p>
              <p className="text-sm text-gray-600">50% de desconto em cafés foi ativada</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">1 hora atrás</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div>
              <p className="font-medium">Novo cliente fidelizado</p>
              <p className="text-sm text-gray-600">João Santos se cadastrou no programa de fidelidade</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">3 horas atrás</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;