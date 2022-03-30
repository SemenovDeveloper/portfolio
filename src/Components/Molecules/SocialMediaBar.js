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
    linkedin: {
      id: "linkedin",
      icon: "fa-brands fa-linkedin",
      href: "https://www.linkedin.com/in/semenov-dev/"
    },
  }
  
  return (
    <div id="social-media-bar">
      <SocialMedia socialNetwork={socialMediaData.linkedin}/>      
      <SocialMedia socialNetwork={socialMediaData.gitHub}/>
      <SocialMedia socialNetwork={socialMediaData.vk}/>
      <SocialMedia socialNetwork={socialMediaData.codePen}/>
      <SocialMedia socialNetwork={socialMediaData.freeCodeCamp}/>
      
    </div>
  )
}

export default SocialMediaBar;