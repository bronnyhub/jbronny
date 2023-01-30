import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='container-sideb'>
       <p className='sideb'>jbronny</p> 
        
            <ul className='menu'>
                <li>About me</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>

        <ul className='ikonki'>
            <li><img src='linkedin.png' className='ikona'></img></li>{/*<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> */}
            <li><img src='github.png' className='ikona'></img></li>{/*<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */}

        </ul>
    </div>
  )
}

export default Sidebar