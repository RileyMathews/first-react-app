import React, { Component } from 'react';

class Car extends Component {
	render() {
		return (
			<section>
				<h3>My favorite car</h3>
				<div>Make: {this.props.make}</div>
				<div>Model: {this.props.model}</div>
			</section>
		)
	}
}

export default Car;