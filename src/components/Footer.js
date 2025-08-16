'use client';
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-sky-500 to-sky-600 text-white py-12 px-6 overflow-hidden">
      
      {/* Background floating shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-24 h-24 bg-white/10 rounded-full filter blur-2xl"
        animate={{ x: [0, 15, -10, 0], y: [0, -5, 5, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-36 h-36 bg-white/10 rounded-full filter blur-2xl"
        animate={{ x: [0, -15, 10, 0], y: [0, 5, -5, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Logo & Description */}
        <motion.div 
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2">
            PetPeeps <PawPrint size={24} />
          </h1>
          <p className="text-gray-100 max-w-xs leading-relaxed text-sm">
            Track pets, connect with vets, and manage appointments effortlessly.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-8 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-bold mb-1">Company</h3>
            <a href="#" className="hover:text-gray-200 transition-colors">About</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Careers</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Blog</a>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold mb-1">Support</h3>
            <a href="#" className="hover:text-gray-200 transition-colors">Help Center</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex flex-col gap-2 text-sm"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-bold mb-1">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-200 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><Instagram size={20} /></a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="mt-8 text-center text-gray-100 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} PetPeeps. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
