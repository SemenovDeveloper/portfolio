import React from "react";

function Project({id ,name}) {
  return (
    <div className="project" id={id}><h4>{name}</h4></div>
  )
}

export default Project