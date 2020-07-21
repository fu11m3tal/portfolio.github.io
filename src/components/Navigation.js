import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.handleMenuBtnClick = this.handleMenuBtnClick.bind(this);
  }
  handleMenuBtnClick() {
    const menuBtn = document.querySelector('.menu-btn');
    const homeBtn = document.getElementById('home');
    const aboutBtn = document.getElementById('about');
    const contactBtn = document.getElementById('contact');
    const portfolioBtn = document.getElementById('portfolio');
    let { menuOpen } = this.state;
    if(!menuOpen) {
      menuBtn.classList.add('open');
      homeBtn.classList.toggle('active');
      aboutBtn.classList.toggle('active');
      contactBtn.classList.toggle('active');
      portfolioBtn.classList.toggle('active');

      this.setState({menuOpen: true})
    } else {
      menuBtn.classList.remove('open');
      homeBtn.classList.toggle('active');
      aboutBtn.classList.toggle('active');
      contactBtn.classList.toggle('active');
      portfolioBtn.classList.toggle('active')
      this.setState({menuOpen: false})
    }

    console.log(this.state)
  }
  
  render() {
    return (
      <nav>
          <div className="menu-btn" onClick={this.handleMenuBtnClick}>
            <div className="menu-btn_burger"></div>
          </div>
          {this.state.menuOpen && this.props.children}
        <ul id="menu-list">
          <li><a id="home" href="Home">Home</a></li>
          <li><a id="about" href="about">About</a></li>
          <li><a id="contact" href="contact">Contact</a></li>
          <li><a id="portfolio" href="portfolio">Porfolio</a></li>
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
