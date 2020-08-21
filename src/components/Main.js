import React from 'react';
import '../css/Main.css';
const Main = () => {
  const header = `Hi`;
  const name = `My name is Steven Yoh.`
  const introduction = `I'm a fullstack web developer`;
  return (
    <div className="main-home">
        <p>{header}</p>
        <p>{name}</p>
        <p>{introduction}</p>
    </div>
  )
}

export default Main; 
