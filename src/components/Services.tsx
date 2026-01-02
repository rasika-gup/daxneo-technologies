'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Smartphone, Cloud, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and drive operational efficiency.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Intelligent systems that learn, adapt, and provide actionable insights to fuel your business growth.",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web & Mobile App Development",
      description: "Engaging, responsive applications for all platforms that deliver exceptional user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and streamlined deployment processes for optimal performance.",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into meaningful insights that drive strategic decision-making.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-red-500 to-rose-500"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business operations and stay competitive.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to accelerate your business growth and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;