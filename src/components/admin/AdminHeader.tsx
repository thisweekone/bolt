import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          Painel Administrativo
        </h1>
        
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-[#FA7413] transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          
          {/* Messages */}
          <button className="relative p-2 text-gray-600 hover:text-[#FA7413] transition-colors">
            <MessageSquare size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          
          {/* User Menu */}
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-800">João Silva</p>
              <p className="text-gray-500">Café Aroma</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;