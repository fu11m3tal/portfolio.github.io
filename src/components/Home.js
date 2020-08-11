import React from 'react';
import '../css/Home.css';
const Home = () => {
  const header = `Hi, my name is`;
  const name = `Steven Yoh`
  const introduction = `I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  return (
    <div className="home">
      <span className="welcome">
        I'M
        STEVEN
        <br/>
        A 
        <br/>
        FULLSTACK
        <br/>
        WEB DEVELOPER
      </span>
    </div>
  )
}

export default Home; 
