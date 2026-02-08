import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-primary-600">Rishi</span> — Computer Science Student.
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            Computer Science student building AI-driven and full-stack systems using Python, Java, and JavaScript.
            Experienced with production-grade AI pipelines, backend development, and end-to-end application design.

          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center px-5 py-3 bg-primary-600 text-white rounded shadow-sm hover:bg-primary-700">
              See projects
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-end">
          <div className="w-full sm:w-80 md:w-96 rounded-2xl p-6 bg-gradient-to-br from-primary-600 to-accent-DEFAULT text-white shadow-lg">
            <div className="text-sm opacity-90">Resume available</div>
            <div className="mt-3 text-2xl font-semibold">Download CV</div>
            <div className="mt-4 text-sm">Click the About section or the Resume button to download the latest copy.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
