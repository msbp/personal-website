import React from 'react'
import '../css/Sections.css'
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
                <img src={homeContent.profileImage} class="rounded-circle" />
        )

    }

    /**
     * Render method.
     */
    render() {
        return (

            <div className="home">
                <h1>This is the home content.</h1>
                <div className="text-center">
                    {this.getPhoto()}
                </div>
            </div>

        )
    }
}

export default Home