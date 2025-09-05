import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Need help?{" "}
        <a href="mailto:support@ctcclub.org" className="footer-link">
          Click here
        </a>{" "}
        or email us at{" "}
        <a href="mailto:support@ctcclub.org" className="footer-link">
          support@ctcclub.org
        </a>
      </p>
      <p>© 2025 CTC Club. All rights reserved.</p>
      <p>
        <strong>Developers :</strong> Aditya Agrahari & Rupendra Gangwar
      </p>
    </footer>
  );
}

export default Footer;
