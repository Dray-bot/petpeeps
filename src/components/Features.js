'use client';

import { motion } from "framer-motion";
import { PawPrint, Heart, CalendarCheck, Users, Gift } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Track Your Pets",
      desc: "Keep an eye on your furry friends' health, feeding, and activities with ease.",
      icon: <PawPrint size={28} className="text-blue-500" />,
    },
    {
      title: "Care Reminders",
      desc: "Never forget vet visits, vaccinations, or medication schedules.",
      icon: <CalendarCheck size={28} className="text-green-500" />,
    },
    {
      title: "Connect with Owners",
      desc: "Share stories, tips, and fun moments with other pet lovers.",
      icon: <Users size={28} className="text-purple-500" />,
    },
    {
      title: "Adopt & Rescue",
      desc: "Discover pets in need of loving homes and make a difference.",
      icon: <Heart size={28} className="text-pink-500" />,
    },
    {
      title: "Pet-Friendly Store",
      desc: "Find toys, treats, and essentials for your pets in one place.",
      icon: <Gift size={28} className="text-yellow-500" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-6 text-center overflow-hidden">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore PetPeeps Features
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
