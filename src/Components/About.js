import React from "react";

function About() {
  function rotate () {
    const element = document.getElementById("about-me");
    element.classList.add("rotate-about")
  }

  return (
    <div id="about-me" className="static-about" onClick={rotate}>
      <h1>About me</h1>
    </div>
  )
}

export default About