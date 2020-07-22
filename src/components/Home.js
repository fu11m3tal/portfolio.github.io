import React from 'react';
import '../css/Home.css';
const Home = () => {
  const header = `Hi, my name is`;
  const name = `Steven Yoh.`
  const introduction = `I'm a web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.`;
  const hobbies = `When I am not on the computer, I enjoy hiking, basketball and just being out in nature.`;
  return (
    <div className="home">
      <h5 id="font">{header}</h5>
      <h1 id="font">{name}</h1>
      <p>{introduction}</p>
      <p>{hobbies}</p>
      <button>Get In Touch</button>
    </div>
  )
}

export default Home; 
