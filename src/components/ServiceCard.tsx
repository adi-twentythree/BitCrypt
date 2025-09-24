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
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center"
    >
      {/* Centered Icon with Circle Background */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}
