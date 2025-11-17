import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">

          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="BitCrypt" className="h-14 w-auto" />
            </div>
            <p className="text-gray-600 mt-4 max-w-sm leading-relaxed">
              Empowering businesses with secure, scalable, and intelligent IT solutions.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10 text-gray-700 font-medium">

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#0A2A66]">Company</h4>
              <Link
                to="/#why-us"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Why Us
              </Link>
              <Link
                to="/#services"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Services
              </Link>
              <Link
                to="/#blog"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#0A2A66]">Support</h4>
              <Link to="/faq" className="hover:text-[#37C3FF] transition-colors">
                FAQ
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#37C3FF] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">

          <p>© {new Date().getFullYear()} BitCrypt. All Rights Reserved.</p>

          <p className="text-gray-500">
            Crafted with <span className="text-[#37C3FF] font-semibold">excellence</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
