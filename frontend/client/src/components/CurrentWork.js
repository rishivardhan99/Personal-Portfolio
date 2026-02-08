// src/components/CurrentWork.js
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function CurrentWork({ text }) {
  if (!text) return null;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
      <div className="rounded-full inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
        <SparklesIcon className="w-5 h-5 text-yellow-500" />
        <span className="text-sm text-gray-700 dark:text-gray-200">{text}</span>
      </div>
    </div>
  );
}
