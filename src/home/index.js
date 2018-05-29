import React, { Component } from 'react';
import Car from './Car';
import Pet from './Pet';
import Home from './Home';
import "./styles/bio.css"
import Technologies from './technologies';

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

	loadPeople() {
		fetch("http://localhost:8088/people/1?_expand=pet&_expand=car")
			.then(r => r.json())

			.then(response => this.setState(response))
	}

	componentDidMount() {
		this.loadPeople()
	}


	render() {
		return (
			<div className="bio content">
				<h2>{this.state.firstName} {this.state.lastName}</h2>
				<p>{this.state.class}</p>
				<Home address={this.state.address} />
				<Car car={this.state.car} />
				<Pet pet={this.state.pet} />
				<Technologies />
			</div>
		);
	}
}


export default Riley;
