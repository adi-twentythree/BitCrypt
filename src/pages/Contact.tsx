import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="w-full overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-6 text-white flex justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative max-w-4xl text-center flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Get in <span className="text-[#37C3FF]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-[#D0E4FF] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or need expert consultation? Reach out to our team 
            and let's build something secure and scalable together.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT FORM & INFO --- */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#0A2A66] mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We are available 24/7 to answer your queries and provide technical assistance.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-[#0A2A66] rounded-lg text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2A66] text-lg">Our Location</h4>
                  <p className="text-gray-600">123 Tech Park, Cyber City,<br />Bangalore, India 560100</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-[#0A2A66] rounded-lg text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2A66] text-lg">Phone Number</h4>
                  <p className="text-gray-600">+91 987 654 3210</p>
                  <p className="text-gray-600">+1 (555) 012-3456</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-[#0A2A66] rounded-lg text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2A66] text-lg">Email Address</h4>
                  <p className="text-gray-600">hello@bitcrypt.com</p>
                  <p className="text-gray-600">support@bitcrypt.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-[#0A2A66] mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#37C3FF] focus:ring-1 focus:ring-[#37C3FF] transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#37C3FF] focus:ring-1 focus:ring-[#37C3FF] transition-all"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#37C3FF] focus:ring-1 focus:ring-[#37C3FF] transition-all"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#37C3FF] focus:ring-1 focus:ring-[#37C3FF] transition-all"
              />
              <textarea 
                rows={5}
                placeholder="Tell us about your project..." 
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#37C3FF] focus:ring-1 focus:ring-[#37C3FF] transition-all resize-none"
              ></textarea>

              <button className="mt-2 w-full py-4 bg-[#0A2A66] text-white font-bold rounded-lg shadow-md hover:bg-[#071B44] transition-all flex items-center justify-center gap-2">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}