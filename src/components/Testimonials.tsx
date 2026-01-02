'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rasika Gupta",
      position: "CTO, TechInnovate",
      company: "TechInnovate",
      content: "Daxneo transformed our digital infrastructure with their AI solutions. The team's expertise and commitment to excellence delivered results beyond our expectations.",
      rating: 5,
      delay: 0.1
    },
    {
      id: 2,
      name: "Aayush Kant",
      position: "CEO, StartUpX",
      company: "StartUpX",
      content: "Working with Daxneo was a game-changer for our startup. Their custom software development approach helped us scale rapidly while maintaining quality.",
      rating: 5,
      delay: 0.2
    },
    {
      id: 3,
      name: "Neeru Gupta",
      position: "Product Director, GlobalCorp",
      company: "GlobalCorp",
      content: "The digital transformation project executed by Daxneo has significantly improved our operational efficiency. Their team is professional, responsive, and technically proficient.",
      rating: 5,
      delay: 0.3
    }
  ];

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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <Quote className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
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