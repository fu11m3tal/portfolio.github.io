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
      <nav>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="portfolio">Porfolio</a></li>
          {/* <li>
            <Link to={`/about`}>
              <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/portfolio`}>
              <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                Portfolio
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/resume`}>
              <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                Resume
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
              <button className="link" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                Contact
              </button>
            </Link>
          </li> */}
        </ul>
      </nav>
  )
} 
}

export default Navigation; 
