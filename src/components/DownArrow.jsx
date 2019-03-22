import React from 'react'
import '../css/Sections.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class DownArrow extends React.Component {
  /**
   * Render method.
   */
  render () {
    return (
      <div className='scrollDownIcon text-center'>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    )
  }
}

export default DownArrow
