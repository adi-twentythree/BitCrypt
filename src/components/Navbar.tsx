import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="text-2xl font-bold text-gray-800">
          BitCrypt
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 font-medium text-gray-600">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="/contact" className="bg-black text-white font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block text-center py-2 text-lg" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="px-6 mt-4">
            <a href="/contact" className="block w-full text-center bg-black text-white font-semibold py-3 rounded-lg">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}