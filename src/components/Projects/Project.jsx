import React from "react";
import "./Project.css";
import data from "./ProjectData.js";
// import img from "../../assets/project-1.png";

const Project = () => {
  console.log(data);
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {data.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <a href={project.demo}>
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <div className="project-links">
                <div className="demo-link">
                  <a href={project.demo}>Demo</a>
                </div>
                <div className="git-link">
                  <a href={project.github}>Github</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
