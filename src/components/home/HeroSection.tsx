import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=1920"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay to Ensure Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-8">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Empowering Businesses
          <span className="block text-[#37C3FF] mt-2">
            with Intelligent IT Solutions.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#D0E4FF] text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Secure, scalable, and future-ready digital infrastructures designed to
          elevate your operations and enable long-term business success.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <button className="px-8 py-3 bg-white text-[#0A2A66] font-semibold rounded-lg shadow-lg hover:bg-[#E7F8FF] transition-all">
            Get Started
          </button>

          <button className="px-8 py-3 border border-[#37C3FF] text-white font-semibold rounded-lg hover:bg-[#153B8C] transition-all">
            Explore Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15 }}
          className="flex flex-wrap justify-center gap-10 mt-16 text-white"
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">5+</p>
            <span className="text-[#D0E4FF] text-sm mt-2">Years Experience</span>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">50+</p>
            <span className="text-[#D0E4FF] text-sm mt-2">Projects Delivered</span>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">98%</p>
            <span className="text-[#D0E4FF] text-sm mt-2">Client Satisfaction</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
