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
		"dog": {
			"name": "",
			"breed": ""
		}
	}

	loadPeople() {
		fetch("http://localhost:8088/people/1")
			.then(r => r.json())

			.then(response => this.setState(response))
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
				<Dog dog={this.state.dog} />
			</div>
		);
	}
}


export default Riley;
