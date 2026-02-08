import React from "react";
import { MdEmail } from "react-icons/md";

export default function FloatingContact() {
  const toContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button aria-label="Contact" onClick={toContact} className="floating-contact">
      <MdEmail size={24} />
    </button>
  );
}
