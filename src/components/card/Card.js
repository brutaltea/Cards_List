import React from 'react';
import ReactDOM from 'react-dom';
import './card.sass'


export class Card extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="col-4">{this.props.name}</div>
        <div className="col">{this.props.cardSet}</div>
        <div className="col">{this.props.faction}</div>
        <div className="col">{this.props.type}</div>
        <div className="col">{this.props.cost}</div>
			</div>
		)
	}
}


