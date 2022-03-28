import React from "react";

function Project({ project }) {
  return (
    <div
      className="project-item"
      onClick={() => window.open(project.href, "_blank")}
    >
      <div className="project-item-inner">
        <div className="project-item-front">
          <img src={project.src} alt={project.name}></img>
        </div>
        <div className="project-item-back">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
