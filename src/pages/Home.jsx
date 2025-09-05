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
          <h1>🚀 Welcome to CTC - REC Sonbhadra</h1>
          <p>
            Community for Technology and Coding – Learn, Build, and Grow Together.
          </p>
          <button className="cta-btn" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://chat.whatsapp.com/GXtNVWbiDFi1IkRotX9yOW"  target="_blank" >Join the Club</a>
          </button>
        </div>
      </div>

    

      {/* About Section */}
      <section className="section glass" id="about" data-aos="fade-right">
        <h2>💡 About Us</h2>
<p>
  We are a vibrant student-driven community passionate about 
  <strong>coding, problem-solving, and technology</strong>. 
  At CTC, we believe in <em>learning by doing</em> — whether it’s 
  building projects, cracking coding challenges, or collaborating 
  on real-world tech problems. 
</p>

<p>
  Our mission is to create a supportive ecosystem where 
  students can explore new technologies, sharpen their 
  <strong>Data Structures & Algorithms</strong> skills, and grow 
  into confident developers and innovators. 
</p>

<p>
  🌟 What you’ll find at CTC:
</p>
<ul>
  <li>🤝 Peer-to-peer <strong>mentorship</strong> and collaboration</li>
  <li>🎯 Regular <strong>coding contests</strong> & debugging challenges</li>
  <li>🛠 Hands-on <strong>mini projects</strong> & hackathons</li>
  <li>📚 Curated <strong>learning resources</strong> & workshops</li>
  <li>🚀 Opportunities to showcase your <strong>skills & creativity</strong></li>
</ul>

<p>
  Whether you’re a beginner taking your first steps in coding or an 
  experienced coder aiming for <strong>competitive programming excellence</strong>, 
  CTC is the place where you can learn, share, and grow together. 
</p>

      </section>

      {/* Events Preview */}
      <section className="section" id="events" data-aos="fade-left">
        <h2>🎉 Upcoming Events</h2>
        <div className="card-grid">
          <div className="glass small-card" data-aos="zoom-in">
            <h3>First-Year Induction</h3>
            <p>Welcoming and introducing first-year students to the club</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Second-Year Induction</h3>
            <p>Engaging and onboarding second-year students into the community</p>
          </div>
          <div className="glass small-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Guest Lecture</h3>
            <p>Inspiring talk from Sofware Engineer from Google</p>
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
