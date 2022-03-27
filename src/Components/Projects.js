import React from "react";
import Project from "./Molecules/Project";

function Projects () {
  const projectData ={
    clock: {
      name: 'Pomodoro Clock',
      id: "pomodoro-clock",
      src: require("../assets/images/clock.png"),
      href: "https://semenovdeveloper.github.io/pomodoro-clock/"
    },
    drums: {
      name: 'Drum Machine',
      id: "drum-machine",
      src: require("../assets/images/drum-machine.png"),
      href: "https://semenovdeveloper.github.io/drum-machine/"
    },
    calculator: {
      name: 'Calculator',
      id: "calculator",
      src: require("../assets/images/calculator.png"),
      href: "https://semenovdeveloper.github.io/calculator-js/"
    },
    marckdownPreviewer: {
      name: 'Marckdown Previewer',
      id: "marckdown-previewer",
      src: require("../assets/images/marckdown-previewer.png"),
      href: "https://semenovdeveloper.github.io/react-marckdown-previewer/"
    },
    randomQuote: {
      name: 'Random Quote Machine',
      id: "random-quotemachine",
      src: require("../assets/images/random-quote.png"),
      href: "https://semenovdeveloper.github.io/random-quote-machine-js/"
    }
  }

  return (
    <div id="projects-wrapper">
      <h2>Projects</h2>
      <div id="project-items">
        <Project 
          id={projectData.clock.id}
          name={projectData.clock.name}
          src={projectData.clock.src}
          href={projectData.clock.href}
        />
        <Project 
          id={projectData.drums.id}
          name={projectData.drums.name}
          src={projectData.drums.src}
          href={projectData.drums.href}
        />
        <Project 
          id={projectData.calculator.id}
          name={projectData.calculator.name}
          src={projectData.calculator.src}
          href={projectData.calculator.href}
        />
        <Project 
          id={projectData.marckdownPreviewer.id}
          name={projectData.marckdownPreviewer.name}
          src={projectData.marckdownPreviewer.src}
          href={projectData.marckdownPreviewer.href}
        />
        <Project 
          id={projectData.randomQuote.id}
          name={projectData.randomQuote.name}
          src={projectData.randomQuote.src}
          href={projectData.randomQuote.href}
        />
      </div>
    </div>
  )
}

export default Projects