import React from 'react';
import '../css/Home.css';
const Home = () => {
  const header = `Hi, my name is`;
  const name = `Steven Yoh`
  const introduction = `I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  return (
    <div className="home">
      <h1>I'm Steven.</h1>
      <h5>a Fullstack Web Developer.</h5>
    </div>
  )
}

export default Home; 
