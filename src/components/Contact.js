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
    <div className="main-contact">
     <p>Contact</p>
      <address className="text">
        {contact.email}<br/>
        {contact.location}<br/>
        {contact.phone}
      </address>
    </div>
  )
}

export default Contact; 
