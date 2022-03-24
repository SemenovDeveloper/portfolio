import React from "react";

function Contacts(props) {
  function rotate () {
    const element = document.getElementById("contacts");
    element.classList.add("rotate-contacts")
  }

  return (
    <div id="contacts" className="static-contacts" onClick={props.onClick}>
      <h1>contacts</h1>
    </div>
  )
}

export default Contacts