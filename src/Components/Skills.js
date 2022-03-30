import React from "react";
import Skill from "./Molecules/Skill";

function Skills() {
  const mySkills = {
    HTML: {
      id: "html",
      source: require("../assets/icons/icons8-html-5-70.png"),
      name: "HTML5"
    },
    CSS: {
      id: "css",
      source: require("../assets/icons/icons8-css-70.png"),
      name: "CSS3"
    },
    javaScript: {
      id: "js",
      source: require("../assets/icons/icons8-js-70.png"),
      name: "JavaScript"
    },    
    react: {
      id: "reactjs",
      source: require("../assets/icons/icons8-react-70.png"),
      name: "React.JS"
    },    
    redux: {
      id: "redux",
      source: require("../assets/icons/icons8-redux-70.png"),
      name: "Redux.JS"
    },    
    jQuery: {
      id: "jquery",
      source: require("../assets/icons/icons8-jquery-70.png"),
      name: "JQuery"
    },   
    bootstrap: {
      id: "bootstrap",
      source: require("../assets/icons/icons8-bootstrap-70.png"),
      name: "Bootstrap"
    },
    SASS: {
      id: "sass",
      source: require("../assets/icons/icons8-sass-70.png"),
      name: "SASS"
    },
    git: {
      id: "git",
      source: require("../assets/icons/icons8-git-70.png"),
      name: "Git"
    },
    gitHub: {
      id: "github",
      source: require("../assets/icons/icons8-github-70.png"),
      name: "Github"
    },  
  }
  return (
  <div id="skills-page-wrapper">
    <h2>My toolbox & things i can do:</h2>
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
  </div>
  )
}

export default Skills;
