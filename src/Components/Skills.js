import React from "react";
import Skill from "./Molecules/Skill";

function Skills() {
  const mySkills = {
    HTML: {
      id: "html",
      source: require("../assets/icons/icons8-html-5-80.png"),
      name: "HTML5"
    },
    CSS: {
      id: "css",
      source: require("../assets/icons/icons8-css3-80.png"),
      name: "CSS3"
    },
    javaScript: {
      id: "js",
      source: require("../assets/icons/icons8-javascript-80.png"),
      name: "JavaScript"
    },    
    react: {
      id: "reactjs",
      source: require("../assets/icons/icons8-react-80.png"),
      name: "React.JS"
    },    
    redux: {
      id: "redux",
      source: require("../assets/icons/icons8-redux-80.png"),
      name: "Redux.JS"
    },    
    jQuery: {
      id: "jquery",
      source: require("../assets/icons/icons8-jquery-80.png"),
      name: "JQuery"
    },   
    bootstrap: {
      id: "bootstrap",
      source: require("../assets/icons/icons8-bootstrap-80.png"),
      name: "Bootstrap"
    },
    SASS: {
      id: "sass",
      source: require("../assets/icons/icons8-sass-80.png"),
      name: "SASS"
    },
    git: {
      id: "git",
      source: require("../assets/icons/icons8-git-80.png"),
      name: "Git"
    },
    gitHub: {
      id: "github",
      source: require("../assets/icons/icons8-github-80.png"),
      name: "Github"
    },  
  }
  return (
  <div id="skills-page-wrapper">
    <h2>My toolbox & things i can do.</h2>
    <p>The skills, tools and technologies I use to bring your products to life:</p>
    <div className="skills-bar">
      <Skill skill={mySkills.HTML}/>
      <Skill skill={mySkills.CSS}/>
      <Skill skill={mySkills.javaScript}/>
      <Skill skill={mySkills.react}/>
      <Skill skill={mySkills.redux}/>
      <Skill skill={mySkills.bootstrap}/>
      <Skill skill={mySkills.jQuery}/>
      <Skill skill={mySkills.SASS}/>
      <Skill skill={mySkills.git}/>
      <Skill skill={mySkills.gitHub}/>
    </div>
    <h2>Currently working on:</h2>
    <p>Improving my skills in, and understanding of vanilla JavaScript and React. Taking my first steps in Node.js.</p>
  </div>
  )
}

export default Skills;
