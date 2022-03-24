import React from "react";

function About(props) {
  // function rotate () {
  //   const element = document.getElementById("about-me");
  //   element.classList.add("rotate-about");
  // }

  return (
    <div id="about" className="static-about" onClick={props.onClick}>
      <h1>about me</h1>
    </div>
  )
}

export default About