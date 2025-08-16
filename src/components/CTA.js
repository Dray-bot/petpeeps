'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-20 px-6 bg-[#f0faff] text-center overflow-hidden">
      {/* Subtle floating blobs */}
      <motion.div
        className="absolute top-0 left-0 w-36 h-36 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 20, -10, 0], y: [0, -30, 10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ x: [0, -20, 10, 0], y: [0, 30, -10, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-black"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join PetPeeps Today
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-gray-700 mb-10 text-base md:text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Track your pets, manage appointments, and connect with trusted vets and pet services—all in one place.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-7 rounded-2xl shadow hover:shadow-md transition-all"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.button>
        <motion.button
          className="bg-white hover:bg-gray-100 border border-sky-500 text-sky-500 font-semibold py-3 px-7 rounded-2xl shadow hover:shadow-sm transition-all"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
