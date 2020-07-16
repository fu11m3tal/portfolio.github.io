import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

import ScrollToTop from './utils/ScrollToTop';
import Navigation from './components/Navigation.js';
import LivePreviewExample from './components/Modal.js';

import './css/App.css';


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
        <LivePreviewExample />
        <Navigation />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Provider>
    </Router>
  );
}

export default App;
