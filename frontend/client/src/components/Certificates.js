// src/components/Certificates.js
import React from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Certificates({ data = [] }) {
  // group by category (or "Other")
  const grouped = (data || []).reduce((acc, c) => {
    const k = c.category?.trim() || "Other";
    acc[k] = acc[k] || [];
    acc[k].push(c);
    return acc;
  }, {});

  const cats = Object.keys(grouped);

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Certificates & Achievements</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Verified courses, competition results and awards grouped by category.
        </p>
      </div>

      <div className="space-y-8">
        {cats.length === 0 && (
          <div className="rounded-lg border border-dashed border-gray-200 dark:border-gray-700 p-6 text-gray-600 dark:text-gray-300">
            No certificates yet — Add them from the admin panel.
          </div>
        )}

        {cats.map((cat) => (
          <div key={cat}>
            <h3 className="text-lg font-semibold mb-4">{cat}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[cat].map((c, idx) => (
                <div key={c.id || idx} className="relative">
                  {/* left accent bar */}
                  <div className="absolute left-0 top-3 bottom-3 w-1 rounded bg-indigo-500/70" />

                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(16,24,40,0.08)" }}
                    className="pl-6 flex items-start gap-4 p-4 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20">
                        <CheckBadgeIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-medium text-sm">{c.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {c.issuer} · {c.year}
                          </div>
                        </div>

                        {c.credential_url && (
                          <a
                            href={c.credential_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs px-3 py-1 rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                          >
                            View
                          </a>
                        )}
                      </div>
                      {c.note && <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">{c.note}</div>}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
