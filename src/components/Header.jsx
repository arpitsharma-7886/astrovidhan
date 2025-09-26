import { useState } from 'react';
import { Menu, X, Star, Phone, MessageCircle, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Star className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold text-gray-900">AstroVidhan</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#astrologers" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Astrologers
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#horoscope" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Horoscope
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Talk to Astrologer
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
              <User className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</a>
              <a href="#astrologers" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Astrologers</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Services</a>
              <a href="#horoscope" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Horoscope</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</a>
              <div className="pt-4 space-y-2">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Talk to Astrologer
                </button>
                <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;