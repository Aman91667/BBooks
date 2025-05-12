import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect read from our extensive collection organized by genre. 
            Whether you're a fan of thrilling mysteries or heartwarming romances, we have something for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-md transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;