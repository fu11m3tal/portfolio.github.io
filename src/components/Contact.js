import React from 'react';
import TextField from '@material-ui/core/TextField';

import '../css/Contact.css';
const Contact = () => {
  const contact = {
    name: "Steven Yoh",
    linkedin: {img: "https://image.flaticon.com/icons/png/512/61/61109.png", href: "https://www.linkedin.com/in/stevenyoh/"},
    github: {img: "https://cdn3.iconfinder.com/data/icons/social-icons-hex-grey/512/GITHUB-512.png", href: "https://github.com/fu11m3tal"}
  }
  return (
    <div className="main-contact">
       <a className="icon" href={contact.linkedin.href}>
         <img src={contact.linkedin.img}/>
      </a>
      <a className="icon" href={contact.github.href}>
        <img src={contact.github.img}/>
      </a>
      
      <a className="icon"href="https://www.facebook.com/steven.yoh.583">
        <svg href="https://www.facebook.com/steven.yoh.583" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="50" viewBox="0 0 24 24" width="50"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
      </a>
      <a className="icon" href="https://www.facebook.com/steven.yoh.583">
        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
    </div>
  )
}

export default Contact; 
