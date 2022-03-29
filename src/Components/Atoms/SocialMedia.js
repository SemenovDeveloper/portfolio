import React from "react";

function SocialMedia({ socialNetwork }) {
  function rotateBorder(command) {
    const border = document.getElementById(socialNetwork.id);
    if (command === "rotate") {
      border.classList.add("rotate-social-media");
    } else {
      border.classList.remove("rotate-social-media");
    }
  }

  return (
    <div
      className="social-media"
      onMouseOver={() => rotateBorder("rotate")}
      onMouseLeave={() => rotateBorder()}
      onClick={() => window.open(socialNetwork.href, "_blank")}
    >
      <div id={socialNetwork.id} className="spinning-social-media"></div>
      <i className={socialNetwork.icon}></i>
    </div>
  );
}

export default SocialMedia;
