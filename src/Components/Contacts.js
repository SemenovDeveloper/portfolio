import React from "react";

function Contacts() {
  function rotate () {
    const element = document.getElementById("contacts");
    element.classList.add("rotate-contacts")
  }

  return (
    <div id="contacts" className="static-contacts" onClick={rotate}>
      <h1>Contacts</h1>
    </div>
  )
}

export default Contacts