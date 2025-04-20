import React from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Carrot Walnut Cake',
    description: 'Moist carrot cake with cream cheese frosting and candied walnuts',
    price: 28.99,
    image: 'https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cakes',
  },
  {
    id: 2,
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky croissant filled with premium dark chocolate',
    price: 3.99,
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastries',
  },
  {
    id: 3,
    name: 'Raspberry Tart',
    description: 'Shortcrust pastry filled with vanilla custard and fresh raspberries',
    price: 5.49,
    image: 'https://images.pexels.com/photos/261429/pexels-photo-261429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pastries',
  },
  {
    id: 4,
    name: 'Sourdough Bread',
    description: 'Artisanal sourdough with a crispy crust and soft interior',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1387064/pexels-photo-1387064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'bread',
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={20} className="text-pink-500" />
            <span className="text-pink-500 font-medium">Our Specialties</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Featured Delights
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Discover our most loved treats, each crafted with premium ingredients 
            and baked fresh daily for that perfect bite of happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors"
          >
            View All Products
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;