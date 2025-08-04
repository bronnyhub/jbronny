import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/sidebar.jsx';

import Main from './components/sites/main.jsx';
import AboutMe from './components/sites/AboutMe.jsx';
import Projects from './components/sites/Projects.jsx';
import Contact from './components/sites/Contact.jsx';

const App = () => {
  const getComponentByPath = () => {
    switch (window.location.pathname.toLowerCase()) {
      case "/aboutme": return <AboutMe />;
      case "/projects": return <Projects />;
      case "/contact": return <Contact />;
      default: return <Main />;
    }
  };

  const [component, setComponent] = useState(getComponentByPath());

  useEffect(() => {
    const onPopState = () => {
      setComponent(getComponentByPath());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div>
      <Sidebar />
      {component}
    </div>
  );
};

export default App;
