import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      business: 'Café Aroma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      testimonial: 'O HubEmpreenda transformou meu negócio. As ferramentas de gestão e a visibilidade que ganhei foram essenciais para o crescimento da minha empresa.',
    },
    {
      id: 2,
      name: 'Carlos Santos',
      business: 'Tech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      testimonial: 'Os treinamentos e a rede de contatos que construí através da plataforma abriram portas incríveis para meu negócio.',
    },
    {
      id: 3,
      name: 'Mariana Costa',
      business: 'Eco Store',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      testimonial: 'A facilidade de gerenciar meu negócio e a possibilidade de fazer parcerias locais fizeram toda a diferença no meu empreendimento.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos empreendedores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;