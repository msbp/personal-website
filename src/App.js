import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css'
import Menu from './menu/Menu'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'

class App extends Component {
  render () {
    return (
      <div className='container-fluid no-padding App'>
        <div className='row no-gutter'>
          <div className='col-md-3'>
            <Menu />
          </div>

          <div className='col-md-9'>
            <div />
            <ScrollableAnchor id='homeSection'>
              <Home />
            </ScrollableAnchor>
            <ScrollableAnchor id='projectSection'>
              <Projects />
            </ScrollableAnchor >
            <ScrollableAnchor id='blogSection'>
              <Blog id='blog' />
            </ScrollableAnchor >
            <ScrollableAnchor id='contactSection'>
              <Contact id='contact' />
            </ScrollableAnchor>
          </div>

        </div>
      </div>
    )
  }
}

export default App
