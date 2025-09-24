import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import CTA from "../components/CTA";
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
    <div className="text-slate-700">
      <Hero />
      
      {/* Services Section with updated background and padding */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of IT services to support your business at every stage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
      
      <WhyChooseUs />

      <Testimonials />
      <BlogSection />
      <CTA />
    </div>
  );
}