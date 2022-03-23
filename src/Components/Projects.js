import React from "react";

function Projects() {
  function rotate () {
    const element = document.getElementById("projects");
    element.classList.add("rotate-projects")
  }

  return (
    <div id="projects" className="static-projects" onClick={rotate}>
      <h1>Projects</h1>
    </div>
  )
}

export default Projects