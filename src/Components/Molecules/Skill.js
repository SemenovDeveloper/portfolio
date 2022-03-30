import React from "react";

function Skill({skill}) {
  return (
    <div className="skill-wrapper">
      <img src={skill.source}></img>
      <p>{skill.name}</p>
    </div>
  )
}
export default Skill;