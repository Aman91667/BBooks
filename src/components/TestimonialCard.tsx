import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;