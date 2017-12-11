import React from 'react';
import ReactDOM from 'react-dom';
import './card.sass'


export class Card extends React.Component {
	render(){
		return(
			<div>
				<h4>{this.props.name}</h4>
				<p>{this.props.text}</p>
			</div>
		)
	}
}


