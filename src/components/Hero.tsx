import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">      {/* --- Background Image & Overlay --- */}

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Modern server room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* --- Content --- */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl flex flex-col items-center justify-center gap-6 text-white"
      >

        <h1 className="max-w-3xl font-['Inter'] text-5xl md:text-7xl font-bold leading-tight -tracking-tighter text-center">
          We Craft the Future of Technology.
        </h1>


        <p className="max-w-xl font-['Inter'] text-lg md:text-xl font-medium leading-relaxed text-gray-300 text-center -tracking-tight">
          Crafted for your business's success, to enhance your current
          operations and pave the way for a more efficient and secure future for
          you and your team.
        </p>


        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-black transition-colors"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Our Services
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}