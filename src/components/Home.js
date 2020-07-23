import React from 'react';
import '../css/Home.css';
const Home = () => {
  const header = `Hi, my name is`;
  const name = `Steven Yoh`
  const introduction = `I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  const hobbies = `When I am not on the computer, I enjoy hiking, basketball and just being out in nature.`;
  return (
    <div className="home">
      <h5 className="header" id="header">{header}</h5>
      <h1 className="name" id="home-name">{name}</h1>
      <br/>
      <p className="introduction" id="home-introduction">{introduction}</p>
    </div>
  )
}

export default Home; 
