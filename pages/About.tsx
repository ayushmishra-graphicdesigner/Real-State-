import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-navy-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">Dedicated to excellence in Florida Real Estate since 2010.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    At Real Estate of Florida, we believe that luxury is not just a price point, but an experience. Our mission is to provide unparalleled service to every client, whether they are buying their first home or managing a large investment portfolio.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    With deep roots in the Florida community, we understand the nuances of the local market. From the beaches of Miami to the theme parks of Orlando, we help you navigate the dynamic Florida real estate landscape with confidence.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-gray-50 rounded">
                        <Award className="mx-auto text-gold-500 mb-2" />
                        <span className="block font-bold text-navy-900">Top 1%</span>
                        <span className="text-xs text-gray-500">Sales Rank</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                        <Users className="mx-auto text-gold-500 mb-2" />
                        <span className="block font-bold text-navy-900">500+</span>
                        <span className="text-xs text-gray-500">Happy Clients</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded">
                        <TrendingUp className="mx-auto text-gold-500 mb-2" />
                        <span className="block font-bold text-navy-900">$250M+</span>
                        <span className="text-xs text-gray-500">Volume Sold</span>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 relative">
                <img src="https://picsum.photos/600/600?random=30" alt="Our Team" className="rounded-lg shadow-2xl w-full object-cover h-[500px]" />
                <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-6 rounded-lg shadow-lg hidden md:block">
                    <p className="font-serif font-bold text-2xl">15+ Years</p>
                    <p className="text-sm font-medium">of Experience</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;