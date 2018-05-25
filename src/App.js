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

	//method to update any item based on parameters passed to it
	loadItem(apiCollection, id, itemToUpdate) {
		fetch(`http://localhost:8088/${apiCollection}/${id}`)
			.then(r => r.json())

			.then(response => {
				this.setState({
					[itemToUpdate]: response
				})
			})
	}

	loadPeople() {
		fetch("http://localhost:8088/people/1")
			.then(r => r.json())

			.then(response => {
				this.setState(response)
				this.loadItem("cars", response.car, "car")
				this.loadItem("pets", response.pet, "pet")
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
