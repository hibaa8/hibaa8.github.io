import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-section">
          <h1>Hiba Altaf</h1>
          <b>
          <p>School: <span className="blue-txt">Columbia University</span></p>
          <p>Major: <span className="blue-txt">Computer Science</span></p>
          <p>Graduating Year: <span className="blue-txt">2027</span></p>
          </b>
          <p>
          Passionate about software development and eager to apply my skills in real-world projects. Currently seeking internships in software development—feel free to get in touch!
          </p>
          <div className="social-links">
            <a
              href="mailto:hibaaltaf98@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope size={30} />
            </a>
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
            href={process.env.PUBLIC_URL + "/resume.pdf"} 
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
