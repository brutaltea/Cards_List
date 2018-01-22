import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import { Card } from '../card/Card';

export class SetDetails extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
      name: this.props.match.params.name,
      cards: []
    };
	}

  componentDidMount() {
		axios({
			url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/'+this.props.match.params.name+'?collectible=1',
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
          arr.push(data[key])
      }
      console.log('Response', arr)
      this.setState({
        cards: arr
      })
      console.log(this.state.cards)
		})
		.catch(err => {
			console.log(err)
		});
	};


  render(){
    return (
      <div>
          {this.state.name}
          {this.state.cards.map(item =>
            <Card
              key={item.cardId}
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

//export default ({match: {params: {name}}}) => <h1>{name}</h1>;
