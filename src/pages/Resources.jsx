import React from "react";
import { FaGithub, FaCode, FaBook } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import "./Page.css"; // keep existing styles

const Resources = () => {
  return (
    <div className="resources-section glass" data-aos="fade-up">
      <h2>📚 Coding Resources</h2>
      <p>Here are some recommended platforms & tools:</p>

      <div className="resources-grid">
        <a href="https://leetcode.com" target="_blank" rel="noreferrer">
          <SiLeetcode className="resource-icon leetcode" />
          <span>LeetCode – DSA Practice</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="resource-icon github" />
          <span>GitHub – Version Control</span>
        </a>
        <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer">
          <SiGeeksforgeeks className="resource-icon gfg" />
          <span>GeeksForGeeks – Tutorials</span>
        </a>
        <a href="https://codeforces.com" target="_blank" rel="noreferrer">
          <SiCodeforces className="resource-icon codeforces" />
          <span>Codeforces – Competitive Programming</span>
        </a>
        <a href="https://devdocs.io/" target="_blank" rel="noreferrer">
          <FaBook className="resource-icon docs" />
          <span>Docs – Official Documentation</span>
        </a>
      </div>
    </div>
  );
};

export default Resources;
