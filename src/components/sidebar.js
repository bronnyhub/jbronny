import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='container-sideb'>

      <img src='profile pic.png' alt='logo' className='logo'></img>
      <img src='bronnyhub.png' alt='@bronnyhub' className='bronnyhub'></img>
        
            <ul className='menu'>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

      <div>
        <ul className='ikonki'>
            <li><a href='https://www.linkedin.com/in/julia-bronny-180034262/' target='_blank' rel="noreferrer"><img src='linkedin.png' className='ikona' alt='Flaticon Linkedin'></img></a></li>
            {/*https://www.flaticon.com/free-icons/linkedin - Linkedin icons created by riajulislam - Flaticon*/}

            <li><a href='https://github.com/bronnyhub' target='_blank' rel="noreferrer"><img src='github.png' className='ikona' alt='Flaticon Github'></img></a></li>
            {/*https://www.flaticon.com/free-icons/github - Github icons created by riajulislam - Flaticon*/}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar