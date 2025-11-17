import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaTools,
  FaPuzzlePiece,
  FaShieldAlt,
  FaBug,
  FaChartBar,
  FaLock,
  FaHandshake,
  FaCloud,
  FaServer,
  FaFileContract,
  FaCoins,
} from "react-icons/fa";

export default function Services() {
  return (
    <main className="w-full overflow-hidden">

      <section className="relative py-32 px-6 text-white flex justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1597733336794-12d05021d510?fm=jpg&q=60&w=3000"
      alt="About Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative max-w-5xl text-center flex flex-col gap-6">

    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-bold tracking-tight"
    >
     <span className="text-[#37C3FF]">Services</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="text-[#D0E4FF] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
    >
       Explore our full suite of secure, scalable and intelligent IT services designed 
       to modernize your business infrastructure.
    </motion.p>
  </div>
</section>

      <section className="py-24 px-6 flex justify-center bg-white">
        <div className="w-full max-w-7xl flex flex-col gap-24">

          <ServiceCategory
            title="Software Development"
            icon={<FaCode size={28} />}
            services={[
              { title: "Web Application Development", icon: <FaServer /> },
              { title: "Android/iOS App Development", icon: <FaMobileAlt /> },
              { title: "Industry-Specific Solutions", icon: <FaTools /> },
              { title: "API Integration & Development", icon: <FaPuzzlePiece /> },
            ]}
          />

          <ServiceCategory
            title="Cybersecurity"
            icon={<FaShieldAlt size={28} />}
            services={[
              { title: "Threat Detection & Prevention", icon: <FaBug /> },
              { title: "Security Audits & Assessment", icon: <FaChartBar /> },
              { title: "Data Protection & Encryption", icon: <FaLock /> },
              { title: "Incident Response & Recovery", icon: <FaTools /> },
              { title: "Security Automation & Orchestration", icon: <FaHandshake /> },
            ]}
          />

          <ServiceCategory
            title="Cloud Services"
            icon={<FaCloud size={28} />}
            services={[
              { title: "Cloud Migration & Strategy", icon: <FaServer /> },
              { title: "Cloud Infrastructure Management", icon: <FaTools /> },
              { title: "Cloud Security Solutions", icon: <FaLock /> },
              { title: "SaaS Deployment & Management", icon: <FaFileContract /> },
              { title: "Cloud Disaster Recovery", icon: <FaTools /> },
            ]}
          />

          <PricingModels />

          <FAQSection />
        </div>
      </section>
    </main>
  );
}
interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

interface ServiceCategoryProps {
  title: string;
  icon: React.ReactNode;
  services: ServiceItem[];
}

function ServiceCategory({ title, icon, services }: ServiceCategoryProps) {
  return (
    <div className="flex flex-col gap-12">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-[#0A2A66] text-white rounded-xl flex items-center justify-center shadow-md">
          {icon}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66] tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all"
          >
            <div className="text-[#0A2A66] text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#0A2A66]">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


function PricingModels() {
  const models = [
    { title: "Hourly Rate", desc: "Flexible billing ideal for short-term needs." },
    { title: "Project-Based Pricing", desc: "Fixed pricing for well-defined projects." },
    { title: "Retainer Contracts", desc: "Monthly/quarterly ongoing support." },
    { title: "Subscription Plans", desc: "Continuous access to selected services." },
    { title: "Custom Pricing", desc: "Fully tailored to your business requirements." },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66] tracking-tight mb-12 flex items-center gap-3">
        <FaCoins /> Pricing Models
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {models.map((model, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-[#0A2A66] mb-3">{model.title}</h3>
            <p className="text-gray-600">{model.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


function FAQSection() {
  const faqs = [
    {
      q: "How is the pricing determined for your IT services?",
      a: "Pricing varies by project scope, complexity and requirements. We provide custom quotations.",
    },
    {
      q: "How long does a service estimate take?",
      a: "Estimates are delivered as quickly as possible, depending on project complexity.",
    },
    {
      q: "Do you offer discounts?",
      a: "Yes — custom packages and discounts are available depending on your needs.",
    },
    {
      q: "How can I contact you?",
      a: "You can reach us anytime via the Contact page.",
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66] tracking-tight mb-10">
        FAQs – Pricing
      </h2>

      <div className="flex flex-col gap-6">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer"
          >
            <summary className="text-lg font-semibold text-[#0A2A66]">
              {item.q}
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
