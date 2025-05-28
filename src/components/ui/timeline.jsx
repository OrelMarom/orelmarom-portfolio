import { motion } from "framer-motion";

export function Timeline({ items = [] }) {
  return (
    <ul className="space-y-6 relative border-l border-gray-300 pl-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-2 top-1 w-3 h-3 bg-black rounded-full"></span>
          <p className="text-sm text-gray-500">{item.period}</p>
          <h3 className="text-lg font-semibold leading-tight">{item.role}</h3>
          <p className="text-gray-700">{item.highlight}</p>
        </motion.li>
      ))}
    </ul>
  );
}
