import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from 'axios';
// import Menu from './components/Menu.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import TwentyFourtyEight from './components/TwentyFourtyEight.js';
import SimpleModal from './components/SimpleModal.js';
import Swing from './components/Swing.js';
import Rocket from './components/Rocket.js';
import Playground from './components/Playground.js';
import Loader from './components/Loader.js';

import './css/App.css';
import $ from "jquery";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tabs: ["home", "about", "resume", "portfolio", "contact"]
    }
    this.loader = this.loader.bind(this);
  }
  loader() {
    var {loading} = this.state;
    if(loading) {
      $(".loader").fadeOut("slow");
      return(
        <Loader />     
      )
    }
    if(!loading) {
      
      return(
        <div className="app">
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
          
          <div className="main">
            <Router>
              <Route exact path="/" component={Main}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/portfolio" component={Portfolio}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Router>
          </div>
        </div>    
      )
    }
  }
  componentDidMount() {
    // setTimeout(() => (this.setState({loading: false})),7000)
    // var menu = ["menu-home", "menu-about", "menu-portfolio", "menu-contact"];
    // var planets = ["sun", "earth", "triple", "saturn"];
    // menu.map((tab, index) => {
    //   var element = document.getElementById(tab);
    //   var planet = document.getElementById(planets[index])
    //   var preview = `${planet.id}-preview`
    //   element.onmouseover = () => {
    //     planet.id = preview
    //   }
    //   element.onmouseleave = () => {
    //     planet.id = planets[index];
    //   }
    // })
    // planets.map((planet) => {
    //   var element = document.getElementById(planet)
    //   element.onclick = () => {
    //     element.id = `${planet}-active`;
    //   }
    // })
  }
  render() {
      return (
        <div className="main">
            {this.loader()}
        </div>
      )
    }
    
  
}

export default App;