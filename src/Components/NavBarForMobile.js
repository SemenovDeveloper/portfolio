import React from "react";

function NavBarForMibile({ changeContent }) {
  return (
    <div id="mobile-navbar">
      <ul>
        <li onClick={() => changeContent("about")}>
          <i class="fa-solid fa-house"></i>
        </li>
        <li onClick={() => changeContent("projects")}>Projects</li>
        <li onClick={() => changeContent("skills")}>Skills</li>
        <li onClick={() => changeContent("contacts")}>
          <i class="fa-solid fa-at"></i>
        </li>
      </ul>
    </div>
  );
}

export default NavBarForMibile;
