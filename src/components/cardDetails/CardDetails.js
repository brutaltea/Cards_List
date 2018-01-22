import React from 'react';
import axios from 'axios';

export class CardDetails extends React.Component {

  constructor(props) {
		super(props);
		this.state = {};
	}

  componentDidMount() {
		axios({
			url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${this.props.match.params.name}?collectible=1`,
			method: 'get',
			headers: {
				'X-Mashape-Key': 'Ov7oxQ9w0Umsh201lFfQlJZEwDcgp1SKLVajsnza8LaqAZ1wir',
				'Content-type': 'application/json'
			}
    })
    .then(response => {
      console.log('Response', response.data[0])
      this.setState(response.data[0])
		})
		.catch(err => {
			console.log(err)
		});
	};

  render(){
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
        <img src={this.state.img} />
      </div>
    );
  }
}
