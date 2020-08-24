import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from 'axios';
// import Menu from './components/Menu.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import TwentyFourtyEight from './components/TwentyFourtyEight.js';
import Loader from './components/Loader.js';
import Nav from './components/Nav.js';
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
          {/* <Nav/> */}
          <div className="main">
            <Main />
            <About />
            <Portfolio />
            <Contact />
            Handcrafted 
            <br/>
            by 
            <br/>
            Steven Yoh
            {/* <Router>
              <Route exact path="/" component={Main}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/portfolio" component={Portfolio}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Router> */}
          </div>
        </div>    
      )
    }
  }
  componentDidMount() {
  }
  render() {
      return (
        <div>
            {this.loader()}
        </div>
      )
    }
    
  
}

export default App;