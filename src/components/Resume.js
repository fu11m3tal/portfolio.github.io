import React from 'react';
import '../css/Resume.css';

const Resume = () => {
  const open = () => {
    const position = document.getElementById('position');
    console.log("hover", position)
    position.classList.add('open');
  }
  const close = () => {
    const position = document.getElementById('position');
    console.log("hover", position)
    position.classList.remove('open');
  }
  return (
    <div className="resume">
      {/* <h1>Where I've Worked</h1> */}
      <div className="profile" >
        
        <div className="companies" id="companies">
          <li onMouseOver={open} onMouseLeave={close}><a href="Tesla">Tesla</a></li>
          <li><a href="SolarCity">SolarCity</a></li>
          <li><a href="CPUC">California Public Utilities Commission</a></li>
        </div>
        <div className="position" id="position">
          <p>Position</p>
          <p>Tenure</p>
          <p>Responsibilities & Accomplishments</p>
        </div>
      </div>
    </div>
  )
}

export default Resume; 
