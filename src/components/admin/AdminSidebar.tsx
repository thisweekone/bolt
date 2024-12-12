import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Store,
  Tag,
  Package,
  Award,
  Star,
  MessageSquare,
  BarChart2,
  Settings,
  HelpCircle,
} from 'lucide-react';

const AdminSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Store, label: 'Perfil da Empresa', path: '/admin/perfil' },
    { icon: Tag, label: 'Promoções', path: '/admin/promocoes' },
    { icon: Package, label: 'Produtos', path: '/admin/produtos' },
    { icon: Award, label: 'Programa Fidelidade', path: '/admin/fidelidade' },
    { icon: Star, label: 'Avaliações', path: '/admin/avaliacoes' },
    { icon: MessageSquare, label: 'Mensagens', path: '/admin/mensagens' },
    { icon: BarChart2, label: 'Relatórios', path: '/admin/relatorios' },
    { icon: Settings, label: 'Configurações', path: '/admin/configuracoes' },
    { icon: HelpCircle, label: 'Ajuda', path: '/admin/ajuda' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
      <nav className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#FA7413] text-white'
                    : 'text-gray-600 hover:bg-orange-50 hover:text-[#FA7413]'
                }`
              }
            >
              <item.icon size={20} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;