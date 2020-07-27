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
          <span className="border">
            <Home />
          </span>
          </div>
        </div>
        <section className="section section-light">
          <About />
        </section>

        <div className="pimg2">
          <div className="ptext">
          <span className="border">
            <Work />
          </span>
          </div>
        </div>
        <section className="section section-light">
          <p>
          Languages & Frameworks:​ Javascript (ES6+), React, Redux, jQuery, HTML/CSS

          </p>
          <p>
          Databases:​ MongoDB, MySQL, PostgreSQL
          
          </p>
          <p>
          Other Technologies:​ NodeJS, Express, Jest/Enzyme, Mocha/Chai, Git, Babel, Webpack, AWS (EC2, S3), Docker, Git, Github, Trello, Styled-Components, Loader.io, New Relic, NGINX
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
          <span className="border">
          More Coming Soon
          </span>
          </div>
        </div>
        <section className="section section-light">
          <h2>Contact</h2>
          <Contact />
          <p>
          </p>
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