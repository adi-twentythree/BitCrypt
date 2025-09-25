export default function BlogSection() {
  const posts = [
    { title: "Top Cybersecurity Threats of 2025", excerpt: "Stay ahead of cyber threats by understanding the most common attacks and how to prevent them...", href: "/blog/cybersecurity-threats-2025" },
    { title: "Is Your Business Ready for the Cloud?", excerpt: "Migrating to the cloud can be a game-changer. Here's what you need to know...", href: "/blog/cloud-migration-guide" },
    { title: "How Data Analytics Can Drive Growth", excerpt: "Unlock the power of your data. Learn how analytics can provide valuable insights...", href: "/blog/data-analytics-growth" },
  ];

  return (
    <section id="blog" className="h-screen w-full flex items-center justify-center bg-gray-50 snap-start">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="p-8 bg-white border border-gray-200 rounded-lg flex flex-col text-left">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <a href={post.href} className="font-semibold text-black hover:text-gray-700 self-start">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}