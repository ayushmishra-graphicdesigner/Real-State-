import React from 'react';
import { Bed, Bath, Ruler, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-navy-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
          {property.type}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-gray-600 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
           <p className="text-white font-bold text-xl">{property.price}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 mb-2 truncate group-hover:text-gold-600 transition-colors">{property.title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1 text-gold-500" />
          <span className="text-sm truncate">{property.address}, {property.city}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4 mb-4">
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center font-bold text-navy-900"><Bed size={16} className="mr-1 text-gray-400" /> {property.beds}</span>
            <span className="text-xs text-gray-500">Beds</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-r border-gray-100">
            <span className="flex items-center font-bold text-navy-900"><Bath size={16} className="mr-1 text-gray-400" /> {property.baths}</span>
            <span className="text-xs text-gray-500">Baths</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center font-bold text-navy-900"><Ruler size={16} className="mr-1 text-gray-400" /> {property.sqft}</span>
            <span className="text-xs text-gray-500">Sq Ft</span>
          </div>
        </div>
        
        <Link to="/contact" className="block w-full text-center py-3 border border-navy-900 text-navy-900 font-medium rounded hover:bg-navy-900 hover:text-white transition-colors uppercase text-sm tracking-wide">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;