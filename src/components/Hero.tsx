'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                  Engineering Intelligent
                </span>
                <br />
                <span className="text-gray-900">Digital Futures</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                We transform ideas into powerful digital solutions, leveraging AI and cutting-edge technology to drive innovation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 rounded-full bg-gray-800 text-white font-semibold flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                >
                  <PlayCircle className="mr-2" size={20} />
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Hero Image/Graphic */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-cyan-400/30"></div>
                  <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-blue-400/30"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto flex items-center justify-center mb-4">
                        <span className="text-white text-2xl font-bold">AI</span>
                      </div>
                      <p className="text-white font-semibold text-lg">Innovation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-cyan-400 text-2xl">⚙️</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-cyan-400 text-xl">🚀</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-10 w-16 h-16 rounded-lg bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center"
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-cyan-400 text-lg">💡</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-cyan-400 flex justify-center p-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;