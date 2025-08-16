'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Dog Mom',
    message: 'PetPeeps made keeping track of my dog’s meals and walks so easy. Love seeing her happy and healthy!',
    image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/4143/health-benefits-of-owning-a-pet.jpg',
  },
  {
    name: 'David L.',
    role: 'Vet Clinic Owner',
    message: 'Clients love using PetPeeps to manage appointments and track pet health. It’s simplified our workflow massively!',
    image: 'https://software.idexx.com/sites/default/files/styles/825_485_focal_point/public/2022-07/male-veterinarian-posing-with-dog-at-vet-clinic-2021-09-24-04-10-05-utc_0.jpg?h=813e5f2b&itok=GGnia855',
  },
  {
    name: 'Emily R.',
    role: 'Cat Enthusiast',
    message: 'I found my forever cat through PetPeeps adoption feature. The community is amazing and supportive!',
    image: 'https://img.freepik.com/free-photo/woman-growing-plants-home-holding-cat_23-2148928467.jpg?semt=ais_hybrid&w=740&q=80',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-6 bg-[#f0faff] text-center relative overflow-hidden">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Happy PetPeeps Stories
      </motion.h2>

      {/* Desktop */}
      <div className="hidden md:flex gap-10 justify-center flex-wrap">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl p-10 w-80 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow flex flex-col items-center"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mb-6"
            />
            <p className="text-gray-800 mb-8 text-lg italic">"{t.message}"</p>
            <p className="text-sky-500 font-bold text-xl">{t.name}</p>
            <p className="text-gray-500 text-sm mt-1">{t.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-3xl p-10 w-72 shadow-lg mx-auto flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-6"
                />
                <p className="text-gray-800 mb-8 text-lg italic">"{t.message}"</p>
                <p className="text-sky-500 font-bold text-xl">{t.name}</p>
                <p className="text-gray-500 text-sm mt-1">{t.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional floating pawprints */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 bg-blue-100/30 rounded-full filter blur-2xl pointer-events-none"
        animate={{ x: [0, 15, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-pink-100/30 rounded-full filter blur-2xl pointer-events-none"
        animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default TestimonialsSection;
