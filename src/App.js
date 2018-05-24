import React, { Component } from 'react';
import Car from './Car';
import Dog from './Dog';
import Home from './Home';

class Riley extends Component {
	constructor (props) {
		super(props)

		this.state = {
			firstName: "Riley",
			lastName: "Mathews",
			address: "1474 Klein rd.",
			favCarMake: "Chevrolet",
			favCarModel: "Silverado",
			dogName: "Rhythm",
			dogBreed: "Long Haired Dachshund"
		}
	}
	
	render() {
		return (
			<div>
				<h3>{this.firstName} {this.lastName}</h3>
				<h4>Day Cohort 25</h4>
				<Home address={this.state.address}/>
				<Car make={this.state.favCarMake} model={this.state.favCarModel}/>
				<Dog name={this.state.dogName} breed={this.state.dogBreed}/>
			</div>
		);
	}
}


export default Riley;
