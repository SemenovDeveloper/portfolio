import React from "react";

function Project({id ,name, src, href}) {
  return (
  <div className="project-item" onClick={()=> window.open(href, "_blank")} >
    <div className="project-item-inner">
    <div className="project-item-front">
        <img src={src} alt="Avatar">
        </img>
      </div>
      <div className="project-item-back">
        <h3>{name}</h3> 
        <p>Architect Engineer</p> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
  )
}

export default Project