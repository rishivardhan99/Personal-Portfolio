import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Rishi • All rights reserved</div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/rishivardhan99" className="social-btn icon-hover text-gray-700 dark:text-gray-200" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rishi-vardhan-700218245/" className="social-btn icon-hover text-gray-700 dark:text-gray-200" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="/" className="social-btn icon-hover text-gray-700 dark:text-gray-200" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
