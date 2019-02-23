import React from 'react'
import '../css/Sections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const homeContent = require('../config/content.json').sections.home

class Home extends React.Component {
  /**
   * This is the component's constructor.
   * @param {*} props - Props
   */
  constructor(props) {
    super(props)
  }

  getPhoto() {
    return (
      <img src={homeContent.profileImage} className='rounded-circle profileImage' />
    )
  }

  getName() {
    return (
      <h2 className='name'>{homeContent.name}</h2>
    )
  }

  getBio() {
    return (
      <div className='bio'>{homeContent.bio}</div>
    )
  }

  getDownArrow() {
    return (
      <div class="scrollDownIcon">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    )
  }

  /**
   * Render method.
   */
  render() {
    return (

      <div className='home'>

        <div className='text-center'>
          {this.getPhoto()}
        </div>

        <div className='text-center'>
          {this.getName()}
        </div>

        <div className='text-left'>
          {this.getBio()}
        </div>

        <div className='text-center scrollDownIcon'>
          {this.getDownArrow()}
        </div>
      </div>

    )
  }
}

export default Home
