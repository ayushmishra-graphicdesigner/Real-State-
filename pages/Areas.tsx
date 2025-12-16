import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    name: "Miami & Miami Beach",
    desc: "Experience the vibrant culture, stunning beaches, and world-class nightlife. Known for Art Deco architecture and luxury condos.",
    img: "https://picsum.photos/600/400?random=40"
  },
  {
    name: "Orlando & Central FL",
    desc: "The heart of Florida tourism and a growing tech hub. Offers diverse neighborhoods from historic downtown to resort-style living.",
    img: "https://picsum.photos/600/400?random=41"
  },
  {
    name: "Tampa Bay",
    desc: "A perfect blend of city life and coastal relaxation. Booming job market, historic Ybor City, and beautiful Gulf beaches.",
    img: "https://picsum.photos/600/400?random=42"
  },
  {
    name: "Fort Lauderdale",
    desc: "Known as the 'Venice of America' for its expansive canal system. A boater's paradise with upscale shopping and dining.",
    img: "https://picsum.photos/600/400?random=43"
  }
];

const Areas: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-navy-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Areas We Serve</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Discover the diverse lifestyles and communities across Florida.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {areas.map((area, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative">
                        <img src={area.img} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 flex items-center">
                            <MapPin className="text-gold-500 mr-2" /> {area.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
                        <button className="text-gold-600 font-bold uppercase tracking-wide text-sm hover:text-navy-900 transition-colors">
                            View {area.name} Listings &rarr;
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;