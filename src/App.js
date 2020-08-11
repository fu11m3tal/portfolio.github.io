import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from './templates/config/configureStore';
import { Provider } from 'react-redux';
import axios from 'axios';
import Menu from './components/Menu.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import TwentyFourtyEight from './components/TwentyFourtyEight.js';
import SimpleModal from './components/SimpleModal.js';
import Swing from './components/Swing.js';
import Rocket from './components/Rocket.js';
import Playground from './components/Playground.js';
import Loader from './components/Loader.js';

import './css/App.css';
import $ from "jquery";

const store = configureStore();
class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount() {
    this.props.load()
    .then((mod) => {
      return mod;
    })
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }
  render() {
    return this.props.children(this.state.component)
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
        <div className="app-wrapper">
          <Swing />
          {/* <Home /> */}
          <Playground />
          {/* <div className="pimg1">
            <div className="ptext">
              <Home />
            </div>
          </div>
          <section className="section section-light">
            <Swing />
          </section>
    
          <div className="pimg2">
            <div className="ptext">
            <span className="border">
            </span>
            </div>
          </div>
          <section className="section section-light">
      
          </section>
  
          <div className="pimg3">
            <div className="ptext">
            <span className="border">
              
            </span>
            </div>
          </div>
          <section className="section section-dark">
            <div className="twentyFourtyEightBtn">
              <SimpleModal className="simpleModal"/>
            </div>
          </section>  */}
        </div>    
      )
    }
  }
  componentDidMount() {
    setTimeout(() => (this.setState({loading: false})),7000)
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