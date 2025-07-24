import React, { Component } from 'react'
import Sidebar from './components/sidebar/sidebar.jsx'

import Main from './components/sites/main.jsx'
import AboutMe from './components/sites/AboutMe.jsx'
import Projects from './components/sites/Projects.jsx'
import Contact from './components/sites/Contact.jsx'

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Main />
      break
    case "/aboutme":
      component = <AboutMe />
      break
    case "/projects":
      component = <Projects />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (
    <div>
      <Sidebar />
      {component}
    </div>
  )
}

export default App