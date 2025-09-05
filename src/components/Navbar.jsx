import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass" aria-label="Primary">
      {/* Logo */}
     <div className="logo-container">
  <a href="#">
    <img src={logo} alt="Logo" className="logo-img" />
  </a>
</div>

      {/* Hamburger */}
      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/event" onClick={() => setIsOpen(false)}>Event</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to="/resources" onClick={() => setIsOpen(false)}>Resources</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </li>

        {/* Join Now Button */}
        <li className="mobile-join">
          <a
            href="https://chat.whatsapp.com/GXtNVWbiDFi1IkRotX9yOW"
            target="_blank"
            rel="noopener noreferrer"
            className="join-btn"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
