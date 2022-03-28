import "./App.css";
import React, { useState, useEffect } from "react";
import AboutBtn from "./Components/NavBar/AboutBtn";
import ProjectsBtn from "./Components/NavBar/ProjectsBtn";
import SkillBtn from "./Components/NavBar/SkillBtn";
import ContactsBtn from "./Components/NavBar/ContactsBtn";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts";

function App() {
  const [content, setContent] = useState("about");
  const [pervContent, setPervContent] = useState("");

  function changeContent(value) {
    setPervContent(content);
    setContent(value);
  }

  useEffect(() => {
    // Change styling and position of the active button and return inactive buttons to default
    const navButton = document.getElementById(content);
    const pervNavButton = document.getElementById(pervContent);
    if (pervContent === "") {
      navButton.classList.add("rotate-" + content);
    } else {
      navButton.classList.remove("rotate-back-" + content);
      navButton.classList.add("rotate-" + content);
      pervNavButton.classList.remove("rotate-" + pervContent);
      pervNavButton.classList.add("rotate-back-" + pervContent);
    }
  }, [content]);

  return (
    <div className="App">
      <AboutBtn onClick={() => changeContent("about")} />
      <ProjectsBtn onClick={() => changeContent("projects")} />
      <SkillBtn onClick={() => changeContent("skills")} />
      <ContactsBtn onClick={() => changeContent("contacts")} />
      <div id="content">
        {content === "about" ? (
          <AboutMe />
        ) : content === "projects" ? (
          <Projects />
        ) : content === "skills" ? (
          <Skills />
        ) : (
          <Contacts />
        )}
      </div>
    </div>
  );
}

export default App;
