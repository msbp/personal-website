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
   * This is temporary. These will be place holders for now.
   */
  getProjects () {
    return (
        <div>
        <div class="projectContainer col-5">Project 1</div>
        <div class="projectContainer col-5">Project 2</div>
        </div>
    )
  }

  /**
   * Render method.
   */
  render () {
    return (
      <div className='projects'>
        {this.getTitle()}
        {this.getProjects()}
      </div>
    )
  }
}

export default Projects
