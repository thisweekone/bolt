import React, { useState } from 'react';
import { MessageSquare, Search, Filter } from 'lucide-react';
import Button from '../../components/Button';

const AdminMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  // Mock data - In a real app, this would come from an API
  const conversations = [
    {
      id: 1,
      user: {
        name: 'Maria Silva',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      },
      lastMessage: 'Olá! Gostaria de saber mais sobre a promoção de cafés.',
      timestamp: '2024-03-20T14:30:00',
      unread: true,
    },
    {
      id: 2,
      user: {
        name: 'João Santos',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      },
      lastMessage: 'Obrigado pelo excelente atendimento!',
      timestamp: '2024-03-19T16:45:00',
      unread: false,
    },
  ];

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: 'user',
      content: 'Olá! Gostaria de saber mais sobre a promoção de cafés.',
      timestamp: '2024-03-20T14:30:00',
    },
    {
      id: 2,
      conversationId: 1,
      sender: 'business',
      content: 'Olá Maria! Claro, temos uma promoção especial de 50% de desconto em todos os cafés artesanais após as 17h.',
      timestamp: '2024-03-20T14:35:00',
    },
  ];

  return (
    <div className="h-[calc(100vh-6rem)]">
      <div className="flex h-full">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Mensagens</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
              />
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                  selectedConversation === conversation.id ? 'bg-orange-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={conversation.user.avatar}
                    alt={conversation.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {conversation.user.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {new Date(conversation.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="w-2 h-2 bg-[#FA7413] rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-gray-50 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-white border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <img
                    src={conversations.find(c => c.id === selectedConversation)?.user.avatar}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {conversations.find(c => c.id === selectedConversation)?.user.name}
                    </h2>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages
                    .filter(m => m.conversationId === selectedConversation)
                    .map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === 'business' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === 'business'
                              ? 'bg-[#FA7413] text-white'
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          <p>{message.content}</p>
                          <span className="text-xs opacity-75 mt-1 block">
                            {new Date(message.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FA7413] focus:border-[#FA7413]"
                  />
                  <Button>Enviar</Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                <p>Selecione uma conversa para começar</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;