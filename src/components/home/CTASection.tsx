import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-white flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight max-w-3xl"
        >
          Ready to Transform Your IT Infrastructure?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
        >
          Let BitCrypt help you build secure, scalable, and future-ready
          technology solutions tailored for your business growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          {/* Primary CTA */}
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#0A2A66] text-white font-semibold rounded-lg shadow-md hover:bg-[#071B44] transition-all"
          >
            Get Started
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/services"
            className="px-8 py-4 bg-white border border-[#37C3FF] text-[#0A2A66] font-semibold rounded-lg shadow-sm hover:bg-[#E7F8FF] transition-all"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
