import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" }, // Added a services link
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Bit Crypt Logo"
            className="h-15 md:h-20 w-auto" // Adjusted size
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 font-medium text-slate-600">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl text-slate-700"
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg text-slate-600 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                className="w-full text-center mt-4 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 mx-6"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}