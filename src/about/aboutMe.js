import React, { Component } from 'react'
import Instruments from './instruments';
import Places from './places';

class About extends Component {
    render() {
        return(
            <div>
                <h2>About Me</h2>
                <h3>Instrument Collection</h3>
                <Instruments />
                <h3>Places I've Visited</h3>
                <Places />
            </div>
        )
    }
}

export default About