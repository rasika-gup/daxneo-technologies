'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Daxneo</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're a team of passionate technologists dedicated to creating innovative solutions that drive business transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Pioneering the Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">AI-Driven</span> Innovation
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              At Daxneo Technologies, we believe in the power of technology to transform businesses and create sustainable competitive advantages. Our team combines deep technical expertise with strategic thinking to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business value, we've grown into a trusted partner for enterprises seeking digital transformation. Our approach centers on understanding your unique challenges and crafting tailored solutions that drive measurable results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h4 className="text-2xl font-bold text-cyan-400 mb-2">Vision</h4>
                <p className="text-gray-300">
                  To be the catalyst for digital innovation, empowering businesses to thrive in an AI-driven world.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h4 className="text-2xl font-bold text-cyan-400 mb-2">Mission</h4>
                <p className="text-gray-300">
                  To deliver cutting-edge technology solutions that transform businesses and create lasting value.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <div className="text-5xl font-bold text-cyan-400 mb-2">250+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <div className="text-5xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">Clients Served</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <div className="text-5xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-gray-300">Technologies Used</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <div className="text-5xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300">Years of Expertise</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;