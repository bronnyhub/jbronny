import React from 'react'
import './AboutMe.css'
import Card from '../../components/card.jsx'
 
export default function AboutMe() {
    return (
        <div className='about-me'>
            <Card 
                imgSrc='/img/profilepic.png'
                title='@bronnyhub'
                text='My name is Julia and I am an aerospace engineering with web development hobby.'
            />
            <div className='skills'>
                <p className='skills-title'>My skills</p>
                <ul className='skills-list'>
                    <li><img alt='CAD' src='/img/cad.png' className='skill-icon'/>
                    Autodesk Inventor</li>
                    <li><img alt='Web Development' src='/img/web-development.png' className='skill-icon'/>
                    HTML, CSS, JavaScript</li>
                    <li><img alt='React' src='/img/atom.png' className='skill-icon'/>
                    React</li>
                    <li><img alt='Python' src='/img/python.png' className='skill-icon'/>
                    Python for data analysis</li>
                    <li><img alt='Power BI' src='/img/powerbi.png' className='skill-icon'/>
                    Power BI</li>
                </ul>
            </div>
        </div>
    )
}