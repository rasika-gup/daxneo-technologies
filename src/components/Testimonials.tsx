'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  userName: string;
  userRole: string | null;
  company: string | null;
  content: string;
  rating: number;
  createdAt: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Fallback to empty array
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);

  // Fallback content when no reviews are available
  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Clients Say</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Loading testimonials...
            </motion.p>
          </div>
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-400">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }
  
  if (reviews.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Clients Say</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be one of our first clients to leave a review.
            </motion.p>
          </div>
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-400 text-center max-w-lg">
              There are no reviews yet. Be the first to share your experience with Daxneo Technologies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const clients = [
    "TechInnovate", "StartUpX", "GlobalCorp", "EnterprisePro", 
    "InnovateLab", "DigitalFirst", "FutureTech", "CloudSolutions"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Clients Say</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take our word for it. Hear from industry leaders who have transformed their businesses with our solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <Quote className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{review.userName}</h4>
                  <p className="text-gray-400">{review.userRole || 'Client'}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-12">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;