import React from "react";
import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function FutureWorks({ projects }) {
  const future = projects.filter(p => p.status === "planned");

  if (future.length === 0) return null;

  return (
    <section id="future" className="py-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        <ClockIcon className="w-6 h-6 text-indigo-500" />
        Future Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {future.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-dashed border-indigo-300 dark:border-indigo-700 p-6 bg-indigo-50/40 dark:bg-indigo-900/20"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {p.short_description || "Planned project"}
            </p>

            <div className="mt-4 text-xs text-indigo-600 dark:text-indigo-300 font-medium">
              🚧 Planned / Coming Soon
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
