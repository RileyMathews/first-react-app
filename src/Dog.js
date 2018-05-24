import React, { Component } from 'react';

class Dog extends Component {
	render() {
		return (
			<section>
				<h3>My favorite pet</h3>
				<div>Name: {this.props.name}</div>
				<div>Breed: {this.props.breed}</div>
			</section>
		)
	}
}

export default Dog;