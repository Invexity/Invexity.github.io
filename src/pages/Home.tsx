import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ContactSection from '../components/ContactSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-cream-100 text-brown-900 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;