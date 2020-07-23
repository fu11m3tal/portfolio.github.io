import React from 'react';
import TextField from '@material-ui/core/TextField';

import '../css/Contact.css';
const Contact = () => {
  const contact = {
    name: "Steven Yoh",
    email: "steven.christopher.yoh@gmail.com",
    location: "Cupertino, CA",
    phone: "408-483-9380",
    linkedin: {img: "https://image.flaticon.com/icons/png/512/61/61109.png", href: "https://www.linkedin.com/in/stevenyoh/"},
    github: {img: "https://cdn3.iconfinder.com/data/icons/social-icons-hex-grey/512/GITHUB-512.png", href: "https://github.com/fu11m3tal"}
  }
  return (
    <div className="contact">
      <address className="text">
        {contact.email}<br/>
        {contact.location}<br/>
        {contact.phone}
      </address>
      <h3 className="text">Have a question or want to work together?</h3>
      <TextField
        label="Name" 
        variant="filled"
        className="text"
      />
      <br/>
      <TextField
        label="Email" v
        variant="filled"
        className="text"
      />
      <br/>
      <TextField
        label="Your message" 
        variant="filled"
        className="text"
      />
      <br/>
      <a href={contact.linkedin.href}>
        <img src={contact.linkedin.img}/>
      </a><br/>
      <a href={contact.github.href}>
        <img src={contact.github.img}/>
      </a><br/>
    </div>
  )
}

export default Contact; 
