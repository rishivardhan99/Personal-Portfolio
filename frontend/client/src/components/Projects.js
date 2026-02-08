// src/components/Projects.js
import React, { useEffect, useState } from "react";
import API from "../api";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    API.get("projects/")
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, []);

  // ✅ CORRECT FILTERING
  const featured = projects.find(
    (p) => p.featured && p.status !== "planned"
  );

  const others = projects.filter(
    (p) => !p.featured && p.status !== "planned"
  );

  return (
    <section id="projects" className="py-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-6"
      >
        Projects
      </motion.h2>

      {/* ⭐ FEATURED PROJECT */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="mb-3 text-sm uppercase tracking-widest text-indigo-600 font-semibold">
            Featured Project
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left */}
              <div>
                <h3 className="text-3xl font-extrabold mb-4">
                  {featured.title}
                </h3>

                <p className="text-white/90 mb-6 leading-relaxed">
                  {featured.description || featured.short_description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-white text-gray-900 rounded font-medium hover:bg-gray-100"
                    >
                      GitHub
                    </a>
                  )}

                  {featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-white rounded font-medium hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(featured)}
                    className="px-4 py-2 border border-white rounded font-medium hover:bg-white/10"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Right image */}
              {featured.cover_url && (
                <div className="flex items-center justify-center">
                  <img
                    src={featured.cover_url}
                    alt={featured.title}
                    className="rounded-xl shadow-lg max-h-64 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* 🔹 OTHER PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.06 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {others.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={() => setSelected(p)}
          />
        ))}
      </motion.div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
