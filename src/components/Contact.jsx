// Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Contact form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-[80vh] bg-[#391811] flex flex-col items-center justify-center px-6 py-16 text-[#ffcc80]">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">📩 Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#7b524b] p-8 rounded-2xl shadow-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#391810] placeholder-[#ffcc80] text-[#ffcc80] border-none outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#391810] placeholder-[#ffcc80] text-[#ffcc80] border-none outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#391810] placeholder-[#ffcc80] text-[#ffcc80] border-none outline-none resize-none h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-[#ffcc80] text-[#4e342e] font-bold py-3 rounded-lg hover:bg-[#e6b25c] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
