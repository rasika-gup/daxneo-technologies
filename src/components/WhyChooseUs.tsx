'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Shield, Users, Wrench, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "AI-Driven Approach",
      description: "We leverage artificial intelligence to optimize processes and deliver smarter solutions.",
      icon: <Brain className="w-8 h-8" />,
      delay: 0.1
    },
    {
      title: "Agile & Scalable Systems",
      description: "Our solutions are built to grow with your business and adapt to changing requirements.",
      icon: <Clock className="w-8 h-8" />,
      delay: 0.2
    },
    {
      title: "Security First",
      description: "Enterprise-grade security measures implemented at every level of our solutions.",
      icon: <Shield className="w-8 h-8" />,
      delay: 0.3
    },
    {
      title: "Industry Expertise",
      description: "Our team brings deep domain knowledge across multiple industries and use cases.",
      icon: <Users className="w-8 h-8" />,
      delay: 0.4
    },
    {
      title: "End-to-End Solutions",
      description: "From conception to deployment and maintenance, we handle every aspect of your project.",
      icon: <Wrench className="w-8 h-8" />,
      delay: 0.5
    },
    {
      title: "Proven Track Record",
      description: "A portfolio of successful projects and satisfied clients across diverse industries.",
      icon: <CheckCircle className="w-8 h-8" />,
      delay: 0.6
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Choose Us</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine technical expertise with strategic thinking to deliver solutions that create lasting value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: reason.delay }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;