import { motion } from "framer-motion";
import { FaShieldAlt, FaCloud, FaSyncAlt, FaUsers, FaNetworkWired, FaChartBar } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About";
import BlogSection from "../components/BlogSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

// Service data
const services = [
  { num: "01", title: "Cyber Security", description: "The security of your data holds substantial influence over your business's integrity and success.", icon: <FaShieldAlt /> },
  { num: "02", title: "Cloud Solutions", description: "Incorporating cloud infrastructure introduces scalability, flexibility, and efficiency to your business.", icon: <FaCloud /> },
  { num: "03", title: "IT Revamping", description: "Modernizing your IT systems holds substantial influence over the usability of your digital workspace.", icon: <FaSyncAlt /> },
  { num: "04", title: "Consulting", description: "Expert advice to grow your business and navigate the complex tech landscape.", icon: <FaUsers /> },
  { num: "05", title: "Network Solutions", description: "We design and implement robust and secure networks tailored to your needs.", icon: <FaNetworkWired /> },
  { num: "06", title: "Data & Analytics", description: "Turn your data into actionable insights with our data-driven decision-making solutions.", icon: <FaChartBar /> },
];

export default function Home() {
  return (
    <div>
      <Hero />


      <section id="services" className="h-screen w-full flex items-center justify-center bg-white snap-start">
        <div className="flex flex-col max-w-6xl mx-auto px-6 text-center gap-8">
          <div className="flex w-full max-w-[1024px] flex-col items-center gap-6">
            <span className="font-['Inter'] text-[14px] font-[600] leading-[20px] text-brand-600 text-center tracking-[0.15em]">
              OUR SERVICES
            </span>
            <span className="max-w-[576px] font-['Inter'] text-[18px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em]">
              From cloud infrastructure to cybersecurity, we provide end-to-end technology
              services that drive innovation and protect your business.
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.num}

                className="group bg-gray-50 p-8 border border-gray-200 rounded-lg text-left flex flex-col min-h-[350px]"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.2 }}
              >

                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gray-900 group-hover:bg-black text-white rounded-lg flex items-center justify-center text-3xl transition-colors">
                    {service.icon}
                  </div>

                  <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300 ">
                    {service.num}
                  </span>
                </div>

                <div className="mt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </div>
                <Link className="mt-6 text-gray-900 " to="/services">
                  Learn more
                </Link>
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