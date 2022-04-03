import "./App.css";
import React, { useState, useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";

function App() {
  const [content, setContent] = useState("about");
  const [pervContent, setPervContent] = useState("");

  function changeContent(value) {
    setPervContent(content);
    setContent(value);
  }

  // Change body backround color when page content is changed
  useEffect(() => {
    switch (content) {
      case "about":
        document.body.style.backgroundColor = "#F2D0A9"; // orange color
        break;
      case "projects":
        document.body.style.backgroundColor = "#99C1B9"; // opal color
        break;
      case "skills":
        document.body.style.backgroundColor = "#D88C9A"; // peach color
        break;
      case "contacts":
        document.body.style.backgroundColor = "#8E7DBE"; // purple color
    }
  }, [content]);

  return (
    <div className="App">
      <NavBar
        content={content}
        pervContent={pervContent}
        changeContent={changeContent}
      />
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
