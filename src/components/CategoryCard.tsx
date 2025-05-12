import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg h-40 sm:h-52 md:h-64">
      <img 
        src={category.image} 
        alt={category.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
        <div className="p-4 sm:p-6 w-full text-white">
          <h3 className="font-serif font-bold text-xl sm:text-2xl mb-1">{category.name}</h3>
          <p className="text-sm text-gray-200 mb-3">{category.bookCount} Books</p>
          <button className="text-white bg-indigo-900/80 hover:bg-indigo-900 transition-colors py-1.5 px-4 rounded text-sm">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;