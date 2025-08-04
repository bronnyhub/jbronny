import React from 'react'
import './sidebar.css'
import Button from './button.jsx'

const Sidebar = () => {
  return (
    <div className='container-sideb'>
      <img src='/img/profilepic.png' alt='logo' className='logo' />
      <img src='/img/bronnyhub.png' alt='@bronnyhub' className='bronnyhub' />

      <ul className='menu'>
        <li><Button label="Main" /></li>
        <li><Button label="AboutMe" /></li>
        <li><Button label="Projects" /></li>
        <li><Button label="Contact" /></li>
      </ul>

      <div>
        <ul className='ikonki'>
          <li>
            <a href='https://www.linkedin.com/in/julia-bronny-180034262/' target='_blank' rel="noreferrer">
              <img src='/img/linkedin.png' className='ikona' alt='Flaticon Linkedin' />
            </a>
          </li>
          {/*https://www.flaticon.com/free-icons/linkedin - Linkedin icons created by riajulislam - Flaticon*/}
          <li>
            <a href='https://github.com/bronnyhub' target='_blank' rel="noreferrer">
              <img src='/img/github.png' className='ikona' alt='Flaticon Github' />
            </a>
          </li>
          {/*https://www.flaticon.com/free-icons/github - Github icons created by riajulislam - Flaticon*/}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar