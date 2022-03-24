import './App.css';
import React, { useState, useEffect } from 'react';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skill';
import Contacts from './Components/Contacts';

function App() {
  const [pageContent, setPageContent] = useState('Test');
  
  useEffect(() => {
    const about = document.getElementById('about');
    const contacts = document.getElementById('contacts');
    switch (pageContent) {
      case 'about':
        about.classList.add('rotate-about');
        contacts.classList.remove('rotate-contacts');
        console.log(contacts.classList);
        break;
      case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
      case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
      case 'contacts':
        contacts.classList.add('rotate-contacts');
        about.classList.remove('rotate-about');
        break;
      default:
        console.log('Sorry, we are out of ' + '.');        
    }    
  }, [pageContent])

  return (
    <div className='App'>
      <div id='content'>{pageContent}</div>
      <About onClick={() => setPageContent('about')}/>
      <Projects />
      <Skills />
      <Contacts onClick={() => setPageContent('contacts')}/>
    </div>
  );
}

export default App;
