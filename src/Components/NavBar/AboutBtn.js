import React from "react";

function AboutBtn(props) {
  
  return (
    <div id="about" className="static-about" onClick={props.onClick}>
      <a>about me</a>
    </div>
  )
}

export default AboutBtn