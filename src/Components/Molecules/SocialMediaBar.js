import React from "react";
import SocialMedia from "../Atoms/SocialMedia";

function SocialMediaBar() {
  const socialMediaData = {
    gitHub: {
      id: "git-hub",
      icon: "fa-brands fa-github",
      href: "https://github.com/SemenovDeveloper"
    },
    vk: {
      id: "vk",
      icon: "fa-brands fa-vk",
      href: "https://vk.com/55ozon"
    },
    codePen: {
      id: "code-pen",
      icon: "fa-brands fa-codepen",
      href: "https://codepen.io/semenovufo"
    },
    freeCodeCamp: {
      id: "free-code-camp",
      icon: "fa-brands fa-free-code-camp",
      href: "https://www.freecodecamp.org/alexandersemenov"
    },
    stackOverflow: {
      id: "stackoverflow",
      icon: "fa-brands fa-stack-overflow",
      href: "https://stackoverflow.com/users/17095736/semenovufo"
    },
  }
  
  return (
    <div id="social-media-bar">
      <SocialMedia socialNetwork={socialMediaData.gitHub}/>
      <SocialMedia socialNetwork={socialMediaData.vk}/>
      <SocialMedia socialNetwork={socialMediaData.codePen}/>
      <SocialMedia socialNetwork={socialMediaData.freeCodeCamp}/>
      <SocialMedia socialNetwork={socialMediaData.stackOverflow}/>
    </div>
  )
}

export default SocialMediaBar;