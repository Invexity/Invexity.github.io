import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-pink-500 font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mt-2 mb-4">
            Visit Our Bakery
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Stop by to experience the aroma of freshly baked goods and take home your favorites.
            We'd love to see you in person!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200">
            {/* This would typically be a Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center bg-cream-100">
              <div className="text-center p-8">
                <MapPin size={48} className="mx-auto mb-4 text-pink-500" />
                <h3 className="text-xl font-bold text-brown-900 mb-2">Our Location</h3>
                <p className="text-brown-700">
                  123 Bakery Street, Sweetville, CA 12345
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-pink-500 hover:text-pink-600 font-medium"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-cream-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brown-900 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Address</h4>
                  <p className="text-brown-700">123 Bakery Street, Sweetville, CA 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Clock className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Opening Hours</h4>
                  <p className="text-brown-700">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="text-brown-700">Saturday - Sunday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Phone</h4>
                  <p className="text-brown-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="text-pink-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brown-900 mb-1">Email</h4>
                  <p className="text-brown-700">hello@3bunnies.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;