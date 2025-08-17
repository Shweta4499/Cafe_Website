// Footer.jsx
import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3e2723] text-[#ffcc80] py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      
      {/* Brand Info */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">Royal Beverage</h3>
        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <a href="#home" className="hover:text-[#e6b25c] transition-colors duration-300">Home</a>
        <a href="#specials" className="hover:text-[#e6b25c] transition-colors duration-300">Specials</a>
        <a href="#contact" className="hover:text-[#e6b25c] transition-colors duration-300">Contact</a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-xl justify-center md:justify-end">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6b25c] transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6b25c] transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="mailto:info@royalbeverage.com" className="hover:text-[#e6b25c] transition-colors duration-300">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
