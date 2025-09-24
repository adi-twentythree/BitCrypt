export default function Testimonials() {
  const testimonials = [
    {
      quote: "Bit Crypt has been an invaluable partner. Their expertise in cybersecurity has given us peace of mind and allowed us to focus on our core operations.",
      author: "John Doe",
      company: "CEO, ExampleCorp",
    },
    {
      quote: "The team at Bit Crypt is professional, responsive, and highly skilled. They seamlessly migrated our infrastructure to the cloud with minimal downtime.",
      author: "Jane Smith",
      company: "CTO, Innovate Inc.",
    },
    {
      quote: "We are extremely impressed with the results of our data analytics project. Bit Crypt's insights have helped us make smarter, data-driven decisions.",
      author: "Peter Jones",
      company: "Marketing Head, DataDriven Co.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50"> {/* Changed background color */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white border border-slate-200 rounded-lg text-left"> {/* Changed card background to white */}
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-800">{testimonial.author}</p>
                <p className="text-slate-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}