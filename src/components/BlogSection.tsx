
export default function BlogSection() {
  const posts = [
    { 
      title: "Top Cybersecurity Threats of 2025", 
      excerpt: "Stay ahead of cyber threats by understanding the most common attacks and how to prevent them...", 
      href: "/blog/cybersecurity-threats-2025",
      image: "https://images.unsplash.com/photo-1593642632823-8f766f753c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyMHx8Y3liZXJzZWN1cml0eXxlbnwwfHx8fDE3MTUyMTUzNDN8MA&ixlib=rb-4.0.3&q=80&w=400"
    },
    { 
      title: "Is Your Business Ready for the Cloud?", 
      excerpt: "Migrating to the cloud can be a game-changer. Here's what you need to know...", 
      href: "/blog/cloud-migration-guide",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyMHx8Y2xvdWRfY29tcHV0aW5nfGVufDB8fHx8MTcxNTIxNTM4MXww&ixlib=rb-4.0.3&q=80&w=400"
    },
    { 
      title: "How Data Analytics Can Drive Growth", 
      excerpt: "Unlock the power of your data. Learn how analytics can provide valuable insights...", 
      href: "/blog/data-analytics-growth",
      image: "https://images.unsplash.com/photo-1551288258-edc41b87df7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4MTN8MHwxfHNlYXJjaHwyMHx8ZGF0YV9hbmFseXRpY3N8ZW58MHx8fHwxNzE1MjE1NDE0fDA&ixlib=rb-4.0.3&q=80&w=400"
    },
  ];

  return (
    <section id="blog" className=" w-full flex items-center justify-center bg-gray-50 snap-start py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter text-gray-900">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col text-left transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-md">
              <img 
                src={post.image} 
                alt={`Image for ${post.title}`} 
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <a href={post.href} className="font-semibold text-blue-600 hover:text-blue-800 self-start transition-colors duration-200">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
