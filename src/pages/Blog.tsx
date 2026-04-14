import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock Data
const posts = [
  {
    id: 1,
    title: "The Future of Cloud Security in 2026",
    excerpt: "As cloud adoption peaks, security frameworks must evolve. Here are the top trends defining the future of cloud safety.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    tag: "Security",
    date: "Feb 10, 2026",
  },
  {
    id: 2,
    title: "AI in IT Operations: A Game Changer",
    excerpt: "How Artificial Intelligence is automating routine maintenance and predicting system failures before they happen.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    tag: "AI & Automation",
    date: "Jan 28, 2026",
  },
  {
    id: 3,
    title: "Zero Trust Architecture Explained",
    excerpt: "Why 'Never Trust, Always Verify' is becoming the gold standard for enterprise network security.",
    image: "https://images.unsplash.com/photo-1558494949-efdeb6bf80c1?auto=format&fit=crop&q=80&w=1000",
    tag: "Cybersecurity",
    date: "Jan 15, 2026",
  },
  {
    id: 4,
    title: "Optimizing Database Performance",
    excerpt: "Tips and strategies for reducing latency and handling massive datasets in modern web applications.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tag: "DevOps",
    date: "Dec 20, 2025",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    excerpt: "Moving computation closer to data sources to improve response times and save bandwidth.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tag: "Infrastructure",
    date: "Dec 05, 2025",
  },
  {
    id: 6,
    title: "Protecting Against Ransomware",
    excerpt: "Essential backup strategies and employee training to safeguard your business from digital extortion.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    tag: "Security",
    date: "Nov 12, 2025",
  },
];

export default function Blog() {
  return (
    <main className="w-full overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-6 text-white flex justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000"
            alt="Blog Hero"
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
            Insights & <span className="text-[#37C3FF]">News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-[#D0E4FF] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with the latest trends in technology, cybersecurity, and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 text-[#0A2A66] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
                  <span className="text-gray-500 text-xs font-medium mb-3 uppercase tracking-wide">
                    {post.date}
                  </span>

                  <h3 className="text-xl font-bold text-[#0A2A66] mb-3 group-hover:text-[#37C3FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to="#"
                    className="font-semibold text-[#0A2A66] hover:text-[#153B8C] transition-all flex items-center gap-2 mt-auto"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}