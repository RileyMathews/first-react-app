import React, { Component } from 'react';
import "./styles/car.css"

class Car extends Component {
	render() {
		return (
			<section className="car">
				<h3>My favorite car</h3>
				<div>Make: {this.props.car.make}</div>
				<div>Model: {this.props.car.model}</div>
			</section>
		)
	}
}

export default Car;