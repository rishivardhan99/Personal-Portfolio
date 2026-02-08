import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function ProjectModal({ project, onClose }) {
  const images =
    project.images?.length
      ? project.images.map((i) => i.image_url)
      : project.cover_url
      ? [project.cover_url]
      : [];

  const [idx, setIdx] = useState(0);

  const prev = () =>
    setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  /* 🔒 LOCK BACKGROUND SCROLL */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  /* ⌨️ KEYBOARD CONTROLS */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative w-[95vw] max-w-6xl bg-white dark:bg-[#0b1220] rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60"
          aria-label="Close"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="relative bg-black">
            {images.length > 0 && (
              <img
                src={images[idx]}
                alt={project.title}
                className="w-full h-[520px] object-cover"
              />
            )}

            {/* Overlay info */}
            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-2xl font-bold text-white">
                {project.title}
              </h2>
              {project.short_description && (
                <p className="text-gray-200 mt-1">
                  {project.short_description}
                </p>
              )}
            </div>

            {/* Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* DETAILS SIDE */}
          <div className="p-8 space-y-6 overflow-y-auto max-h-[520px]">
            {project.description && (
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            )}

            {/* Tech Stack */}
            {project.tech_stack && (
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.split(",").map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-primary-600/10 text-primary-600"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 pt-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    onClick={() => setIdx(i)}
                    src={img}
                    alt=""
                    className={`w-20 h-14 rounded cursor-pointer object-cover border-2 transition ${
                      i === idx
                        ? "border-primary-600"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
