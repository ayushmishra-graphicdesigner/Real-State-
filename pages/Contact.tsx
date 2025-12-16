import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-navy-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">We're here to help you make your next move.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
                <div className="flex items-start">
                    <div className="bg-navy-50 p-3 rounded-full mr-4">
                        <Phone className="text-navy-900" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Phone</h4>
                        <p className="text-gray-600 mb-1">Mon-Fri from 9am to 6pm.</p>
                        <a href="tel:+13055550123" className="text-gold-600 font-bold hover:underline">(305) 555-0123</a>
                    </div>
                </div>
                
                <div className="flex items-start">
                    <div className="bg-navy-50 p-3 rounded-full mr-4">
                        <Mail className="text-navy-900" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Email</h4>
                        <p className="text-gray-600 mb-1">Our team will respond within 24 hours.</p>
                        <a href="mailto:hello@realestatefl.com" className="text-gold-600 font-bold hover:underline">hello@realestatefl.com</a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-navy-50 p-3 rounded-full mr-4">
                        <MapPin className="text-navy-900" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Office</h4>
                        <p className="text-gray-600">
                            100 Biscayne Blvd, Suite 1200<br/>
                            Miami, FL 33132
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-navy-50 p-3 rounded-full mr-4">
                        <Clock className="text-navy-900" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                        <p className="text-gray-600">Saturday: 10am - 4pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500 font-medium flex items-center"><MapPin className="mr-2"/> Google Maps Integration</span>
                </div>
                {/* 
                  Note: In a real production app with an API Key, you would use:
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Miami,FL`} 
                    allowFullScreen 
                  />
                */}
            </div>
          </div>

          {/* Form Column */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;