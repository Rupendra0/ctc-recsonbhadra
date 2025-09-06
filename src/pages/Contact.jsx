import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Page.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdklyndj");

  if (state.succeeded) {
    return (
      <div className="glass card">
        <h2>📬 Contact Us</h2>
        <p className="success-message">✅ Thanks! Your message has been sent.</p>
        <h2><a href="http://github.com/Rupendra0/ctc-recsonbhadra" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color : "green" }}>Contribute Here</a></h2>
      </div>
    );
  }

  return (
    <div className="glass card">
      <h2>📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Button */}
        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
