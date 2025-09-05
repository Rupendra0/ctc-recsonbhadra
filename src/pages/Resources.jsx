import React from "react";
import { FaGithub, FaCode, FaBook } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces , SiCodechef} from "react-icons/si";
import "./Page.css"; // keep existing styles

const Resources = () => {
  return (
    <div className="resources-section glass" data-aos="fade-up">
      <h2>Coding Resources</h2>
<p>Here are some recommended platforms & tools:</p>

<div className="resources-grid">
  <a href="https://leetcode.com" target="_blank" rel="noreferrer" data-aos="flip-up">
    <SiLeetcode className="resource-icon leetcode" />
    <span>LeetCode – DSA Practice</span>
  </a>
  <a href="https://github.com" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="100">
    <FaGithub className="resource-icon github" />
    <span>GitHub – Version Control</span>
  </a>
  <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="200">
    <SiGeeksforgeeks className="resource-icon gfg" />
    <span>GeeksForGeeks – Tutorials</span>
  </a>
  <a href="https://codeforces.com" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="300">
    <SiCodeforces className="resource-icon codeforces" />
    <span>Codeforces – Competitive Programming</span>
  </a>
  <a href="https://www.codechef.com" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="400">
      <SiCodechef className="resource-icon codechef" />
      <span>CodeChef</span>
    </a>
  <a href="https://devdocs.io/" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="500">
    <FaBook className="resource-icon docs" />
    <span>Docs – Official Documentation</span>
  </a>
  <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="600">
    <FaBook className="resource-icon docs" />
    <span>Striver’s A2Z DSA Sheet</span>
  </a>
  <a href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="700">
    <SiGeeksforgeeks className="resource-icon gfg" />
    <span>GFG Problem Practice</span>
  </a>
  <a href="https://atcoder.jp/" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="800">
    <SiCodeforces className="resource-icon codeforces" />
    <span>AtCoder – Competitive Programming</span>
  </a>
  <a href="https://www.interviewbit.com/" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="900">
    <FaBook className="resource-icon docs" />
    <span>InterviewBit – Coding & Interviews</span>
  </a>
  <a href="https://neetcode.io/" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="1000">
    <FaBook className="resource-icon docs" />
    <span>NeetCode – DSA Roadmap</span>
  </a>
  <a href="https://roadmap.sh/system-design" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="1100">
    <FaBook className="resource-icon docs" />
    <span>System Design Roadmap</span>
  </a>
  <a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="1200">
    <FaGithub className="resource-icon github" />
    <span>System Design Primer (GitHub)</span>
  </a>
  <a href="https://www.educative.io/courses/grokking-the-system-design-interview" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="1300">
    <FaBook className="resource-icon docs" />
    <span>Grokking System Design (Educative)</span>
  </a>
  <a href="https://www.designgurus.io/" target="_blank" rel="noreferrer" data-aos="flip-up" data-aos-delay="1400">
    <FaBook className="resource-icon docs" />
    <span>Design Gurus – Interview Prep</span>
  </a>
</div>
      
    </div>
  );
};

export default Resources;
