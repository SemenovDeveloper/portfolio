import React from "react";

function Skills() {
  function rotate () {
    const element = document.getElementById("skills");
    element.classList.add("rotate-skills")
  }

  return (
    <div id="skills" className="static-skills" onClick={rotate}>
      <h1>skills</h1>
    </div>
  )
}

export default Skills