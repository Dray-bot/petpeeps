'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerLogos = [
  'https://logos-world.net/wp-content/uploads/2020/09/Nestle-Logo-2015-present.jpg',
  'https://logospng.org/wp-content/uploads/mars-incorporated.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_qFcOVlTbAiqb5buyga8dhjiTLjH4neNUQ&s',
  'https://cdn.phenompeople.com/CareerConnectResources/BVOBLUUS/social/1200x630-1681982843385.jpg',
  'https://cdn.prod.website-files.com/6786af5bf302623fca248d08/6786af5bf302623fca248f53_airvet-logo.png',
  'https://petdesk.com/wp-content/uploads/2023/08/PetDesk_Logo-Resource-Pack_Download-Image-1b.png',
];

const PartnersSection = () => {
  return (
    <section className="py-28 px-6 bg-gray-50 text-center overflow-hidden relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-black">
        Trusted By Leading Pet Services
      </h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {partnerLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transition-shadow"
            >
              <Image
                src={logo}
                alt={`Partner ${idx + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
