import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero.png" // The image in your public folder
          alt="Abstract technology background"
          className="w-full h-full object-cover"
        />
        {/* Blur and Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl" // Add relative and z-10 to bring content to the front
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Reliable IT Solutions for Modern Businesses
        </h1>
        <p className="mt-6 text-lg text-slate-200 max-w-xl mx-auto">
          We help you reduce costs, improve security, and drive growth through our expert Cyber Security, Cloud, and Analytics solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Schedule a Free Consultation
        </motion.button>
      </motion.div>
    </section>
  );
}