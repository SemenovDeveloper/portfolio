import React from "react";

function ProjectsBtn(props) {
  
  return (
    <div id="projects" className="static-projects" onClick={props.onClick}>
      <a>projects</a>
    </div>
  )
}


export default ProjectsBtn