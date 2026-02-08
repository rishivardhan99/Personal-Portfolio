// src/components/Skills.js
import React, { useEffect, useState } from "react";
import API from "../api";
import { motion } from "framer-motion";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState(null); // ⬅️ IMPORTANT

  useEffect(() => {
    API.get("skills/")
      .then((res) => {
        const data = res.data || [];
        setSkills(data);

        // 🔹 derive categories safely
        const cats = Array.from(
          new Set(data.map((s) => s.category || "General"))
        );

        // 🎯 preferred default
        if (cats.includes("Programming Languages")) {
          setCategory("Programming Languages");
        } else if (cats.length > 0) {
          setCategory(cats[0]); // first meaningful category
        } else {
          setCategory("All");
        }
      })
      .catch(console.error);
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((s) => s.category || "General"))),
  ];

  const filtered =
    category === "All"
      ? skills
      : skills.filter(
          (s) => (s.category || "General") === category
        );

  if (!category) return null; // ⬅️ prevents flash / empty render

  return (
    <section id="skills" className="py-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-4"
      >
        Skills
      </motion.h2>

      {/* Category pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1 rounded-full text-sm transition
              ${
                category === c
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-card"
          >
            <div className="flex justify-between mb-2">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {s.proficiency}%
              </div>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-3 bg-gradient-to-r from-primary-600 to-accent-DEFAULT"
              />
            </div>

            {s.category && (
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {s.category}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
