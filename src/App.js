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

import './css/App.css';

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

function App() {
  return (
    <div className="main">

        <div className="pimg1">
          <div className="ptext">
          <span className="welcome">
          I'M STEVEN.
          <br/>
          A FULLSTACK WEB DEVELOPER. 
          </span>
          </div>
        </div>
        <section className="section section-light">
          <About />
        </section>

        <div className="pimg2">
          <div className="ptext">
          <span className="border">
          TEXT OVER IMAGE 2
          </span>
          </div>
        </div>
        <section className="section section-dark">
          <div className="twentyFourtyEightBtn">
            <SimpleModal className="simpleModal"/>
          </div>
        </section>

        <div className="pimg3">
          <div className="ptext">
          <span className="border">
            
          </span>
          </div>
        </div>
        <section className="section section-light">
          TEXT OVER COLOR 3
        </section>
    </div>
  );
}

export default App;


// const Home = (props) => (
//   <DynamicImport load={() => import('./components/Home.js')}>
//     {(Component) => Component === null
//       ? <h1>Loading...</h1>
//       : <Component {...props} />}
//   </DynamicImport>
// )


// const About = (props) => (
//   <DynamicImport load={() => import('./components/About.js')}>
//     {(Component) => Component === null
//       ? <h1>Loading...</h1>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Portfolio = (props) => (
//   <DynamicImport load={() => import('./components/Portfolio.js')}>
//     {(Component) => Component === null
//       ? <h1>Loading...</h1>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Resume = (props) => (
//   <DynamicImport load={() => import('./components/Resume.js')}>
//     {(Component) => Component === null
//       ? <h1>Loading...</h1>
//       : <Component {...props} />}
//   </DynamicImport>
// )
// const Contact = (props) => (
//   <DynamicImport load={() => import('./components/Contact.js')}>
//     {(Component) => Component === null
//       ? <h1>Loading...</h1>
//       : <Component {...props} />}
//   </DynamicImport>
// )