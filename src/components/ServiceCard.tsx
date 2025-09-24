import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="p-8 bg-white border border-slate-200 shadow-sm rounded-2xl flex flex-col items-center text-center"
    >
      {/* Icon with new background */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-3xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>

      {/* Description */}
      <p className="text-slate-500 mt-2">{description}</p>
    </motion.div>
  );
}