import React, { Component } from 'react';
import "./styles/dog.css"

class Pet extends Component {
	render() {
		return (
			<section className="dog">
				<h3>My favorite pet</h3>
				<div>Name: {this.props.pet.name}</div>
				<div>Breed: {this.props.pet.breed}</div>
			</section>
		)
	}
}

export default Pet;