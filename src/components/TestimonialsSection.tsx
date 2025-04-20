import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'The carrot cake from 3Bunnies is absolutely divine! I ordered it for my daughter\'s birthday and everyone was asking where I got it. This is now our go-to bakery for all celebrations!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Local Business Owner',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'We order pastries for our cafe exclusively from 3Bunnies. The quality is consistently excellent and our customers rave about them. Professional service and delicious products!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Food Blogger',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As someone who tries bakeries all over the city, I can confidently say that 3Bunnies offers some of the most delightful and authentic pastries around. Their sourdough bread is a must-try!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brown-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-pink-400 font-medium">Happy Customers</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What People Say About Us
          </h2>
          <p className="text-cream-200 max-w-2xl mx-auto">
            Don't just take our word for it – here's what our valued customers have to say about their 3Bunnies experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-brown-800 rounded-lg p-8 fade-in">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="flex mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-cream-300 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevTestimonial}
                className="bg-brown-800 hover:bg-brown-700 transition-colors p-3 rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-500' : 'bg-brown-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="bg-brown-800 hover:bg-brown-700 transition-colors p-3 rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;