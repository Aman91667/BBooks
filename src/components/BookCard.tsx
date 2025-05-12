import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, featured = false }) => {
  return (
    <div 
      className={`group relative bg-white rounded-lg overflow-hidden transition-all duration-300 ${
        featured 
          ? 'shadow-xl hover:shadow-2xl transform hover:-translate-y-2' 
          : 'shadow-md hover:shadow-lg'
      }`}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <button className="w-full bg-white text-indigo-900 py-2 rounded-md flex items-center justify-center font-medium">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < book.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">({book.reviewCount})</span>
        </div>
        <h3 className="font-serif font-bold text-gray-900 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-indigo-900">${book.price.toFixed(2)}</p>
          {book.originalPrice && (
            <p className="text-sm text-gray-500 line-through">${book.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;