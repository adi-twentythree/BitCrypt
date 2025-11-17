import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const posts = [
    {
      title: "Top Cybersecurity Threats of 2025",
      excerpt:
        "Stay ahead of cyber threats by understanding the most critical attack vectors emerging today.",
      href: "/blog/cybersecurity-threats-2025",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
      tag: "Cybersecurity",
      date: "Jan 12, 2025",
    },
    {
      title: "Is Your Business Ready for the Cloud?",
      excerpt:
        "Cloud migration can unlock efficiency and performance — here's what you need to know.",
      href: "/blog/cloud-migration-guide",
      image:
        "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?auto=format&fit=crop&q=80&w=1000",
      tag: "Cloud",
      date: "Feb 02, 2025",
    },
    {
      title: "How Data Analytics Can Drive Growth",
      excerpt:
        "Turn raw data into valuable insights that power stronger business decisions.",
      href: "/blog/data-analytics-growth",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tag: "Analytics",
      date: "Mar 05, 2025",
    },
  ];

  return (
    <section
      id="blog"
      className="py-24 px-6 scroll-mt-20 bg-white flex justify-center"
    >
      <div className="w-full max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#37C3FF]">
            FROM OUR BLOG
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A66] tracking-tight mt-4">
            Insights & Technology Trends
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4 leading-relaxed">
            Explore articles crafted by industry experts to help you stay ahead in
            an ever-evolving digital world.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Tag */}
                <span className="absolute bottom-3 left-3 bg-white/90 text-[#0A2A66] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-gray-500 text-sm mb-2">{post.date}</span>

                <h3 className="text-xl font-semibold text-[#0A2A66] mb-3 group-hover:text-[#153B8C] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={post.href}
                  className="font-medium text-[#0A2A66] hover:text-[#153B8C] transition-all flex items-center gap-2"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
