import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { FaShieldAlt, FaCloud, FaUsers, FaNetworkWired, FaDatabase } from "react-icons/fa";

export default function Home() {
  const services = [
    { title: "Cyber Security", description: "Protect your business from threats.", icon: <FaShieldAlt /> },
    { title: "Cloud Services", description: "Seamless migration & scalability.", icon: <FaCloud /> },
    { title: "Consulting", description: "Expert advice to grow your business.", icon: <FaUsers /> },
    { title: "Network Solutions", description: "Robust and secure networks.", icon: <FaNetworkWired /> },
    { title: "Data & Analytics", description: "Data-driven decision making.", icon: <FaDatabase /> },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Hero />
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}
