import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-blue-500">Bit Crypt</h1>
          <p className="text-gray-400 text-sm mt-1">Empowering Businesses with Technology</p>
        </div>


        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Bit Crypt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
