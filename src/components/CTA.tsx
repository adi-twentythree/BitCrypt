export default function CTA() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-white snap-start">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
          Start Your Project Now!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Made for your convenience, for a more successful and secure future for your business.
        </p>
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
}