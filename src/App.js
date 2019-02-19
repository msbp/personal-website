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
      <div className="App">
        
        <Home />
        <Projects />
        <Blog />
        <Contact />

      </div>
    );
  }
}

export default App;
