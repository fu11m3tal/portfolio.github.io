import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

import Menu from './components/Menu.js';
// import Home from './components/Home.js';
// import About from './components/About.js';
// import Portfolio from './components/Portfolio.js';
// import Resume from './components/Resume.js';
// import Contact from './components/Contact.js';
import './css/App.css';


// import ReactAudioPlayer from 'react-audio-player';



const store = configureStore();
class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount() {
    this.props.load()
    .then((mod) => {
      console.log(mod)
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

const Home = (props) => (
  <DynamicImport load={() => import('./components/Home.js')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />}
  </DynamicImport>
)

const About = (props) => (
  <DynamicImport load={() => import('./components/About.js')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />}
  </DynamicImport>
)

const Portfolio = (props) => (
  <DynamicImport load={() => import('./components/Portfolio.js')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />}
  </DynamicImport>
)

const Resume = (props) => (
  <DynamicImport load={() => import('./components/Resume.js')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />}
  </DynamicImport>
)
const Contact = (props) => (
  <DynamicImport load={() => import('./components/Contact.js')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />}
  </DynamicImport>
)

function App() {
  return (
    <Router className="app">
      <Provider store={store}>
        <Menu className="menu" />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Provider>
    </Router>
  );
}

export default App;
