import React from 'react'

class Blog extends React.Component {
    
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
            <div>
                <h1>This is the blog content.</h1>
            </div>
        )
    }
}

export default Blog