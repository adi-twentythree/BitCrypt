import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Bit Crypt Logo"
            className="h-15 md:h-20 w-auto"
          />

        </a>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)} // Close after click
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
