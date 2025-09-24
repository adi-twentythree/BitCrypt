import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="mb-6 md:mb-0 col-span-1">
            <h1 className="text-2xl font-bold text-white">Bit Crypt</h1>
            <p className="text-slate-400 text-sm mt-2">
              Reliable IT Solutions for Modern Businesses.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h2 className="font-semibold text-white mb-3">Company</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-semibold text-white mb-3">Services</h2>
            <ul className="space-y-2">
              <li><a href="/services/cyber-security" className="hover:text-white">Cyber Security</a></li>
              <li><a href="/services/cloud" className="hover:text-white">Cloud Services</a></li>
              <li><a href="/services/analytics" className="hover:text-white">Data & Analytics</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h2 className="font-semibold text-white mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><FaLinkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><FaGithub size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bit Crypt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};