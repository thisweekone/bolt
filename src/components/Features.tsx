import React from 'react';
import { BookOpen, BarChart3, Users, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#FA7413]" />,
      title: 'Treinamentos',
      description: 'Acesse trilhas de aprendizado exclusivas e desenvolva suas habilidades empresariais',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#FA7413]" />,
      title: 'Ferramentas de Gestão',
      description: 'Gerencie seu negócio com ferramentas práticas de CRM, finanças e estoque',
    },
    {
      icon: <Users className="w-8 h-8 text-[#FA7413]" />,
      title: 'Networking',
      description: 'Conecte-se com outros empreendedores e estabeleça parcerias estratégicas',
    },
    {
      icon: <Star className="w-8 h-8 text-[#FA7413]" />,
      title: 'Visibilidade',
      description: 'Destaque seu negócio e alcance mais clientes na sua região',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o HubEmpreenda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;