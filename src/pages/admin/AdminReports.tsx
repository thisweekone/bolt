import React from 'react';
import { BarChart2, TrendingUp, DollarSign, Users } from 'lucide-react';

const AdminReports = () => {
  const reports = [
    {
      title: 'Visitas ao Perfil',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Promoções Resgatadas',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      title: 'Faturamento Estimado',
      value: 'R$ 12.450',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
    },
  ];

  const monthlyData = [
    { month: 'Jan', visits: 980, promotions: 45 },
    { month: 'Fev', visits: 1100, promotions: 52 },
    { month: 'Mar', visits: 1234, promotions: 59 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
          <p className="text-gray-600">Acompanhe o desempenho da sua empresa</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.title}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{report.title}</p>
                <h3 className="text-2xl font-bold mt-1">{report.value}</h3>
              </div>
              <div className="p-3 bg-orange-50 text-[#FA7413] rounded-lg">
                <report.icon size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`font-medium ${
                report.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {report.change}
              </span>
              <span className="text-gray-600 ml-2">vs. último mês</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Desempenho Mensal</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex-1">
                <div className="relative h-full">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-orange-100 rounded-t-lg"
                    style={{ height: `${(data.visits / 1500) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm font-medium text-gray-600">{data.month}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Desempenho de Promoções</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex-1">
                <div className="relative h-full">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#FA7413] rounded-t-lg"
                    style={{ height: `${(data.promotions / 80) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-sm font-medium text-gray-600">{data.month}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Reports */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Relatórios Detalhados</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BarChart2 className="text-[#FA7413]" size={24} />
                <div>
                  <h3 className="font-medium">Relatório de Vendas</h3>
                  <p className="text-sm text-gray-600">Análise detalhada das vendas mensais</p>
                </div>
              </div>
              <button className="text-[#FA7413] hover:text-[#FA8A3D] font-medium">
                Download PDF
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="text-[#FA7413]" size={24} />
                <div>
                  <h3 className="font-medium">Relatório de Clientes</h3>
                  <p className="text-sm text-gray-600">Análise do perfil dos clientes</p>
                </div>
              </div>
              <button className="text-[#FA7413] hover:text-[#FA8A3D] font-medium">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;