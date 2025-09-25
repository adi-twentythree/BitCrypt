import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-background.jpg" alt="Modern server room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter">
          We Craft the Future of Technology.
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Crafted for your business's success, to enhance your current operations and pave the way for a more efficient and secure future for you and your team.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </section>
  );
}