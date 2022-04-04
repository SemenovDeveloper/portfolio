import "./App.css";
import React, { useState, useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import NavBarForMobile from "./Components/NavBarForMobile";

function App() {
  const [content, setContent] = useState("about");  
  const [pervContent, setPervContent] = useState(""); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  function changeContent(value) {
    setPervContent(content);
    setContent(value);
  }

  //Сhanges layout depending on screen width 
  const isMobileHanlder= () => {
    const width = window.innerWidth;
    setIsMobile(width < 992);
  };
  
  useEffect(() => {
    window.onresize = isMobileHanlder;
  }, [])

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
      {isMobile
        ? <NavBarForMobile changeContent={changeContent} />
        : <NavBar
            content={content}
            pervContent={pervContent}
            changeContent={changeContent}
          />
      }
      <div id="content">
        {content === "about" 
          ? <AboutMe />
          : content === "projects" 
            ? <Projects />
            : content === "skills" 
              ? <Skills />
              : <Contacts />
        }
      </div>
    </div>
  );
}

export default App;
