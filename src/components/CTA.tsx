import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className=" w-full flex items-center justify-center bg-white snap-start">
      <div className="flex w-full items-center justify-center gap-6 border-b border-solid border-neutral-100 px-6 py-24 bg-gradient-to-t from-neutral-100 via-transparent">
        <div className="flex max-w-[1024px] grow shrink-0 basis-0 flex-wrap items-end justify-center gap-16">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6">
            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[48px] font-[600] leading-[52px] text-default-font -tracking-[0.04em]">
              {"Ready to Transform Your IT Infrastructure?"}
            </span>
            <span className="font-['Inter'] text-[18px] font-[400] leading-[28px] text-subtext-color -tracking-[0.01em]">
              Let us help you build a secure, scalable, and efficient technology
              foundation for your business.
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 items-center justify-end gap-3 mobile:items-center mobile:justify-start">
             <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-black transition-colors"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
          >
            Our Services
          </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}