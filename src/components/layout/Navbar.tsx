import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-[#0A2A66]">
          <img
            src="/logo.png"
            alt="BitCrypt"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

          {/* Main Links */}
          <div className="flex items-center gap-8 text-gray-700 font-medium">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#37C3FF] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="px-5 py-2 bg-[#0A2A66] text-white font-semibold rounded-lg hover:bg-[#071B44] transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-[#0A2A66]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 py-4">
          <div className="flex flex-col text-center gap-4 text-lg text-gray-700">

            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="py-2 hover:text-[#37C3FF] transition-colors"
              >
                {link.name}
              </button>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mx-6 mt-2 bg-[#0A2A66] text-white py-3 rounded-lg hover:bg-[#071B44] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
