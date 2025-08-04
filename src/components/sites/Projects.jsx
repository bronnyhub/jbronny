import React from 'react';
import './Projects.css';
import './main.css'
import Card from './card.jsx';

function Projects() {

    const handleClick = () => console.log('Project clicked!');

  return (
    <div className='projects'>
      <h1 className='main-text'>Projects</h1>
      <p className='main-text'>Here you can find a list of my projects.</p>
      <div className='project-list'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Projects;