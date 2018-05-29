import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.address}</h3>
            </div>
        )
    }
}

export default Home;