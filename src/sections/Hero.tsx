import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-0 lg:pt-0 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 z-0"></div>
      <div className="absolute inset-0 bg-grid-indigo-100/50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24 lg:py-32">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h4 className="text-indigo-600 font-medium mb-2 tracking-wide">WELCOME TO NOVELLA</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Explore our curated collection of bestsellers, classics, and hidden gems. 
              Find the perfect story that speaks to your soul.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border border-indigo-900 text-indigo-900 hover:bg-indigo-50 font-medium py-3 px-6 rounded-md transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" 
                  alt="Satisfied Customers" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Satisfied Customers" 
                  className="w-12 h-12 rounded-full object-cover -ml-4 border-2 border-white"
                />
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Satisfied Customers" 
                  className="w-12 h-12 rounded-full object-cover -ml-4 border-2 border-white"
                />
              </div>
              <div>
                <p className="text-gray-700 font-medium">30k+ Happy Readers</p>
                <div className="flex items-center text-yellow-500">
                  ★★★★★ <span className="text-gray-600 ml-1">5.0 (3.5k+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-indigo-300 rounded-full opacity-50"></div>
            
            {/* Featured book mockup */}
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg" 
                alt="Featured Book" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 transform -rotate-3 w-40">
                <p className="text-indigo-900 font-bold mb-1">The Midnight Library</p>
                <p className="text-sm text-gray-600 mb-2">Matt Haig</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-indigo-900">$19.99</p>
                  <p className="text-xs text-indigo-600 font-medium">Best Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,213.3C672,213,768,203,864,202.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;