import { motion } from "framer-motion";
import { FaLock, FaRocket, FaGlobeAsia, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaLock size={22} />,
    title: "Top-Tier Security",
    description:
      "Enterprise-grade cybersecurity frameworks to safeguard your critical infrastructure.",
  },
  {
    icon: <FaRocket size={22} />,
    title: "Agile & Scalable",
    description:
      "Future-ready solutions engineered to scale seamlessly with your business growth.",
  },
  {
    icon: <FaGlobeAsia size={22} />,
    title: "Global Standards",
    description:
      "Built on industry-proven methodologies and internationally recognized best practices.",
  },
  {
    icon: <FaHeadset size={22} />,
    title: "24/7 Expert Support",
    description:
      "Dedicated support engineers available around the clock for mission-critical needs.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="why-us"
      className="py-24 px-6 scroll-mt-20 bg-gray-50 flex justify-center"
    >
      <div className="w-full max-w-7xl flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#37C3FF]">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight mt-4">
            Your Trusted Technology Partner
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4 leading-relaxed">
            We help organizations accelerate performance with secure, scalable,
            and intelligent digital systems tailored for long-term success.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Dedicated Support" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#0A2A66]">
                {metric.value}
              </span>
              <span className="text-gray-600 mt-2 text-sm md:text-base">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0A2A66] text-white shadow-md mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#0A2A66] mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
