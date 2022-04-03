import React, { useEffect } from "react";
import AboutBtn from "./NavBarBtns/AboutBtn";
import ProjectsBtn from "./NavBarBtns/ProjectsBtn";
import SkillsBtn from "./NavBarBtns/SkillsBtn";
import ContactsBtn from "./NavBarBtns/ContactsBtn";

function NavBar({ content, pervContent, changeContent }) {
  // Change styling and position of the active navigation button and return inactive buttons to default
  useEffect(() => {
    const navButton = document.getElementById(content);
    const pervNavButton = document.getElementById(pervContent);
    if (pervContent === "") {
      navButton.classList.add("rotate-" + content);
    } else {
      navButton.classList.remove("rotate-back-" + content);
      navButton.classList.add("rotate-" + content);
      pervNavButton.classList.remove("rotate-" + pervContent);
      pervNavButton.classList.add("rotate-back-" + pervContent);
    }
  }, [content]);

  return (
    <>
      <AboutBtn onClick={() => changeContent("about")} />
      <ProjectsBtn onClick={() => changeContent("projects")} />
      <SkillsBtn onClick={() => changeContent("skills")} />
      <ContactsBtn onClick={() => changeContent("contacts")} />
    </>
  );
}

export default NavBar;
