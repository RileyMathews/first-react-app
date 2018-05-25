import React, { Component } from "react"


class Project extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.name }</p>
                <p><a href={ this.props.github } target="blank">Github</a></p>
            </div>
        )
    }
}

export default Project