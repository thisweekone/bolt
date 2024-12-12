import React from 'react';
import { Award, Star, MoreVertical } from 'lucide-react';
import Button from '../../Button';

const LoyaltyMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria@email.com',
      points: 350,
      level: 'Ouro',
      joinDate: '2024-01-15',
      lastVisit: '2024-03-20',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao@email.com',
      points: 180,
      level: 'Prata',
      joinDate: '2024-02-01',
      lastVisit: '2024-03-18',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  const getLevelBadge = (level: string) => {
    const styles = {
      Ouro: 'bg-yellow-100 text-yellow-800',
      Prata: 'bg-gray-100 text-gray-800',
      Bronze: 'bg-orange-100 text-orange-800',
    }[level] || 'bg-gray-100 text-gray-800';

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar membros..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413] w-64"
          />
          <Star className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button>Adicionar Pontos</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Membro</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Nível</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Pontos</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data de Entrada</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Última Visita</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getLevelBadge(member.level)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-gray-700">
                    <Award size={16} className="mr-2 text-[#FA7413]" />
                    <span className="font-medium">{member.points}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(member.joinDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(member.lastVisit).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical size={20} className="text-gray-500" />
                    </button>
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

export default LoyaltyMembers;