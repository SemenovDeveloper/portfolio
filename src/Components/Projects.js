import React from "react";
import Project from "./Molecules/Project";

function Projects () {
  return (
    <div id="projects-wrapper">
      <h2>Projects</h2>
      <div id="project-items">
        <Project id="calculator" name="Calculator"/>
        <Project id="pomodoro-clock" name="Pomodoro Clock"/>
        <Project id="readme-previewer" name="Readme Previewer"/>
        <Project id="drum-machine" name="Drum Machine"/>
      </div>
    </div>
  )
}

export default Projects