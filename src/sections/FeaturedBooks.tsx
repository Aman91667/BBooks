import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { books } from '../data/books';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = ['All', 'Fiction', 'Non-Fiction', 'Mystery', 'Fantasy', 'Romance'];

const FeaturedBooks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredBooks = activeCategory === 'All' 
    ? books 
    : books.filter(book => book.category === activeCategory);

  const booksPerPage = 4;
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const displayedBooks = filteredBooks.slice(
    currentPage * booksPerPage, 
    (currentPage + 1) * booksPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="featured" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of the most captivating reads. From bestsellers to hidden gems, 
            find your next literary adventure.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {categories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium mb-2 
                ${activeCategory === category
                  ? 'bg-indigo-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(0);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedBooks.map(book => (
            <BookCard key={book.id} book={book} featured={true} />
          ))}
        </div>
        
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={prevPage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <span className="text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button 
            onClick={nextPage}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;