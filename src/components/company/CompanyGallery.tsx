import React from 'react';
import Button from '../Button';

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

const CompanyGallery = () => {
  // Mock data - In a real app, this would come from an API
  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80',
      caption: 'Ambiente interno',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      caption: 'Nossos produtos',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      caption: 'Área externa',
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Galeria</h2>
        <Button variant="outline">Ver Todas</Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-48 object-cover transition duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
              <p className="text-white text-center px-4">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGallery;