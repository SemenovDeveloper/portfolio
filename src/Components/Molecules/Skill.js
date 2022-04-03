import React from "react";

function Skill({ skill }) {
  return (
    <div className="skill-wrapper">
      <img src={skill.source} alt={skill.name} width="80px" height="80px"></img>
      <p>{skill.name}</p>
    </div>
  );
}
export default Skill;
