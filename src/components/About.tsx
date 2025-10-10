import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaClock, FaChartPie, } from "react-icons/fa";


const features = [
    {
        icon: <FaAward size={28}/>,
        title: "Industry Expertise",
        description: "5+ years delivering enterprise IT solutions across multiple industries.",
    },
    {
        icon: <FaClock size={28}/>,
        title: "24/7 Support",
        description: "Round-the-clock monitoring and support for mission-critical systems.",
    },
    {
        icon: <FaChartPie size={28}/>,
        title: "Proven Results",
        description: "98% client satisfaction rate with measurable business outcomes.",
    }
];

const testimonials = [
    { quote: "A fantastic platform for IT services. They prioritize convenience and safety, and their support team is always there to help. I wholeheartedly endorse them.", author: "Samantha Bee" },
    { quote: "They make it super easy and safe to secure our network, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful.", author: "Ashley Cooper" },
    { quote: "The customer support team is exceptionally responsive, ensuring a smooth experience. I wholeheartedly endorse this platform for any business looking for top-tier IT solutions.", author: "Alex Johnson" },
    { quote: "An indispensable tool for our company. The level of security and support is unmatched in the industry. Highly recommended for peace of mind.", author: "Michael Chen" },
];


export default function About() {
    const [index, setIndex] = useState(0);

    // Effect for the automatic testimonial carousel
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 snap-start p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-16 py-16">

                {/* --- Section Header --- */}
                <div className="flex flex-col gap-4 items-center">
                    <h3 className="font-semibold text-sm tracking-widest uppercase">
                        WHY BITCRYPT
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                        Trusted by Many Organizations
                    </h2>
                </div>

                {/* --- Features Grid --- */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center p-6 gap-4">
                            {/* This div replaces the undefined IconWithBackground component */}
                            <div className="flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- Testimonials Section --- */}
                <div className="w-full max-w-5xl mx-auto mt-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col lg:flex-row gap-8"
                        >
                            {/* Renders two testimonials at a time for a dynamic feel */}
                            {[...Array(2)].map((_, i) => {
                                const testimonialIndex = (index + i) % testimonials.length;
                                const testimonial = testimonials[testimonialIndex];
                                return (
                                    <div key={testimonialIndex} className="bg-white p-8 border border-gray-200 rounded-lg w-full shadow-sm flex-1">
                                        <p className="text-gray-700 text-lg mb-6 italic">
                                            "{testimonial.quote}"
                                        </p>
                                        <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}

