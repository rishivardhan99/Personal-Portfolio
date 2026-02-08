import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// initialize theme from localStorage (before React mounts)
const saved = localStorage.getItem('theme'); // 'dark' or 'light' or null
if (saved === 'dark') {
  document.documentElement.classList.add('dark');
} else if (saved === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  // default: respect user's system preference
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
