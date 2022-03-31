import React from "react";
import Project from "./Molecules/Project";

function Projects() {
  const projectsData = {
    clock: {
      name: "Pomodoro Clock",
      id: "pomodoro-clock",
      src: require("../assets/images/clock.png"),
      href: "https://semenovdeveloper.github.io/pomodoro-clock/",
      description:
        "Pomodoro Clock is a web application for managing your productivity.",
    },
    drums: {
      name: "Drum Machine",
      id: "drum-machine",
      src: require("../assets/images/drum-machine.png"),
      href: "https://semenovdeveloper.github.io/drum-machine/",
      description: "A drum-machine written in JavaScript and React framework",
    },
    calculator: {
      name: "Calculator",
      id: "calculator",
      src: require("../assets/images/calculator.png"),
      href: "https://semenovdeveloper.github.io/calculator-js/",
      description: "A simple calculator written in JavaScript",
    },
    marckdownPreviewer: {
      name: "Marckdown Previewer",
      id: "marckdown-previewer",
      src: require("../assets/images/marckdown-previewer.png"),
      href: "https://semenovdeveloper.github.io/react-marckdown-previewer/",
      description: "This app parse markdown to html and preview it.",
    },
    randomQuote: {
      name: "Random Quote Machine",
      id: "random-quotemachine",
      src: require("../assets/images/random-quote.png"),
      href: "https://semenovdeveloper.github.io/random-quote-machine-js/",
      description:
        "This App generete random quote and allows you post this quote on Twitter",
    },
  };

  return (
    <div id="projects-wrapper">
      <h2>A selection of stuff i've built</h2>
      <div id="project-items">
        <Project project={projectsData.clock} />
        <Project project={projectsData.drums} />
        <Project project={projectsData.calculator} />
        <Project project={projectsData.marckdownPreviewer} />
        <Project project={projectsData.randomQuote} />
      </div>
    </div>
  );
}

export default Projects;
