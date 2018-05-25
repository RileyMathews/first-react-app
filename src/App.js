import React, { Component } from 'react';
import Car from './Car';
import Dog from './Dog';
import Home from './Home';
import "./styles/bio.css"

class Riley extends Component {

	state = {
		"firstName": "",
		"lastName": "",
		"class": "",
		"address": "",
		"car": {
			"make": "",
			"model": ""
		},
		"pet": {
			"name": "",
			"breed": ""
		}
	}
	// method to get car information for id passed to it
	loadCar(car) {
		//query api for car with specific id
		fetch(`http://localhost:8088/cars/${car}`)
			.then(r => r.json())

			//take response of the car object
			.then(response => {

				//and set the state of that property
				this.setState({
					car: response
				})
			})
	}

	//same method as above for pet
	loadPet(pet) {
		fetch(`http://localhost:8088/pets/${pet}`)
			.then(r => r.json())

			.then(response => {
				this.setState({
					pet: response
				})
			})
	}

	loadPeople() {
		fetch("http://localhost:8088/people/1")
			.then(r => r.json())

			.then(response => {
				this.setState(response)
				this.loadCar(response.car)
				this.loadPet(response.pet)
			})
	}

	componentDidMount() {
		this.loadPeople()
	}


	render() {
		return (
			<div className="bio">
				<h2>{this.state.firstName} {this.state.lastName}</h2>
				<p>{this.state.class}</p>
				<Home address={this.state.address} />
				<Car car={this.state.car} />
				<Dog pet={this.state.pet} />
			</div>
		);
	}
}


export default Riley;
