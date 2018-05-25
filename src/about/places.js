import React, { Component } from "react"

class Places extends Component {
    state = {
        placesList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/places")
            .then(r => r.json())

            .then(places => {
                this.setState({
                    placesList: places
                })
            })
    }

    render() {
        return(
            <div>
                {this.state.placesList.map(p => (
                    <div key={p.id}>
                        <h4>{p.name}</h4>
                        <img src={p.image} alt="of a city"/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Places