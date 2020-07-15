import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to={`/dashboard`}>
          <button>
            Dashboard
          </button>
        </Link>
        <Link to={`/about`}>
          <button>
            About
          </button>
        </Link>
        <Link to={`/portfolio`}>
          <button>
            Portfolio
          </button>
        </Link>
        <Link to={`/resume`}>
          <button>
            Resume
          </button>
        </Link>
        <Link to={`/contact`}>
          <button>
            Contact
          </button>
        </Link>
    </div>
  )
}

export default Navigation; 
