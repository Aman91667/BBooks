import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import FeaturedBooks from './sections/FeaturedBooks';
import Categories from './sections/Categories';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <Categories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;