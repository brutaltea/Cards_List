import React from 'react';
import ReactDOM from 'react-dom';
import './card.sass'
import { Link } from 'react-router-dom'

export class Card extends React.Component {
	render(){
		return(
			<div className="grid">
				<div className="name">
					<Link key={this.props.id} to={`../cards/${this.props.name}`}>
						{this.props.name}
					</Link>
				</div>
        <div className="set">
					<Link key={this.props.id+this.props.cardSet} to={`../sets/${this.props.cardSet}`}>
						{this.props.cardSet}
					</Link>
				</div>
        <div className="faction">{this.props.faction}</div>
        <div className="type">{this.props.type}</div>
        <div className="cost">{this.props.cost}</div>
			</div>
		)
	}
}
