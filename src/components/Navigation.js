import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: "link"
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver(e) {

  }
  handleMouseLeave(e) {

  }
  
  render() {
    return (
      <div>
        <Link to={`/about`}>
          <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
            About
          </button>
        </Link>
        <Link to={`/portfolio`}>
          <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
            Portfolio
          </button>
        </Link>
        <Link to={`/resume`}>
          <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
            Resume
          </button>
        </Link>
        <Link to={`/contact`}>
          <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
            Contact
          </button>
        </Link>
      </div>
  )
} 
}

export default Navigation; 
