import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/sidebar.jsx';

import Main from './pages/Main/main.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';

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
