import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import BlogSection from "../components/BlogSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Service data
const services = [
  { num: "01", title: "Cyber Security", description: "The security of your data holds substantial influence over your business's integrity and success." },
  { num: "02", title: "Cloud Solutions", description: "Incorporating cloud infrastructure introduces scalability, flexibility, and efficiency to your business." },
  { num: "03", title: "IT Revamping", description: "Modernizing your IT systems holds substantial influence over the usability of your digital workspace." },
  { num: "04", title: "Consulting", description: "Expert advice to grow your business and navigate the complex tech landscape." },
  { num: "05", title: "Network Solutions", description: "We design and implement robust and secure networks tailored to your needs." },
  { num: "06", title: "Data & Analytics", description: "Turn your data into actionable insights with our data-driven decision-making solutions." },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section id="services" className="h-screen w-full flex items-center justify-center bg-white snap-start">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.num}
                className="bg-gray-50 p-8 border border-gray-200 rounded-lg relative overflow-hidden text-left flex flex-col min-h-[350px]"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="absolute top-8 right-8 text-6xl font-bold text-gray-200 -z-1">
                  {service.num}
                </span>
                <div className="z-10 mt-36 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <BlogSection />
      <CTA />
      <Footer />
    </div>
  );
}