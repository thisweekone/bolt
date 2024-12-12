import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import NavLink from './NavLink';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { href: '/empresas', label: 'Empresas' },
    { href: '/promocoes', label: 'Promoções' },
    { href: '#', label: 'Treinamentos' },
    { href: '#', label: 'Ferramentas' },
  ];

  const handleRegister = () => {
    navigate('/registro');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <NavLink 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.href);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="min-w-[100px]">
                Entrar
              </Button>
              <Button 
                className="min-w-[120px]"
                onClick={handleRegister}
              >
                Cadastre-se
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#FA7413] hover:bg-orange-50 transition duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2">
            <div className="px-2 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.href);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#FA7413] hover:bg-orange-50 rounded-md transition duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="space-y-3 pt-4">
                <Button variant="outline" fullWidth>
                  Entrar
                </Button>
                <Button 
                  fullWidth
                  onClick={() => {
                    handleRegister();
                    setIsOpen(false);
                  }}
                >
                  Cadastre-se
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;