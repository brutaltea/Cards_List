import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {Card} from './components/card/card.js'

import './style.sass';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: []
		};
	}

	componentDidMount() {
		axios({
			url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards',
			method: 'get',
			headers: {
				'X-Mashape-Key': 'Ov7oxQ9w0Umsh201lFfQlJZEwDcgp1SKLVajsnza8LaqAZ1wir',
				'Content-type': 'application/json'
			}
		})
		.then(response => {
			var data = response.data
			var counter = 0;
			var arr = [];
			for (var key in data) {
				data[key].map(function(items){
					arr.push(items)
				})
			}
			console.log(arr)
			this.setState({arr})
			console.log(this.state)
		})
		.catch(err => {
			console.log(err)
		});
	};

	handleClick(e) {
		e.preventDefault();
		console.log(this.props)
	}

	render(){
		return (
			<div>
				<h1>Hearthstone Cards</h1>
				{this.state.arr.map(item => 
					<Card 
						key={item.cardId}
						name={item.name}
						text={item.text}
						img={item.img}
						attack={item.attack}
					/>
				)}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'))


