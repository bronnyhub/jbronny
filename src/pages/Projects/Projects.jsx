import React from 'react';
import './Projects.css';
import Card from '../../components/card.jsx'

function Projects() {

    const handleClick = () => console.log('Project clicked!');

  return (
    <div className='projects'>
      <h1 className='main-text'>Projects</h1>
      <p className='main-text'>Here you can find a list of my projects.</p>
      <div className='project-list'>
        <Card  
          imgSrc='/img/satelliteOV.png'
          title='Satellite Orbit Visualizer'
          text='It visualizes the orbit of Kinéis satellites around Earth using matplotlib in Python.'
          link='https://github.com/bronnyhub/satellite_orbit_visualizer'
        />
        <Card 
          imgSrc='/img/clock.png'
          title='Minimalistic Clock'
          text='A simple clock made with HTML that displays the current time and updates every second.'
          link='https://github.com/bronnyhub/minimalistic-clock'
        />
        <Card 
          imgSrc='/img/sixpack.png'
          title='Aircraft Dashboard'
          text='Front-end dashboard for an aircraft using React. It displays the aircraft status and allows interaction with various controls.'
          link='https://github.com/bronnyhub/six-pack-dashboard'        
        />
      </div>
    </div>
  )
}

export default Projects;