import React, { useState } from 'react';
import { Award, Users, Gift, Settings } from 'lucide-react';
import Button from '../../components/Button';
import LoyaltyStats from '../../components/admin/loyalty/LoyaltyStats';
import LoyaltyMembers from '../../components/admin/loyalty/LoyaltyMembers';
import LoyaltyRewards from '../../components/admin/loyalty/LoyaltyRewards';
import LoyaltySettings from '../../components/admin/loyalty/LoyaltySettings';

const AdminLoyalty = () => {
  const [activeTab, setActiveTab] = useState('members');

  const tabs = [
    { id: 'members', label: 'Membros', icon: Users },
    { id: 'rewards', label: 'Recompensas', icon: Gift },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Programa de Fidelidade</h1>
          <p className="text-gray-600">Gerencie seu programa de fidelidade e recompensas</p>
        </div>
      </div>

      <LoyaltyStats />

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="border-b border-gray-100">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#FA7413] border-b-2 border-[#FA7413]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'members' && <LoyaltyMembers />}
          {activeTab === 'rewards' && <LoyaltyRewards />}
          {activeTab === 'settings' && <LoyaltySettings />}
        </div>
      </div>
    </div>
  );
};

export default AdminLoyalty;