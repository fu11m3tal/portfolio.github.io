import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
    this.setOpen = this.setOpen.bind(this);
    this.setItems = this.setItems.bind(this);
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
  
  setOpen(cb) {
    const menuBtn = document.querySelector('.menu-btn');
    var {menuOpen} = this.state;
    if(menuOpen) menuBtn.classList.remove('open');
    if(!menuOpen) menuBtn.classList.add('open');
    this.setState({menuOpen: !menuOpen});
    return setTimeout(cb,1)
  }
  
  render() {
    return (
      <nav>
          <div className="menu-btn" onClick={() => (this.setOpen(this.setItems))}>
            <div className="menu-btn_burger"></div>
          </div>
          <ul id="menu-list">
          {this.state.menuOpen ? this.props.children : null}
        </ul>
      </nav>
  )
} 
}

export default Menu; 
