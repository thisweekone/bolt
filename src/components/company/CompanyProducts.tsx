import React from 'react';
import Button from '../Button';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const CompanyProducts = () => {
  // Mock data - In a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Café Especial',
      price: 29.90,
      description: 'Blend exclusivo de grãos selecionados',
      image: 'https://images.unsplash.com/photo-1587734195342-5fbf0d155862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Bebidas',
    },
    {
      id: 2,
      name: 'Croissant',
      price: 12.90,
      description: 'Croissant artesanal com manteiga francesa',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Padaria',
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Produtos</h2>
        <Button variant="outline">Ver Todos</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-md transition duration-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <span className="font-bold text-[#FA7413]">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{product.description}</p>
              <Button className="w-full mt-4">
                Comprar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyProducts;