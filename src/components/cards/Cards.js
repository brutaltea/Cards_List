import React from 'react';
import axios from 'axios';


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
      <div>
				<h1>Hearthstone Cards</h1>
				{this.state.arr.map(item =>
            <Card
              key={item.cardId}
              id={item.cardId}
              name={item.name}
              cardSet={item.cardSet}
              faction={item.faction}
              type={item.type}
              cost={item.cost}
            />
        )}

			</div>
    );
  }
}
