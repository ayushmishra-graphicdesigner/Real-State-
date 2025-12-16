import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import { Property } from '../types';

const featuredProperties: Property[] = [
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
    type: "Sale",
    featured: true
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
    type: "Sale",
    featured: true
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
    type: "Sale",
    featured: true
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
            <img 
                src="https://picsum.photos/1920/1080?random=10" 
                alt="Florida Luxury Real Estate" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900/90"></div>
        
        <div className="relative z-10 max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Find Your Dream Home in <span className="text-gold-500 italic">Florida</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Exclusive access to luxury residential listings and prime investment opportunities across Miami, Orlando, and Tampa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-8 rounded text-lg transition-transform transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </Link>
            <Link to="/properties" className="bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 text-white font-bold py-4 px-8 rounded text-lg transition-all">
              View Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-wider text-sm">Exclusive Listings</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Featured Properties</h2>
            </div>
            <Link to="/properties" className="hidden md:flex items-center text-navy-900 font-bold hover:text-gold-600 transition-colors">
              View All Properties <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/properties" className="inline-flex items-center text-navy-900 font-bold hover:text-gold-600 transition-colors">
              View All Properties <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Why Choose Real Estate of Florida?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine local market expertise with world-class service to deliver exceptional results for buyers, sellers, and investors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Local Expertise", desc: "Deep knowledge of Florida's most desirable neighborhoods." },
              { title: "Personalized Service", desc: "Tailored strategies to meet your unique real estate goals." },
              { title: "Global Reach", desc: "Connecting your property with buyers from around the world." },
              { title: "Proven Track Record", desc: "Millions in sales volume and hundreds of satisfied clients." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-100 text-navy-900 rounded-full mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Preview */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Locations</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">Explore Florida's Best Areas</h2>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        From the vibrant nightlife of Miami Beach to the family-friendly suburbs of Orlando and the Gulf Coast charm of Tampa, we have specialists in every major Florida market.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Miami & South Florida', 'Orlando & Central Florida', 'Tampa & Gulf Coast', 'Jacksonville & North Florida'].map((area) => (
                            <li key={area} className="flex items-center text-lg">
                                <span className="w-2 h-2 bg-gold-500 rounded-full mr-4"></span>
                                {area}
                            </li>
                        ))}
                    </ul>
                    <Link to="/areas" className="inline-block bg-white text-navy-900 font-bold py-3 px-8 rounded hover:bg-gold-500 transition-colors">
                        Explore Areas
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/400/500?random=20" alt="Miami" className="rounded-lg shadow-xl transform translate-y-8" />
                    <img src="https://picsum.photos/400/500?random=21" alt="Orlando" className="rounded-lg shadow-xl" />
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 text-center mb-16">Client Testimonials</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: "Sarah J.", role: "Home Buyer", text: "The team went above and beyond to find our perfect waterfront home in Miami. Professional, knowledgeable, and patient." },
               { name: "Michael R.", role: "Investor", text: "I've purchased three investment properties through them. Their market analysis is spot-on and returns have exceeded expectations." },
               { name: "The Davis Family", role: "Sellers", text: "Sold our home in Orlando in less than a week at full asking price. The marketing strategy was incredible." }
             ].map((t, idx) => (
               <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gold-500">
                 <div className="flex text-gold-500 mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                 <div>
                   <h4 className="font-bold text-navy-900">{t.name}</h4>
                   <span className="text-sm text-gray-500">{t.role}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;