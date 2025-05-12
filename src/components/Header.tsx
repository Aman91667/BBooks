import React, { useState, useEffect } from 'react';
import { Book, Menu, ShoppingCart, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Book className="h-8 w-8 text-indigo-900" />
            <span className="ml-2 text-xl font-serif font-bold text-indigo-900">Novella</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors">Home</a>
            <a href="#featured" className="text-gray-700 hover:text-indigo-900 transition-colors">Featured</a>
            <a href="#categories" className="text-gray-700 hover:text-indigo-900 transition-colors">Categories</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-900 transition-colors">Reviews</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-900 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="hidden md:block bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <a 
              href="#" 
              className="text-gray-700 hover:text-indigo-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#featured" 
              className="text-gray-700 hover:text-indigo-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Featured
            </a>
            <a 
              href="#categories" 
              className="text-gray-700 hover:text-indigo-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-indigo-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;