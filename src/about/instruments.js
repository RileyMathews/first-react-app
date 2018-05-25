import React, { Component } from 'react'

class Instruments extends Component {
    state = {
        instrumentsList: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/instruments")
            .then(r => r.json())

            .then(instruments => {
                this.setState({
                    instrumentsList: instruments 
                })
            })    
    }

    render() {
        return(
            <div>
                {this.state.instrumentsList.map(i => (
                    <div key={i.id}>
                        <p>{i.brand} {i.model} {i.type}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Instruments