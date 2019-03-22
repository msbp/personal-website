import React from 'react'
import '../css/Menu.css'

const navBar = require('../config/content.json').menu.navBar
class Menu extends React.Component {
  /**
     * This is the component's constructor.
     * @param {*} props - Props
     */
  constructor (props) {
    super(props)
  }

  getNavBar () {
    const links = navBar.map((item) => {
      return (
        <a href={item.href} className='navBarLink'>
          <div className='navBarTitle'>
            {item.title}
          </div>
        </a>
      )
    })

    return (
      <nav>
        {links}
      </nav>
    )
  }

  /**
   * Render method.
   */
  render () {
    return (
      <div className='menu'>
        {this.getNavBar()}
      </div>
    )
  }
}

export default Menu
