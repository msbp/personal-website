import React from 'react'
import '../css/Menu.css'

class Menu extends React.Component {
    
    /**
     * This is the component's constructor.
     * @param {*} props - Props
     */
    constructor(props) {
        super(props)
    }

    /**
     * Render method.
     */
    render() {
        return (
            <div className="menu">
                <h1>This is the Navigation Menu bar.</h1>
            </div>
        )
    }
}

export default Menu