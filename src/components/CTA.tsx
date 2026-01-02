'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Build the Future</span> Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Our experts are here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 rounded-full bg-gray-800 text-white font-semibold flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;