import React from 'react';
import axios from 'axios';

import './cards.sass'

import { Card } from '../card/Card';
import { CardDetails } from '../cardDetails/CardDetails';

export class Cards extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			arr: []
		};
	}

	componentDidMount() {
		axios({
			url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
			method: 'get',
			headers: {
				'X-Mashape-Key': 'Ov7oxQ9w0Umsh201lFfQlJZEwDcgp1SKLVajsnza8LaqAZ1wir',
				'Content-type': 'application/json'
			}
		})
		.then(response => {
			var data = response.data;
			var arr = [];
			for (var key in data) {
				data[key].map(function(items){
					arr.push(items)
				})
			}
			console.log('Response', arr)
			this.setState({arr})
		})
		.catch(err => {
			console.log(err)
		});
  };

  render() {
    return (
      <div className="cards-block">
				<h1>Hearthstone Cards</h1>
        <div className="table-heading">
          <div className="table-cell name">Name</div>
          <div className="table-cell faction">Class</div>
          <div className="table-cell rarity">Rarity</div>
          <div className="table-cell type">Type</div>
          <div className="table-cell cost"></div>
          <div className="table-cell attack"></div>
          <div className="table-cell health"></div>
        </div>
				{this.state.arr.map(card =>
            <Card
              key={card.cardId}
              id={card.cardId}
              name={card.name}
              cardSet={card.cardSet}
              faction={card.playerClass}
              type={card.type}
              cost={card.cost}
              attack={card.attack}
              health={card.health}
              rarity={card.rarity}
              text={card.text}
            />
        )}

			</div>
    );
  }
}
