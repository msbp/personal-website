import React from 'react'
import '../css/Sections.css'
const projectContent = require('../config/content.json').sections.projects

class Projects extends React.Component {
  /**
   * This is the component's constructor.
   * @param {*} props - Props
   */
  constructor (props) {
    super(props)
  }

  getTitle () {
    return (
      <div className='sectionHeader'>{projectContent.title}</div>
    )
  }

  /**
   * Render method.
   */
  render () {
    return (
      <div className='projects'>
        {this.getTitle()}
      </div>
    )
  }
}

export default Projects
