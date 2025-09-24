export default function BlogSection() {
  const posts = [
    {
      title: "The Top 5 Cybersecurity Threats to Watch for in 2025",
      excerpt: "Stay ahead of cyber threats by understanding the most common attacks and how to prevent them...",
      href: "/blog/cybersecurity-threats-2025",
    },
    {
      title: "Is Your Business Ready for the Cloud? A Complete Guide",
      excerpt: "Migrating to the cloud can be a game-changer for your business. Here's what you need to know...",
      href: "/blog/cloud-migration-guide",
    },
    {
      title: "How Data Analytics Can Drive Business Growth",
      excerpt: "Unlock the power of your data. Learn how analytics can provide valuable insights and a competitive edge...",
      href: "/blog/data-analytics-growth",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Insights & News From Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg text-left flex flex-col">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{post.title}</h3>
              <p className="text-slate-500 mb-4 flex-grow">{post.excerpt}</p>
              <a href={post.href} className="font-semibold text-blue-600 hover:underline self-start">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}