import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCloud,
  FaSyncAlt,
  FaUsers,
  FaNetworkWired,
  FaChartBar,
} from "react-icons/fa";

const services = [
  {
    num: "01",
    title: "Cyber Security",
    description:
      "Robust protection against modern threats, ensuring your data and systems remain secure.",
    icon: <FaShieldAlt size={26} />,
  },
  {
    num: "02",
    title: "Cloud Solutions",
    description:
      "Highly scalable cloud infrastructure designed for performance, reliability, and efficiency.",
    icon: <FaCloud size={26} />,
  },
  {
    num: "03",
    title: "IT Revamping",
    description:
      "Modernized systems and optimized architecture to elevate your digital ecosystem.",
    icon: <FaSyncAlt size={26} />,
  },
  {
    num: "04",
    title: "Consulting",
    description:
      "Expert guidance to help you navigate complex technical challenges and business needs.",
    icon: <FaUsers size={26} />,
  },
  {
    num: "05",
    title: "Network Solutions",
    description:
      "Secure, reliable, and high-performing network systems tailored for your workflows.",
    icon: <FaNetworkWired size={26} />,
  },
  {
    num: "06",
    title: "Data & Analytics",
    description:
      "Turn meaningful insights into powerful decisions using our advanced analytical solutions.",
    icon: <FaChartBar size={26} />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 scroll-mt-20 bg-white flex justify-center"
    >
      <div className="w-full max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#37C3FF]">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight mt-4">
            Comprehensive IT Solutions
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4 leading-relaxed">
            Powering innovation, security, and growth for businesses through modern,
            scalable, and intelligent technology services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Background Number */}
              <span className="absolute top-4 right-6 text-7xl font-bold text-gray-100 select-none">
                {service.num}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0A2A66] text-white shadow-md mb-8">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#0A2A66] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to="/services"
                className="font-medium text-[#0A2A66] hover:text-[#153B8C] transition-all flex items-center gap-2"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
