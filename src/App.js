import React, { Component } from 'react';
import Car from './Car';
import Dog from './Dog';
import Home from './Home';
import "./styles/bio.css"

class Riley extends Component {
	constructor (props) {
	    super(props)

	    /*
	        Used for Contact component keys. Read the docs
	        for more info.

	        https://reactjs.org/docs/reconciliation.html#keys
	    */
	    this.contactCardKey = 1

	    // Define initial state
	    this.state = {
	        people: []
	    }
	}

	

	//method to update any item based on parameters passed to it
	loadItem(apiCollection, id, itemToUpdate, i) {
		fetch(`http://localhost:8088/${apiCollection}/${id}`)
			.then(r => r.json())

			.then(response => {
				this.setState({
					[itemToUpdate]: response
				})
			})
	}

	loadPeople() {
		fetch("http://localhost:8088/people?_expand=pet&_expand=car")
			.then(r => r.json())

			.then(response => {
				this.setState({
					people: response
				})
			})
	}

	componentDidMount() {
		this.loadPeople()
	}


	render() {
		return (
			<div>
				{this.state.people.map(c => (
					<div className="bio" key={c.id}>
						<h2>{c.name}</h2>
						<h3>{c.class}</h3>
						<Home address={c.address} />
						<Car car={c.car} />
						<Dog pet={c.pet} />
					</div>
				))}
			</div>
		);
	}
}


export default Riley;
