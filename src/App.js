import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './sections/Home'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

class App extends Component {
  render() {
    return (
      <div className="App row">
      
        <div className="col-md-3">
          <h1>Menu Will Go Here</h1>
        </div>

        <div className="col-md-9">
          <Home />
          <Projects />
          <Blog />
          <Contact />
        </div>

      </div>
    );
  }
}

export default App;
