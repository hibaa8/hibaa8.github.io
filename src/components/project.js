
import React from "react";
import '../css/project.css';

const Project = ({ title, description, link }) => {
  return (
    <li className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      
    </li>
  );
};

export default Project;
