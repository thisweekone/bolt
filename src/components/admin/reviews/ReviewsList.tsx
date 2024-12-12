import React, { useState } from 'react';
import { Star, MoreVertical, ThumbsUp, MessageCircle } from 'lucide-react';
import Button from '../../Button';

const ReviewsList = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      author: 'Maria Silva',
      rating: 5,
      date: '2024-03-20',
      comment: 'Excelente atendimento e produtos de alta qualidade. O café é simplesmente delicioso!',
      response: null,
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 2,
      author: 'João Santos',
      rating: 4,
      date: '2024-03-18',
      comment: 'Ótimo ambiente para trabalhar e tomar um café. O Wi-Fi é rápido e estável.',
      response: 'Obrigado pelo feedback, João! Ficamos felizes em saber que você aproveitou nosso espaço.',
      status: 'responded',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      responded: 'bg-green-100 text-green-800',
      flagged: 'bg-red-100 text-red-800',
    }[status] || 'bg-gray-100 text-gray-800';

    const labels = {
      pending: 'Pendente',
      responded: 'Respondido',
      flagged: 'Sinalizado',
    }[status] || status;

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
        {labels}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Filters */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'all'
                ? 'bg-orange-50 text-[#FA7413]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setSelectedFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'pending'
                ? 'bg-orange-50 text-[#FA7413]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setSelectedFilter('responded')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'responded'
                ? 'bg-orange-50 text-[#FA7413]'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Respondidas
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-gray-100">
        {reviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                    {getStatusBadge(review.status)}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                  
                  {review.response && (
                    <div className="mt-4 pl-4 border-l-2 border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Sua resposta:</span> {review.response}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {!review.response && (
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    Responder
                  </Button>
                )}
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;