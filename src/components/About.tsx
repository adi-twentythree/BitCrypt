import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function About() {
    const testimonials = [
        { quote: "A fantastic platform for IT services. They prioritize convenience and safety, and their support team is always there to help. I wholeheartedly endorse them.", author: "Samantha Bee" },
        { quote: "They make it super easy and safe to secure our network, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful.", author: "Ashley Cooper" },
        { quote: "The customer support team is exceptionally responsive, ensuring a smooth experience. I wholeheartedly endorse this platform for any business looking for top-tier IT solutions.", author: "Alex Johnson" },
    ];

    const [index, setIndex] = useState(0);

    const nextTestimonial = () => setIndex((i) => (i + 1) % testimonials.length);
    const prevTestimonial = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setTimeout(nextTestimonial, 7000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <section id="about" className="h-screen w-full flex flex-col space-y-20 items-center justify-center border border-amber-900 bg-gray-50 snap-start">
            
            <div className="">
                <h2 className="text-4xl font-bold mb-12 tracking-tighter">Why Us</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col space-y-20">

                {/* Main container for the two-column layout */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                    {/* Left Column: Vision */}
                    <div className="md:w-5/12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
                            A vision for secure, scalable & efficient technology.
                        </h2>
                        <p className="text-lg text-gray-600 mt-6">
                            Our purpose is to transform your complex technological challenges into simple, powerful solutions, fulfilling your every desire for performance and security.
                        </p>
                        <button className="mt-8 text-lg font-semibold text-black hover:text-gray-700 transition-colors">
                            Learn More &rarr;
                        </button>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                    <div className="md:w-5/12 ">

                    </div>

                    {/* Right Column: Testimonial Slider */}
                    <div className="md:w-5/12">
                        <div className="bg-white p-8 border border-gray-200 rounded-lg w-full relative min-h-[220px] flex items-center shadow-sm">
                            <div className='absolute -top-5.5 left-8 flex p-1 bg-gray-100 border border-gray-100 rounded-lg'>
                                <h2 className='text-3xl font-bold text-gray-900 tracking-tighter'>
                                    Testimonials
                                </h2>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="text-gray-700 text-lg mt-5 mb-6 italic">
                                        "{testimonials[index].quote}"
                                    </p>
                                    <p className="font-semibold text-black">- {testimonials[index].author}</p>
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute -bottom-3.5 right-5 flex space-x-2">
                                <button onClick={prevTestimonial} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><FaChevronLeft size={12} /></button>
                                <button onClick={nextTestimonial} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><FaChevronRight size={12} /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}