import React from 'react';
import { Book, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl font-serif font-bold">Novella</span>
            </div>
            <p className="text-indigo-200 mb-6">
              Discover worlds between pages. Your premier destination for quality books with worldwide shipping.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#featured" className="text-indigo-200 hover:text-white transition-colors">Featured Books</a></li>
              <li><a href="#categories" className="text-indigo-200 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#testimonials" className="text-indigo-200 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-indigo-300" />
                <span className="text-indigo-200">support@novella.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-indigo-300" />
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-serif text-sm font-bold mb-2">We Accept</h4>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-100 rounded"></div>
                <div className="w-10 h-6 bg-gray-100 rounded"></div>
                <div className="w-10 h-6 bg-gray-100 rounded"></div>
                <div className="w-10 h-6 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-900 mt-12 pt-6">
          <p className="text-center text-indigo-300 text-sm">
            © {new Date().getFullYear()} Novella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;