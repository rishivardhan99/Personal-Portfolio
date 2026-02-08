import React, { useState } from "react";
import API from "../api";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await API.post("contact/", form);
      alert("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Failed to send");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      <motion.h2 initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">
        Contact
      </motion.h2>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.45 }} className="max-w-5xl mx-auto border border-gray-300 dark:border-gray-700 rounded-xl shadow bg-white dark:bg-gray-900 overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* LEFT FORM */}
          <div className="p-8">
            <form onSubmit={submit} className="space-y-4">
              <input
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 border rounded bg-transparent border-gray-300 dark:border-gray-700"
              />

              <input
                placeholder="Email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 border rounded bg-transparent border-gray-300 dark:border-gray-700"
              />

              <input
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full p-3 border rounded bg-transparent border-gray-300 dark:border-gray-700"
              />

              <textarea
                placeholder="Message"
                rows="5"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 border rounded bg-transparent border-gray-300 dark:border-gray-700"
              />

              <button disabled={submitting} className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded transition">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT INFO PANEL */}
          <motion.div initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="p-8 bg-gray-50 dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Let’s connect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Feel free to reach out for projects, collaborations, or just a friendly hello.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 border rounded border-gray-300 dark:border-gray-700">
                <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                <span className="text-sm">admin@test.com</span>
              </div>

              <div className="flex items-center gap-3 p-3 border rounded border-gray-300 dark:border-gray-700">
                <MapPinIcon className="w-5 h-5 text-primary-600" />
                <span className="text-sm">Hyderabad, India</span>
              </div>

              <div className="p-3 border rounded border-gray-300 dark:border-gray-700">
                <div className="text-sm font-medium mb-2">Social</div>

                <div className="flex items-center gap-3">
                  <a href="#" aria-label="GitHub" className="icon-hover social-btn text-gray-700 dark:text-gray-200">
                    <FaGithub />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="icon-hover social-btn text-gray-700 dark:text-gray-200">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="Instagram" className="icon-hover social-btn text-gray-700 dark:text-gray-200">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* small note */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              I usually reply within 24–48 hours. Thanks for reaching out.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
