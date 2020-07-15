import React from 'react';
import '../css/About.css';
const About = ({  }) => {
  const header = `A LITTLE BIT ABOUT ME`;
  const introduction = `Hey! My name is Steven and I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  const hobbies = `When I am not on the computer, I enjoy hiking, basketball and just being out in nature.`;
  return (
    <div>
      <h1>{header}</h1>
      <img className="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQHWZv6GOIdVaQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=t3Oub7lrB8fKsh87AJqGAoQ1q_wbKLiDj8Mr6VX3SV4" />
      <p>{introduction}</p>
      <p>{hobbies}</p>
    </div>
  )
}

export default About; 
