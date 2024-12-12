import React from 'react';
import { Star } from 'lucide-react';
import Button from '../Button';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

const CompanyReviews = () => {
  // Mock data - In a real app, this would come from an API
  const reviews: Review[] = [
    {
      id: 1,
      author: 'Maria Silva',
      rating: 5,
      date: '2024-03-15',
      comment: 'Excelente atendimento e produtos de alta qualidade. O café é simplesmente delicioso!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      id: 2,
      author: 'João Santos',
      rating: 4,
      date: '2024-03-10',
      comment: 'Ótimo ambiente para trabalhar e tomar um café. O Wi-Fi é rápido e estável.',
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

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Avaliações</h2>
        <Button variant="outline">Ver Todas</Button>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{review.author}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button>
          Avaliar Empresa
        </Button>
      </div>
    </section>
  );
};

export default CompanyReviews;