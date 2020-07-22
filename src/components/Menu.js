import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      tabs: [],
    }
    this.setOpen = this.setOpen.bind(this);
    this.setClose = this.setClose.bind(this);
  }

  setItems() {
    const homeBtn = document.getElementById('home');
    const aboutBtn = document.getElementById('about');
    const contactBtn = document.getElementById('contact');
    const portfolioBtn = document.getElementById('portfolio');
    homeBtn.classList.toggle('active');
    aboutBtn.classList.toggle('active');
    contactBtn.classList.toggle('active');
    portfolioBtn.classList.toggle('active');
  }
  
  setOpen() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('sideMenu');
    var {menuOpen} = this.state;
    var menuChange = !menuOpen;
    sideMenu.classList.toggle('active');
    if(menuChange) {
      menuBtn.classList.add('open');
      this.setState({menuOpen: menuChange, tabs: ["home", "about", "resume", "portfolio", "contact"]})
    } else {
      menuBtn.classList.remove('open');
      this.setState({menuOpen: menuChange, tabs: []})
    }
    
  }
  setClose() {
    this.setState({menuOpen: false, tabs: []})
  }
  
  render() {
    const { tabs } = this.state;
    return (
      <nav>
          <div className="menu-btn" onClick={this.setOpen}>
            <div className="menu-btn_burger"></div>
          </div>
          <div id="sideMenu" className="sidemenu">
            <ul>
              {tabs.map((tab, index) => (
                <li onClick={this.setClose} ><a href={tab}>{tab}</a></li>
              ))}
            </ul>
          </div>
      </nav>
  )
} 
}

export default Menu; 
