import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3c2f2f] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">☕ Brew & Bliss</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="hover:text-[#d4a373]">About</a></li>
          <li><a href="#menu" className="hover:text-[#d4a373]">Menu</a></li>
          <li><a href="#contact" className="hover:text-[#d4a373]">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3c2f2f] border-t border-[#d4a373]">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><a href="#about" className="hover:text-[#d4a373]" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#menu" className="hover:text-[#d4a373]" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li><a href="#contact" className="hover:text-[#d4a373]" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
