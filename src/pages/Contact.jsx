import React, { useState } from "react";
import "./Page.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we’ll get back to you soon!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="glass card">
      <h2>📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="4"
          value={form.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
