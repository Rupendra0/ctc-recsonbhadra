import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      {/* Logo */}
      <h1 className="logo">Community for Technology and Coding</h1>

      {/* Hamburger Menu */}
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/event" onClick={() => setIsOpen(false)}>Event</Link>
        </li>
        <li>
          <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
        </li>
        <li>
          <Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
