import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">REAL ESTATE <span className="text-gold-500">of FL</span></h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in Florida real estate. Whether you're buying a luxury home, selling a property, or investing, we provide expert guidance every step of the way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/properties" className="text-gray-400 hover:text-gold-500 transition-colors">Search Properties</Link></li>
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Areas We Serve</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-gold-500 transition-colors">New Listings</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Top Locations</h4>
            <ul className="space-y-3">
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Miami Beach</Link></li>
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Downtown Orlando</Link></li>
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Tampa Bay</Link></li>
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Fort Lauderdale</Link></li>
              <li><Link to="/areas" className="text-gray-400 hover:text-gold-500 transition-colors">Naples</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">100 Biscayne Blvd, Suite 1200<br />Miami, FL 33132</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">(305) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">hello@realestatefl.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Real Estate of Florida. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;