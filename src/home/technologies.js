import React, { Component } from 'react';

class Technologies extends Component {
    state = {
        technologies: []
    }

    loadTechs() {
        fetch("http://localhost:8088/technologies")
        .then(r => r.json())

        .then(response => {
            console.log(response)
            this.setState({
                technologies: response
            })
        })
    }

    componentDidMount() {
        this.loadTechs()
    }

    render() {
        return (
            <div className="technologies">
                {this.state.technologies.map(tech => (
                    <h3>{tech.name}</h3>
                ))}
            </div>
        )
    }
}

export default Technologies