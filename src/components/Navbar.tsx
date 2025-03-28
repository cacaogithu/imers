
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">
              <span className="gradient-text">Workshop de IA</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#sobre" className="text-gray-300 hover:text-purple-400 font-medium">Sobre</a>
              <a href="#palestrantes" className="text-gray-300 hover:text-purple-400 font-medium">Palestrantes</a>
              <a href="#detalhes" className="text-gray-300 hover:text-purple-400 font-medium">Detalhes</a>
              <a href="#faq" className="text-gray-300 hover:text-purple-400 font-medium">FAQ</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6">
              Inscrever-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-gray-800 mt-3 py-4 px-4 space-y-4">
          <a href="#sobre" className="block py-2 text-gray-300 hover:text-purple-400 font-medium">Sobre</a>
          <a href="#palestrantes" className="block py-2 text-gray-300 hover:text-purple-400 font-medium">Palestrantes</a>
          <a href="#detalhes" className="block py-2 text-gray-300 hover:text-purple-400 font-medium">Detalhes</a>
          <a href="#faq" className="block py-2 text-gray-300 hover:text-purple-400 font-medium">FAQ</a>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-6">
            Inscrever-se
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
