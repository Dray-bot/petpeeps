'use client';
import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Dog Adoption Fair',
    date: 'Aug 25, 2025',
    location: 'Central Park, NYC',
    image: 'https://images.squarespace-cdn.com/content/v1/66216573c860e87c8bbad689/1746137351340-KJB90XZTG9RKU6RK52T9/Offisite+double+wammy+%2825%29.png',
  },
  {
    title: 'Pet Vaccination Drive',
    date: 'Sep 5, 2025',
    location: 'Greenfield Vet Clinic',
    image: 'https://content.govdelivery.com/attachments/fancy_images/CAVICTORVILLE/2024/03/9190648/low-cost-vaccination-clinic-3_original.png',
  },
  {
    title: 'Pet Training Workshop',
    date: 'Sep 15, 2025',
    location: 'Downtown Pet Center',
    image: 'https://fusionpetretreat.com/wp-content/uploads/2025/07/PeytonGreen_crop-scaled.jpg',
  },
];

const EventsSection = () => {
  return (
    <section className="py-28 px-6 bg-gray-50 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Upcoming Pet Events
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transition-shadow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{event.date}</p>
              <p className="text-gray-500 text-sm">{event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
