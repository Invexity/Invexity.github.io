import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 hero-pattern bg-cream-50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 fade-in">
            <span className="inline-block text-pink-500 font-medium mb-2">Freshly Baked Everyday</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-900 mb-4 leading-tight">
              Delicious Treats Made With <span className="text-pink-500">Love</span>
            </h1>
            <p className="text-lg text-brown-700 mb-8 max-w-lg">
              Indulge in our handcrafted pastries, cakes, and breads made from scratch 
              using only the finest ingredients. A taste of happiness in every bite!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="large">
                Explore Our Menu
              </Button>
              <Button variant="secondary" size="large">
                Visit Us Today
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 slide-up">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Delicious pastries and cakes" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-2xl mb-2">Special Discount</p>
                  <p className="text-cream-50">15% off on birthday cakes this week!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#products" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brown-800 hover:text-pink-500 transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to discover</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;