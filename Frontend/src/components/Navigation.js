import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Link to={`/dashboard`}>
          <button className="link">
            Dashboard
          </button>
        </Link>
        <Link to={`/about`}>
          <button className="link">
            About
          </button>
        </Link>
        <Link to={`/portfolio`}>
          <button className="link">
            Portfolio
          </button>
        </Link>
        <Link to={`/resume`}>
          <button className="link">
            Resume
          </button>
        </Link>
        <Link to={`/contact`}>
          <button className="link">
            Contact
          </button>
        </Link>
    </div>
  )
}

export default Navigation; 
