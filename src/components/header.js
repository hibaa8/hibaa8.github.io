import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-section">
          <h1>Hiba Altaf</h1>
          <p>2nd year Computer Science Student at Columbia University.</p>
          <p>Passionate about software development. Eager to continue learning and making impactful applications.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/hiba-altaf-5aa2a21b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/hibaa8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <a
            href={process.env.PUBLIC_URL + "/resume.pdf"} // Replace with your actual resume path
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="image-section">
          <img
            src={process.env.PUBLIC_URL + "/profile.png"}
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
