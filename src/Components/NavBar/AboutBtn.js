import React from "react";

function AboutBtn(props) {
  
  return (
    <div id="about" className="static-about" onClick={props.onClick}>
      <h1>about me</h1>
    </div>
  )
}

export default AboutBtn