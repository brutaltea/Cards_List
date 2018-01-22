import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export class Sets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
      "Basic",
      "Classic",
      "Whispers of the Old Gods",
      "One Night in Karazhan",
      "Mean Streets of Gadgetzan",
      "Journey to Un'Goro",
      "Knights of the Frozen Throne",
      "Kobolds & Catacombs",
      "Naxxramas",
      "Goblins vs Gnomes",
      "Blackrock Mountain",
      "The Grand Tournament"
      ]
    };
  }
  render() {
    return (
      <div>
      <h1>Hearthstone Sets</h1>
      {this.state.arr.map(function(item, key){
        return(
          <div key={key}><Link name={item} to={`sets/${item}`}>{item}</Link></div>
        )
      })}
      </div>
    );
  }
}
