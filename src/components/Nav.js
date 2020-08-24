import React from 'react';
import '../css/Menu.css';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { tabs } = this.state;
    return (
      <div className="nav">
            <a id="menu-home" href="/">
              {"Home"}
            </a>
            <a id="menu-about"href="about">
              {"About"}
            </a>
            <a id="menu-portfolio" href="portfolio">
              {"Portfolio"}
            </a>
            <a id="menu-contact" href="contact">
              {"Contact"}
            </a>
          </div>
    )
  } 
}

export default Nav; 
