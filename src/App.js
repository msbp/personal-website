import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/Menu'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-padding App">
        <div className="row no-gutter">
          <div className="col-md-3">
            <Menu />
          </div>

          <div className="col-md-9">
            <Home />
            <Projects />
            <Blog />
            <Contact />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
