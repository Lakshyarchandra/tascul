// src/components/Footer.js
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons
import "../components/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Tascul. All Rights Reserved.</p>
      <div className="social-links">
        <a
          href="https://x.com/i/flow/login?redirect_after_login=%2Ftascul_official"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/tasculofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/tascul/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
