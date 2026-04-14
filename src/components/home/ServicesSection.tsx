import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaSyncAlt,
  FaUsers,
  FaNetworkWired,
  FaChartBar,
  FaCode,
} from "react-icons/fa";

/* -------------------------------------------------------------------------------------------------
 * SPOTLIGHT CARD COMPONENT
 * -----------------------------------------------------------------------------------------------*/
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white ${className}`}
    >
      {/* The Moving Gradient Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(55,195,255,0.15), transparent 40%)`,
        }}
      />
      
      {/* Content Wrapper (z-10 to stay above spotlight) */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MAIN SERVICES SECTION
 * -----------------------------------------------------------------------------------------------*/
const services = [
  {
    num: "01",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, built with the latest technologies.",
    icon: <FaCode size={26} />,
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
    title: "Cyber Security",
    description:
      "Robust protection against modern threats, ensuring your data and systems remain secure.",
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
              whileHover={{ y: -6 }} // Lift effect
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0A2A66] text-white shadow-md mb-8">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[#0A2A66] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    to="/services"
                    className="font-medium text-[#0A2A66] hover:text-[#153B8C] transition-all flex items-center gap-2 mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}