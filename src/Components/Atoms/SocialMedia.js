import React from "react";

function SocialMedia({socialNetwork}) {  
  console.log(socialNetwork.id);
  return (
    <div className={socialNetwork.id}>
      <div className="spinning-social-media">
        <i className={socialNetwork.icon}></i>
      </div>
    </div>
  );
}

export default SocialMedia;
