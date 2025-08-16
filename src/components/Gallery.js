'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const galleryImages = [
  'https://jcpportraits.com/wp-content/uploads/2025/07/1.png',
  'https://cf.ltkcdn.net/life-with-pets/find-your-pet/images/orig/320110-1600x1066-best-reptile-pets-handling.jpg',
  'https://media.istockphoto.com/id/1188520695/photo/beautiful-friendship-between-kid-and-parrot.jpg?s=612x612&w=0&k=20&c=LeHyumNwH5UyABcNbTQGrSTC2vJbnpX4PgbbcinFSRs=',
  'https://media.istockphoto.com/id/2153591938/photo/cute-teen-girl-with-her-devon-rex-cat-in-a-pet-store.jpg?s=612x612&w=0&k=20&c=EwMX2K5Ge_LRZElsLP_344cWftucN_e8hfo8XvZJxFs=',
  'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2d1aW5lYS1waWdzLTExODA5OTUyNzcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=',
  'https://alwayspets.com/wp-content/uploads/2024/11/af8b3d77394f44569cb66c3d978dee4e.webp',
];

const GallerySection = () => {
  return (
    <section className="py-32 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-20 text-black">PetPeeps Gallery</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-10">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-4xl shadow-2xl group">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
              <p className="text-white text-lg font-semibold">Pet Moment #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-4xl shadow-2xl mx-auto w-72">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center p-4">
                  <p className="text-white text-md font-semibold">Pet Moment #{index + 1}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
