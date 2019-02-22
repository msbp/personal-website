import React from 'react'
import '../css/Sections.css'

class Contact extends React.Component {
  /**
   * This is the component's constructor.
   * @param {*} props - Props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method.
   */
  render () {
    return (
      <div className='contact'>
        <h1>This is the contact content.</h1>
      </div>
    )
  }
}

export default Contact
