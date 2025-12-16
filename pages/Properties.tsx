import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';

const allProperties: Property[] = [
  {
    id: 1,
    title: "Waterfront Modern Villa",
    price: "$2,450,000",
    address: "123 Ocean Drive",
    city: "Miami Beach",
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: "https://picsum.photos/800/600?random=1",
    type: "Sale"
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    price: "$1,850,000",
    address: "450 Brickell Ave",
    city: "Miami",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "https://picsum.photos/800/600?random=2",
    type: "Sale"
  },
  {
    id: 3,
    title: "Orlando Golf Estate",
    price: "$980,000",
    address: "789 Fairway Lane",
    city: "Orlando",
    beds: 4,
    baths: 3.5,
    sqft: 3500,
    image: "https://picsum.photos/800/600?random=3",
    type: "Sale"
  },
  {
    id: 4,
    title: "Tampa Bay Bungalow",
    price: "$650,000",
    address: "321 Bay St",
    city: "Tampa",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://picsum.photos/800/600?random=4",
    type: "Sale"
  },
  {
    id: 5,
    title: "Coral Gables Historic Home",
    price: "$3,200,000",
    address: "567 Coral Way",
    city: "Miami",
    beds: 6,
    baths: 5,
    sqft: 5200,
    image: "https://picsum.photos/800/600?random=5",
    type: "Sale"
  },
  {
    id: 6,
    title: "Luxury Condo with View",
    price: "$5,500 / month",
    address: "88 Biscayne Blvd",
    city: "Miami",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "https://picsum.photos/800/600?random=6",
    type: "Rent"
  }
];

const Properties: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">Available Properties</h1>
          <p className="text-gray-600">Explore our curated selection of Florida's finest real estate.</p>
        </div>

        {/* Filters (Mock) */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
                <select className="border-gray-300 border rounded-md px-4 py-2 text-sm focus:border-navy-900 focus:ring-1 focus:ring-navy-900">
                    <option>All Cities</option>
                    <option>Miami</option>
                    <option>Orlando</option>
                    <option>Tampa</option>
                </select>
                <select className="border-gray-300 border rounded-md px-4 py-2 text-sm focus:border-navy-900 focus:ring-1 focus:ring-navy-900">
                    <option>Price Range</option>
                    <option>$500k - $1M</option>
                    <option>$1M - $3M</option>
                    <option>$3M+</option>
                </select>
                <select className="border-gray-300 border rounded-md px-4 py-2 text-sm focus:border-navy-900 focus:ring-1 focus:ring-navy-900">
                    <option>Type</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                </select>
            </div>
            <span className="text-gray-500 text-sm">{allProperties.length} Properties Found</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProperties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;