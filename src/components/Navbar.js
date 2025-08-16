'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pets", href: "/pets" },
    { name: "Vets", href: "/vets" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-sky-400 text-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <PawPrint size={28} className="hover:scale-110 transition-transform duration-200" />
        <span className="text-2xl font-bold hover:scale-105 transition-transform duration-200">
          PetPeeps
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 font-medium text-white">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-gray-100 hover:scale-105 transition duration-200"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-sky-500 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
          Join Now
        </button>
        <button className="bg-white text-sky-500 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
          Donate
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-sky-400 rounded-lg flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10"}`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-gray-100 hover:scale-105 transition duration-200"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-white text-sky-500 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
            Join Now
          </button>
        </li>
        <li>
          <button className="bg-white text-sky-500 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
}
