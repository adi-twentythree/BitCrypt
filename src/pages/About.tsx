import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="w-full overflow-hidden">

      {/* About Intro */}
     {/* About Intro */}
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
      About <span className="text-[#37C3FF]">BitCrypt</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="text-[#D0E4FF] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
    >
      BitCrypt is a technology solutions company focused on building secure, scalable,
      and efficient IT infrastructures for modern businesses.
    </motion.p>
  </div>
</section>


      {/* Company Description */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <div className="max-w-6xl flex flex-col gap-12">

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We specialize in cybersecurity, cloud solutions, IT revamping, consulting, network systems, 
              and data analytics — enabling organizations to enhance operations and achieve sustainable growth.
              <br /><br />
              Our approach combines technical expertise with industry insight to deliver reliable, result-driven 
              solutions tailored to each client’s needs. At BitCrypt, we turn technology into a foundation for 
              performance, innovation, and long-term success.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            {[
              {
                title: "Security First",
                desc: "Every solution is designed with security at its core, ensuring protection at every level.",
              },
              {
                title: "Scalable by Design",
                desc: "We build systems engineered to grow with your organization without compromising efficiency.",
              },
              {
                title: "Reliability & Trust",
                desc: "Our mission is to deliver dependable technologies that drive measurable outcomes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2A66] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-gray-50 flex justify-center">
        <div className="max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight">
              Founder & Leadership
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              BitCrypt was founded by <span className="font-semibold text-[#0A2A66]">Yash Sinha</span>, 
              a visionary technologist dedicated to shaping secure and scalable 
              digital ecosystems for modern businesses.
              <br /><br />
              His leadership blends technical expertise with strategic foresight, 
              driving BitCrypt’s mission to simplify complexity and deliver measurable results.
            </p>
          </motion.div>

          {/* Founder image placeholder (can replace with real photo later) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-72 bg-[#0A2A66]/10 rounded-2xl flex items-center justify-center border border-gray-300 shadow-sm"
          >
            <p className="text-gray-500">Founder Image Placeholder</p>
          </motion.div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <div className="max-w-6xl text-center flex flex-col items-center gap-10">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight">
            The Team Behind BitCrypt
          </h2>

          <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
            Our team of skilled engineers, consultants, and analysts share this vision — 
            combining innovation, precision, and trust to create solutions that empower 
            organizations to thrive in the digital age.
          </p>

          <div className="w-full h-64 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
            <p className="text-gray-500">Team Image Placeholder</p>
          </div>
        </div>
      </section>

    </main>
  );
}
