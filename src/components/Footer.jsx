import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Any suggestion ?{" "}
        <a href="mailto:support@ctcclub.org" className="footer-link">
          Click here
        </a>{" "}
        or email us at{" "}
        <a href="mailto:support@ctcclub.org" className="footer-link">
          support@ctcclub.org
        </a>
      </p>
      <h3> <strong>Developers :</strong> Rupendra Gangwar & Aditya Agrahari </h3>
     <p>© 2025 CTC Club. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
