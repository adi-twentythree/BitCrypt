import { FaAward, FaUsers, FaTools } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: "Certified Experts",
      description: "Our team consists of certified professionals with years of experience in the IT industry.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs and provide tailored solutions to meet their specific goals.",
    },
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "Cutting-Edge Technology",
      description: "We use the latest technology and tools to deliver high-quality and efficient services.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Bit Crypt?</h2>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          We are more than just an IT provider; we are your strategic partner in technology.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex justify-center mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}