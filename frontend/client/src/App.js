// src/App.js
import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import FutureWorks from "./components/FutureWorks";

import {
  fetchExperience,
  fetchCertificates,
  fetchProjects,
} from "./api";

function App() {
  const [experience, setExperience] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]); // ✅ ADD THIS

  useEffect(() => {
    fetchExperience()
      .then(setExperience)
      .catch(console.error);

    fetchCertificates()
      .then(setCertificates)
      .catch(console.error);

    fetchProjects()               // ✅ FETCH PROJECTS ONCE
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background: `
            radial-gradient(800px 400px at 10% 10%, rgba(79,70,229,0.12), transparent),
            radial-gradient(600px 300px at 90% 90%, rgba(6,182,212,0.08), transparent)
          `,
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          <Hero />
          <About />

          {/* Experience BEFORE Skills */}
          <Experience data={experience} />

          <Skills />

          {/* Completed + Featured Projects */}
          <Projects projects={projects} />   {/* ✅ PASS DATA */}

          {/* Future / Planned Works */}
          <FutureWorks projects={projects} /> {/* ✅ NOW WORKS */}

          <Certificates data={certificates} />

          <Contact />
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
}

export default App;
