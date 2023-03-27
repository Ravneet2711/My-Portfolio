import { useState } from "react";
import "./Project.css";
import data from "./ProjectData.js";
// import img from "../../assets/project-1.png";

const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const [numOfProject, setNumOfProjects] = useState(3);
  const handleShow = () => {
    // setShowMore(!showMore);
    // setNumOfProjects(numOfProject);
    for (let i = 0; i < data.length; i++) {
      setShowMore(showMore);
      setNumOfProjects(numOfProject + data.length - 1);
    }
    setShowMore(!showMore);
  };
  const slice = data.slice(0, numOfProject);
  const ProjectData = slice.map((project) => {
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
  });

  return (
    <div id="projects">
      <h2 className="animated slide-in-left">Projects</h2>
      <div className="project-container">{ProjectData}</div>
      {!showMore ? (
        <button
          onClick={handleShow}
          style={{ display: "block", margin: "40px auto" }}
          className="btn primary"
        >
          Show More
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Project;
