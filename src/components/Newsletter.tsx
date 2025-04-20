import React, { useState } from 'react';
import Button from './ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, this would connect to a backend service
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-pink-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Sweet Community
          </h2>
          <p className="mb-8 text-pink-100">
            Subscribe to our newsletter for exclusive offers, new product announcements, 
            seasonal specials, and baking tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-600"
                required
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </div>
            
            {isSubmitted && (
              <p className="mt-4 text-white bg-pink-600 py-2 px-4 rounded-md fade-in">
                Thank you for subscribing!
              </p>
            )}
            
            <p className="mt-4 text-sm text-pink-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;