'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Cloud, 
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const TechnologyStack = () => {
  const techCategories = [
    {
      name: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Python", "Java", "Go", "C#", "PHP"]
    },
    {
      name: "AI/ML",
      icon: <Cpu className="w-6 h-6" />,
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "NLP", "Computer Vision"]
    },
    {
      name: "Cloud",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Serverless"]
    },
    {
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Neo4j"]
    },
    {
      name: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Flutter", "iOS", "Android", "PWA", "Ionic"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Technology Stack</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage the latest technologies to build robust, scalable, and future-ready solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-4 py-2 bg-gray-700/50 rounded-full text-cyan-400 text-sm font-medium border border-gray-600"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(8, 145, 178, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Scrolling Tech Logos */}
        <motion.div 
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative flex space-x-8 animate-scroll">
            <div className="flex space-x-8">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB'].map((tech, index) => (
                <div key={index} className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl border border-gray-700 flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-sm">{tech}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-8">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB'].map((tech, index) => (
                <div key={index} className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl border border-gray-700 flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default TechnologyStack;