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
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  return (
    <main className="w-full overflow-hidden">
      
      {/* --- HERO SECTION (Dark to match other pages) --- */}
      <section className="relative py-32 px-6 text-white flex justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=3000"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative max-w-4xl text-center flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-[#37C3FF]">Services</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-lg md:text-xl text-[#D0E4FF] leading-relaxed max-w-2xl mx-auto"
          >
            Explore our full suite of secure, scalable, and intelligent IT services
            designed to modernize your business infrastructure.
          </motion.p>
        </div>
      </section>

      {/* --- SERVICE BLOCKS --- */}
      <div className="flex flex-col">
        
        {/* 1. SOFTWARE DEVELOPMENT */}
        <ServiceBlock
          bg="bg-white"
          align="left"
          icon={<FaCode />}
          title="Software Development"
          description="We engineer custom software solutions tailored to your unique business needs. From agile startups to enterprise-grade systems, we build with precision using the latest tech stacks."
          services={[
            { title: "Web Application Development", icon: <FaServer /> },
            { title: "Android / iOS App Development", icon: <FaMobileAlt /> },
            { title: "Industry-Specific Solutions", icon: <FaTools /> },
            { title: "API Integration & Development", icon: <FaPuzzlePiece /> },
          ]}
        />

        {/* 2. CYBERSECURITY */}
        <ServiceBlock
          bg="bg-[#F8FAFC]" // Very light gray for contrast
          align="right"
          icon={<FaShieldAlt />}
          title="Cybersecurity"
          description="In an era of digital threats, we provide military-grade protection. Ensure your data, reputation, and operational continuity remain uncompromised with our security frameworks."
          services={[
            { title: "Threat Detection & Prevention", icon: <FaBug /> },
            { title: "Security Audits & Assessment", icon: <FaChartBar /> },
            { title: "Data Protection & Encryption", icon: <FaLock /> },
            { title: "Incident Response & Recovery", icon: <FaTools /> },
            { title: "Security Automation", icon: <FaHandshake /> },
          ]}
        />

        {/* 3. CLOUD SERVICES */}
        <ServiceBlock
          bg="bg-white"
          align="left"
          icon={<FaCloud />}
          title="Cloud Services"
          description="Scale without limits. We design and manage cloud infrastructures that prioritize performance, cost-efficiency, and 99.9% uptime reliability for your critical workloads."
          services={[
            { title: "Cloud Migration Strategy", icon: <FaServer /> },
            { title: "Infrastructure Management", icon: <FaTools /> },
            { title: "Cloud Security Solutions", icon: <FaLock /> },
            { title: "SaaS Deployment", icon: <FaFileContract /> },
            { title: "Disaster Recovery", icon: <FaTools /> },
          ]}
        />

      </div>
      
      {/* Call to Action at Bottom */}
      <section className="py-20 px-6 bg-[#0A2A66] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Upgrade Your Infrastructure?
        </h2>
        <button className="px-8 py-4 bg-[#37C3FF] text-[#0A2A66] font-bold rounded-lg hover:bg-white transition-colors shadow-lg">
          Get a Free Consultation
        </button>
      </section>

    </main>
  );
}

/* -------------------------------------------- */
/* REUSABLE COMPONENTS                          */
/* -------------------------------------------- */

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
}

interface BlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  align?: "left" | "right";
  bg: string;
  services: ServiceItem[];
}

function ServiceBlock({ title, description, icon, align = "left", bg, services }: BlockProps) {
  
  const isRight = align === "right";

  return (
    <section className={`py-24 px-6 flex justify-center ${bg}`}>
      <div className={`w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center ${isRight ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"}`}>
        
        {/* TEXT CONTENT */}
        <div className={`flex flex-col gap-6 ${isRight ? "lg:order-2" : "lg:order-1"}`}>
          <div className="w-16 h-16 rounded-2xl bg-[#0A2A66] text-white flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A66]">
            {title}
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>

          <button className="group mt-2 text-[#37C3FF] font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-4 transition-all w-fit">
            Learn More <FaArrowRight />
          </button>
        </div>

        {/* CARDS GRID */}
        <div className={`grid sm:grid-cols-2 gap-5 ${isRight ? "lg:order-1" : "lg:order-2"}`}>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card"
            >
              <div className="text-[#37C3FF] text-2xl mb-4 group-hover/card:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-[#0A2A66] font-semibold text-base">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}