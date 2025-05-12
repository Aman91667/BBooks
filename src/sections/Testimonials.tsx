import React, { useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Calculate visible testimonials based on current index
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied readers who have discovered their next favorite book with us.
            Here's what they have to say about their experience.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="md:transform transition-all duration-500"
                style={{
                  opacity: index === 1 ? 1 : 0.8,
                  scale: index === 1 ? 1 : 0.95
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors mr-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors ml-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;