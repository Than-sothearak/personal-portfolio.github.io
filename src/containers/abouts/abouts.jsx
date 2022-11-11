import React from 'react'
import about from '../../about';

import './abouts.css';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-text-container'>
            <h1>About</h1>
            <p>{about.description}</p>
        </div>
    </div>
  )
}

export default About;