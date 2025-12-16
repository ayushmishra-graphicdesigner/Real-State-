import React, { useState } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Areas We Serve', path: '/areas' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-gold-500" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none tracking-wide">REAL ESTATE</span>
              <span className="text-xs text-gold-500 uppercase tracking-widest">of Florida</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold-400 ${
                  isActive(link.path) ? 'text-gold-500 border-b-2 border-gold-500' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+13055550123"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={18} />
              (305) 555-0123
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-navy-900 text-gold-500'
                    : 'text-gray-300 hover:text-white hover:bg-navy-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+13055550123"
              className="block w-full text-center mt-4 bg-gold-500 text-navy-900 px-5 py-3 rounded-md font-bold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;