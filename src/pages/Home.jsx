import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import "./Page.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero" data-aos="fade-up">
        <div className="hero-content glass">
          <h1>🚀 Welcome to CTC</h1>
          <p>
            Community for Technology and Coding – Learn, Build, and Grow Together.
          </p>
          <button className="cta-btn" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://chat.whatsapp.com/GXtNVWbiDFi1IkRotX9yOW">Join the Club</a>
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="section glass" id="about" data-aos="fade-right">
        <h2>💡 About Us</h2>
        <p>
          We are a student-driven community passionate about coding, problem-solving,
          and technology. At CTC, you’ll find workshops, contests, projects, and 
          mentorship to help you grow as a coder and innovator.
        </p>
      </section>

      {/* Events Preview */}
      <section className="section" id="events" data-aos="fade-left">
        <h2>🎉 Upcoming Events</h2>
        <div className="card-grid">
          <div className="glass small-card" data-aos="zoom-in">
            <h3>Weekly Coding Contest</h3>
            <p>Sharpen your skills every Sunday.</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Debugging Challenge</h3>
            <p>Fix tricky bugs & boost problem-solving.</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Monthly Mini Project</h3>
            <p>Build real-world apps with peers.</p>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="section" id="resources" data-aos="fade-up">
        <h2>📚 Resources</h2>
        <div className="resources-grid preview">
          <a href="https://leetcode.com" target="_blank" rel="noreferrer" data-aos="flip-up">
            <SiLeetcode className="resource-icon leetcode" />
            <span>LeetCode</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="100">
            <FaGithub className="resource-icon github" />
            <span>GitHub</span>
          </a>
          <a href="https://codeforces.com" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="200">
            <SiCodeforces className="resource-icon codeforces" />
            <span>Codeforces</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
