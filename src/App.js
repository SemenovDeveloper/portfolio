import './App.css';
import React, { useState, useEffect } from 'react';
import AboutBtn from './Components/NavBar/AboutBtn';
import ProjectsBtn from './Components/NavBar/ProjectsBtn';
import SkillBtn from './Components/NavBar/SkillBtn';
import ContactsBtn from './Components/NavBar/ContactsBtn';

function App() {
  const [content, setContent] = useState('about');
  const [pervContent, setPervContent] = useState('');

  function changeContent (value) {
    setPervContent(content);
    setContent(value);
  }
  
  useEffect(() => {
    // Change styling and position of the active button and return inactive buttons to default style and position
    const navButton = document.getElementById(content);
    const pervNavButton = document.getElementById(pervContent);
    if (pervContent === "") {
      navButton.classList.add('rotate-' + content);
    } else {
      navButton.classList.remove('rotate-back-' + content)
      navButton.classList.add('rotate-' + content);
      pervNavButton.classList.remove('rotate-' + pervContent);
      pervNavButton.classList.add('rotate-back-' + pervContent);
    }
  }, [content])

  return (
    <div className='App'>
      <AboutBtn onClick={() => changeContent('about')}/>
      <ProjectsBtn onClick={() => changeContent('projects')}/>
      <SkillBtn onClick={() => changeContent('skills')}/>
      <ContactsBtn onClick={() => changeContent('contacts')}/>      
      <div id='content'>{content}</div>
    </div>
  );
}

export default App;
