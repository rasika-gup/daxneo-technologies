'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Palette, Code, TestTube, Upload } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals, requirements, and challenges.",
      icon: <Search className="w-6 h-6" />,
      delay: 0.1
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed roadmap and timeline for the project.",
      icon: <FileText className="w-6 h-6" />,
      delay: 0.2
    },
    {
      number: "03",
      title: "Design",
      description: "Crafting intuitive user experiences and visual designs.",
      icon: <Palette className="w-6 h-6" />,
      delay: 0.3
    },
    {
      number: "04",
      title: "Development",
      description: "Building the solution with clean, efficient code.",
      icon: <Code className="w-6 h-6" />,
      delay: 0.4
    },
    {
      number: "05",
      title: "Testing",
      description: "Ensuring quality, performance, and security standards.",
      icon: <TestTube className="w-6 h-6" />,
      delay: 0.5
    },
    {
      number: "06",
      title: "Deployment",
      description: "Launching the solution and providing ongoing support.",
      icon: <Upload className="w-6 h-6" />,
      delay: 0.6
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Process</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured approach to delivering exceptional results that exceed expectations.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-500">{step.number}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex justify-center my-4 md:my-0 md:mx-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center border-4 border-gray-900 z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;