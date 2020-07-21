import React from 'react';
import Typography from '@material-ui/core/Typography';

import '../css/About.css';
const About = () => {
  const header = `Hello! I'm Steven, a software engineer based in Silicon Valley, CA.`
  const introduction = `I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  return (
    <div id="about">
      <h5 id="font">{header}</h5>
      <img className="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQHWZv6GOIdVaQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=t3Oub7lrB8fKsh87AJqGAoQ1q_wbKLiDj8Mr6VX3SV4" />
      <p>{introduction}</p>

      <p>Here are a few technologies I've been working with recently:</p>
      <p>
      Languages & Frameworks: Javascript (ES6+), React, Redux, jQuery, HTML/CSS 
      </p>
      <p>
      Databases: MongoDB, MySQL, PostgreSQL
      </p>
      <p>
      Other Technologies: NodeJS, Express, Jest/Enzyme, Mocha/Chai, Git, Babel, Webpack, AWS (EC2, S3), Docker, Git, Github, Trello, Styled-Components, Loader.io, New Relic, NGINX
      </p>
    </div>
  )
}

export default About; 
