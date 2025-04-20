import React from 'react';
import { Heart, Award, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream-50 hero-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5702370/pexels-photo-5702370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="3Bunnies bakery owners"
                className="rounded-lg shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-brown-900 font-bold">Established in</p>
                <p className="text-pink-500 text-3xl font-bold">2010</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span className="text-pink-500 font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mt-2 mb-6">
              Baking Happiness Since 2010
            </h2>
            <p className="text-brown-700 mb-6 leading-relaxed">
              3Bunnies started as a small home kitchen with a passion for creating delicious treats. Founded by the Williams sisters - Emily, Sarah, and Jessica (our three bunnies) - we've grown into a beloved local bakery while maintaining our commitment to quality and craftsmanship.
            </p>
            <p className="text-brown-700 mb-8 leading-relaxed">
              Our philosophy is simple: use the finest ingredients, bake with love, and create moments of joy with every bite. From our family to yours, we're proud to be part of your celebrations, morning routines, and everyday indulgences.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:translate-y-[-8px]">
                <Heart className="text-pink-500 mb-3" size={28} />
                <h3 className="font-bold text-brown-900 mb-2">Made with Love</h3>
                <p className="text-brown-700 text-sm">Passion and care in every recipe we create.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:translate-y-[-8px]">
                <Award className="text-pink-500 mb-3" size={28} />
                <h3 className="font-bold text-brown-900 mb-2">Quality First</h3>
                <p className="text-brown-700 text-sm">Premium ingredients for exceptional taste.</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:translate-y-[-8px]">
                <Leaf className="text-pink-500 mb-3" size={28} />
                <h3 className="font-bold text-brown-900 mb-2">Fresh Daily</h3>
                <p className="text-brown-700 text-sm">Baked fresh every morning, never yesterday's goods.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;