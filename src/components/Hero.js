'use client';

import Image from "next/image";
import Link from "next/link";
import { PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 pt-32 sm:pt-36 md:pt-40 overflow-hidden bg-gray-50">

      {/* Floating neon blobs */}
      <div className="absolute -top-16 -left-24 w-96 h-96 bg-blue-300/40 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute -bottom-8 -right-12 w-80 h-80 bg-purple-300/30 rounded-full filter blur-2xl animate-blob2 pointer-events-none"></div>

      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3 text-black">
          Welcome to PetPeeps
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <PawPrint size={36} className="text-blue-500" />
          </motion.span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
          Celebrate the joy of pets. Track their activities, manage care routines, and connect with fellow pet lovers. PetPeeps makes every moment with your furry friends fun and stress-free.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/pets">
            <Button 
              text="Explore Pets" 
              className="px-6 py-3 text-base rounded-xl shadow-xl bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500" 
            />
          </Link>
          <Link href="/community">
            <Button 
              text="Join the Community" 
              className="px-6 py-3 text-base rounded-xl shadow-lg bg-gray-100 text-gray-800 hover:bg-blue-200 hover:text-blue-900 transition-all duration-500" 
            />
          </Link>
        </div>
      </motion.div>

      {/* Hero image with subtle floating effect */}
      <motion.div
        className="mt-12 relative z-10 w-full max-w-3xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Image
          src="https://thumbs.dreamstime.com/b/banner-pets-dog-cat-smiling-happy-expression-closed-eyes-isolated-blue-colored-background-367009053.jpg?w=992"
          width={700}
          height={400}
          alt="Happy pets"
          className="rounded-3xl shadow-2xl"
          priority
        />
      </motion.div>

      {/* Blob animations */}
      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(10px, -10px) scale(1.05); }
          50% { transform: translate(0px, -15px) scale(1.1); }
          75% { transform: translate(-10px, -5px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(-10px, 5px) scale(1.05); }
          50% { transform: translate(-15px, 10px) scale(1.1); }
          75% { transform: translate(-5px, 0px) scale(1.05); }
        }
        .animate-blob1 { animation: blob1 20s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 25s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
