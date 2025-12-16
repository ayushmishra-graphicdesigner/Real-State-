import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Buying'
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'Buying'
      });
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-gold-500">
      <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Get in Touch</h3>
      <p className="text-gray-600 mb-6">Schedule a free consultation with our experts.</p>
      
      {status === 'success' ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200">
          <p className="font-bold">Message Sent!</p>
          <p>Thank you for reaching out. A real estate agent will contact you shortly.</p>
          <button onClick={() => setStatus('idle')} className="mt-4 text-green-700 underline text-sm">Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I am interested in</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
            >
              <option value="Buying">Buying a Property</option>
              <option value="Selling">Selling my Property</option>
              <option value="Investing">Real Estate Investment</option>
              <option value="Other">General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="Tell us about your property needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-navy-900 text-white font-bold py-3 rounded-md hover:bg-navy-800 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;