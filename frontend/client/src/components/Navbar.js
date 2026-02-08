// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import API from "../api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // fetch About to get resume link (safe to fail)
    API.get("about/")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setResumeUrl(res.data[0].resume_url);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="/" className="font-extrabold text-lg">
              Rishi
            </a>

            <nav className="hidden md:flex gap-5 text-sm">
              <a href="#about" className="hover:text-indigo-600">
                About
              </a>
              <a href="#experience" className="hover:text-indigo-600">
                Experience
              </a>
              <a href="#skills" className="hover:text-indigo-600">
                Skills
              </a>
              <a href="#projects" className="hover:text-indigo-600">
                Projects
              </a>
              <a href="#contact" className="hover:text-indigo-600">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Resume button (if available) */}
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-block px-3 py-2 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Resume
              </a>
            )}

            {/* Dark mode toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(!open)}>
              {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" className="block">
              About
            </a>
            <a href="#experience" className="block">
              Experience
            </a>
            <a href="#skills" className="block">
              Skills
            </a>
            <a href="#projects" className="block">
              Projects
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
            {resumeUrl && (
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="block">
                Download Resume
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
