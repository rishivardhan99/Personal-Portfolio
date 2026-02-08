// src/components/Experience.js
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Experience({ data = [] }) {
  // sort by order or start_date if present
  const items = [...data].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Roles, internships and projects that shaped my work.
        </p>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block" />

        <div className="space-y-8">
          {items.length === 0 && (
            <div className="rounded-lg border border-dashed border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30">
                  <BriefcaseIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <div className="font-semibold">No experiences yet</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Add entries from the admin panel to show your experience here.
                  </div>
                </div>
              </div>
            </div>
          )}

          {items.map((exp, i) => (
            <motion.div
              key={exp.id || i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="relative sm:pl-16"
            >
              {/* timeline dot for desktop */}
              <div className="hidden sm:block absolute left-3 top-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md" />
              </div>

              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Current badge (top-right) */}
                {exp.is_current && (
                  <span className="absolute -top-3 right-6 px-3 py-1 text-xs rounded-full bg-indigo-600 text-white shadow">
                    Current
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-indigo-50 dark:bg-indigo-900/20">
                        {/* If you later add logo_url, replace this icon with <img /> */}
                        <BriefcaseIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold leading-tight truncate">{exp.title}</h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {exp.organization} ·{" "}
                          <span className="opacity-90">
                            {exp.start_date ? exp.start_date.slice(0, 4) : ""}
                            {exp.is_current
                              ? " — Present"
                              : exp.end_date
                              ? ` — ${exp.end_date.slice(0, 4)}`
                              : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    )}
                  </div>

                  {/* small right meta on desktop */}
                  <div className="hidden md:flex flex-col items-end justify-start text-sm text-gray-500 dark:text-gray-400">
                    {exp.is_current ? (
                      <span className="text-sm px-3 py-1 rounded-full bg-green-50 text-green-700">Current</span>
                    ) : null}
                    <span className="mt-4 text-xs">{exp.order ? `#${exp.order}` : ""}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
