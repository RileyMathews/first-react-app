import React, { Component } from 'react'
import Project from './Projects'


class ProjectList extends Component {

    state = {
        projectList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/projects")
            .then(r => r.json())
            .then(projects => {
                this.setState({
                    projectList: projects
                })
            })
    }

    render() {
        return (
            <div className="projectList">
                {this.state.projectList.map(project => (
                    <Project 
                        name={project.name}
                        github={project.github}
                        key={project.id} />
                ))}
            </div>
        )
    }
}

export default ProjectList