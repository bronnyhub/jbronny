
function Projects() {

    const handleClick = () => console.log('Project clicked!');

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <p>Here you can find a list of my projects.</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  )
}

export default Projects;