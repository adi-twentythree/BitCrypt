import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Empowering Businesses with Technology</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Bit Crypt provides world-class Cyber Security, Cloud, Consulting, and Analytics solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
