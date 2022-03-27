import React from "react";

function Project({id ,name, src}) {
  return (
  <div className="project-item">
    <div className="project-item-inner">
    <div className="project-item-front">
        <img src={src} alt="Avatar">
        </img>
      </div>
      <div className="project-item-back">
        <h1>John Doe</h1> 
        <p>Architect Engineer</p> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  )
}

export default Project