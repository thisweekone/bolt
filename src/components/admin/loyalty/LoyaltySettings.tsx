import React, { useState } from 'react';
import { Award } from 'lucide-react';
import Button from '../../Button';

const LoyaltySettings = () => {
  const [settings, setSettings] = useState({
    pointsPerCurrency: 1,
    minimumPurchase: 10,
    expirationDays: 365,
    levels: [
      { name: 'Bronze', minPoints: 0, multiplier: 1 },
      { name: 'Prata', minPoints: 1000, multiplier: 1.2 },
      { name: 'Ouro', minPoints: 5000, multiplier: 1.5 },
    ],
  });

  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Saving settings:', settings);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Configurações Gerais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pontos por Real Gasto
            </label>
            <div className="relative">
              <Award size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={settings.pointsPerCurrency}
                onChange={(e) => setSettings({
                  ...settings,
                  pointsPerCurrency: Number(e.target.value)
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor Mínimo para Pontuação (R$)
            </label>
            <input
              type="number"
              value={settings.minimumPurchase}
              onChange={(e) => setSettings({
                ...settings,
                minimumPurchase: Number(e.target.value)
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Validade dos Pontos (dias)
            </label>
            <input
              type="number"
              value={settings.expirationDays}
              onChange={(e) => setSettings({
                ...settings,
                expirationDays: Number(e.target.value)
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Níveis de Fidelidade</h3>
        <div className="space-y-4">
          {settings.levels.map((level, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Nível
                </label>
                <input
                  type="text"
                  value={level.name}
                  onChange={(e) => {
                    const newLevels = [...settings.levels];
                    newLevels[index].name = e.target.value;
                    setSettings({ ...settings, levels: newLevels });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pontos Mínimos
                </label>
                <input
                  type="number"
                  value={level.minPoints}
                  onChange={(e) => {
                    const newLevels = [...settings.levels];
                    newLevels[index].minPoints = Number(e.target.value);
                    setSettings({ ...settings, levels: newLevels });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Multiplicador de Pontos
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={level.multiplier}
                  onChange={(e) => {
                    const newLevels = [...settings.levels];
                    newLevels[index].multiplier = Number(e.target.value);
                    setSettings({ ...settings, levels: newLevels });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>
          Salvar Configurações
        </Button>
      </div>
    </div>
  );
};

export default LoyaltySettings;