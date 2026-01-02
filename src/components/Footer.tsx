'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    "Custom Software Development",
    "AI & Machine Learning",
    "Web & Mobile Apps",
    "Cloud Solutions",
    "Data Analytics",
    "Digital Transformation"
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                Daxneo Technologies
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Leading provider of AI solutions, software development, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:bg-cyan-100 transition-colors duration-300">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:bg-cyan-100 transition-colors duration-300">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:bg-cyan-100 transition-colors duration-300">
                <Github size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:bg-cyan-100 transition-colors duration-300">
                <Facebook size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 flex items-center group"
                  >
                    {service}
                    <ArrowUpRight className="ml-1 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600">vkant@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600">Agra, Uttar Pradesh, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Daxneo Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;