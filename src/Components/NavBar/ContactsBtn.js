import React from "react";

function ContactsBtn(props) {
  function rotate () {
    const element = document.getElementById("contacts");
    element.classList.add("rotate-contacts")
  }

  return (
    <div id="contacts" className="static-contacts" onClick={props.onClick}>
      <a>contacts</a>
    </div>
  )
}

export default ContactsBtn