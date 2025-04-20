import React from 'react';
import { Cake, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-cream-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cake size={24} className="text-pink-400" />
              <span className="text-xl font-bold text-white font-['Playfair_Display']">
                3Bunnies
              </span>
            </div>
            <p className="mb-6">
              Handcrafted pastries, cakes, and breads made with love and premium ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-pink-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Products</h3>
            <ul className="space-y-3">
              {['Cakes', 'Pastries', 'Bread', 'Cookies', 'Seasonal Specials'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>123 Bakery Street, Sweetville, CA 12345</li>
              <li>(555) 123-4567</li>
              <li>hello@3bunnies.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 3Bunnies Bakery. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;