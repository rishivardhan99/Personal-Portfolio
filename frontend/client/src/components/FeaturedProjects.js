// src/components/FeaturedProject.js
import React from "react";
import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  if (!project) return null;

  const techs = project.tech_stack ? project.tech_stack.split(",").map(s=>s.trim()).filter(Boolean) : [];

  return (
    <section id="featured" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-12"
      >
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:flex-1">
            <span className="uppercase text-sm opacity-90">Featured Project</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{project.title}</h2>
            <p className="mt-4 max-w-2xl opacity-90 text-md">{project.description || project.short_description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {techs.map((t,i)=>(
                <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-white text-sm">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {project.github && <a target="_blank" rel="noreferrer" href={project.github} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">GitHub</a>}
              {project.live && <a target="_blank" rel="noreferrer" href={project.live} className="px-4 py-2 bg-white rounded text-indigo-700 font-semibold">Live</a>}
            </div>
          </div>

          {project.cover_url && (
            <div className="mt-6 md:mt-0 md:w-1/3 overflow-hidden rounded-lg">
              <img src={project.cover_url} alt={project.title} className="w-full h-48 object-cover rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
