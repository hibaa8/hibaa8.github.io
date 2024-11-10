import React from "react";
import Project from "./project";
import '../css/projectlist.css';

const ProjectList = () => {
  const projects = [
    {
      title: "Static Analysis for False Sharing Bugs with LLM (in progress)",
      description: "Training Meta Llama 3.1 to detect and correct false sharing memory bugs in code benchmarks using prompt engineering. Link can be shared by request; github repository is currently private since this is ongoing research.",
      link: "",
    },
    {
      title: "Fabrich",
      description: "fabrich is an iOS app that provides sustainable clothing alternatives for a given clothing item and provides a feed of recommendations based on their past purchases",
      link: "https://github.com/hibaa8/divhacks/tree/main",
      link2:null
    },
    {
      title: "HTTP Web Server",
      description: "Developed a multithreaded HTTP web server in C to handle static file requests and integrate with an external MDB lookup service, efficiently processing dynamic queries and displaying results through a web interface.",
      link: "https://gist.github.com/hibaa8/7df06948bb99cdacbc1c7cd9f1efae50",
      link2:null
    },
    {
      title: "NASA Micro-g Neutral Buoyancy Experiment Object Detection System",
      description: "As part of the Columbia Space Initiative, I worked with a team to create an object detection system for life preserver units in order to support the NASA Orion mission. Created a balanced training dataset, fine-tuned the YOLOv8 model through Roboflow, streamed live data from GoPro to Jetson Nano, and deployed model for inferencing.",
      link: "https://drive.google.com/file/d/1z7YpSzDpREDAXN_CebcnCaQ-td-3xoOP/view?usp=sharing"
    },
    {
      title: "Brain Teaser",
      description: "A Java GUI application using Swing and AWT, featuring three games: an arithmetic quiz with randomly generated math problems, a memory game with card pair matching, and a randomized crossword puzzle generator",
      link: "https://github.com/hibaa8/Brain-Teaser"
    },
    {
      title: "Brick-Breaker",
      description: "A modified recreation of the popular Brick Breaker game with increased difficulty and altered design.",
      link: "https://github.com/hibaa8/Brick-Breaker/tree/main",
    },
    {
      title: "Agent Code",
      description: "A CS e-learning platform. Created for my first hackathon at Google Code Next, served as a learning resource for student organizations in my high school.",
      link: "https://github.com/hibaa8/agent-code-platform",
    },

  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
