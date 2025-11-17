import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">

      {/* Hero */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* Services */}
      <section className="w-full bg-white">
        <ServicesSection />
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-gray-50">
        <AboutSection />
      </section>

      {/* Blog */}
      <section className="w-full bg-white">
        <BlogSection />
      </section>

      {/* CTA */}
      <section className="w-full bg-white">
        <CTASection />
      </section>

    </main>
  );
}
