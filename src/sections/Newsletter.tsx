import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real application, you would handle the subscription here
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-indigo-300" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-indigo-200 mb-8">
            Stay updated with our latest releases, exclusive offers, 
            and literary events. Get 10% off your first order when you subscribe.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow py-3 px-4 mb-3 sm:mb-0 sm:mr-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 flex items-center justify-center text-indigo-300">
              <Check className="w-5 h-5 mr-2" />
              <span>Thanks for subscribing!</span>
            </div>
          )}
          
          <p className="text-xs text-indigo-300 mt-4">
            By subscribing, you agree to receive marketing emails from us. 
            Don't worry, we respect your privacy and you can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;