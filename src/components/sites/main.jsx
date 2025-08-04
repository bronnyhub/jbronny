import React from 'react'
import './main.css'
import LoadingBar from '../loading.jsx'
 

function Main() {
  return (
    <div className='main'>
      <p>Hi! This page is still in progress. You should check out the&nbsp;
        <a href='https://github.com/bronnyhub'>rest of my projects</a>!</p>
        <LoadingBar />
    </div>
  )
}

export default Main