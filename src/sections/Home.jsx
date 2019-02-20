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
                <img src={homeContent.profileImage} className="rounded-circle" />
        )
    }

    getName() {
        return (
            <h2>{homeContent.name}</h2>
        )
    }

    getBio() {
        return (
            <h3>{homeContent.bio}</h3>
        )
    }

    /**
     * Render method.
     */
    render() {
        return (

            <div className="home">

                <div className="text-center">
                    {this.getPhoto()}
                </div>

                <div class="text-center">
                    {this.getName()}
                </div>

                <div className="text=left">
                    {this.getBio()}
                </div>

            </div>

        )
    }
}

export default Home