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
      <svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="blob">
      <path id="blob-background" d="M702.884 101.574C1034.17 83.4912 1302.84 203.364 1319.07 368.158C1340.24 583.062 1114.75 877.749 735.56 700.224C443.367 563.427 128.394 598.953 119.371 433.64C110.348 268.327 371.595 119.656 702.884 101.574Z" fill="#F2C38B" fill-opacity="0.8"/>
      </g>
      </svg>

      {/* <address className="text">
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
        label="Email" 
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
      <button className="send">Send</button>
      <br/>
      <a href={contact.linkedin.href}>
        <img className="linkedin" src={contact.linkedin.img} alt=""/>
      </a><br/>
      <a href={contact.github.href}>
        <img  className="github" src={contact.github.img} alt=""/>
      </a><br/> */}
    </div>
  )
}

export default Contact; 
