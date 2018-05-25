import React, { Component } from 'react';
import "./styles/dog.css"

class Dog extends Component {
	render() {
		return (
			<section className="dog">
				<h3>My favorite pet</h3>
				<div>Name: {this.props.dog.name}</div>
				<div>Breed: {this.props.dog.breed}</div>
			</section>
		)
	}
}

export default Dog;