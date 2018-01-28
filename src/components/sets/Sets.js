import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './sets.sass'

export class Sets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standart: [
        "Basic",
        "Classic",
        "Whispers of the Old Gods",
        "One Night in Karazhan",
        "Mean Streets of Gadgetzan",
        "Journey to Un'Goro",
        "Knights of the Frozen Throne",
        "Kobolds & Catacombs"
      ],
      wild : [
        "Naxxramas",
        "Goblins vs Gnomes",
        "Blackrock Mountain",
        "The Grand Tournament"
      ]
    };
  }
  render() {
    return (
      <div className="sets-grid">
        <div className="set-block">
          <h1>Standart Sets</h1>
          {this.state.standart.map(function(item, key){
            return(
              <div key={key}><Link name={item} to={`sets/${item}`}>{item}</Link></div>
            )
          })}
          </div>
        <div className="set-block">
          <h1>Wild Sets</h1>
          {this.state.wild.map(function(item, key){
            return(
              <div key={key}><Link name={item} to={`sets/${item}`}>{item}</Link></div>
            )
          })}
        </div>
      </div>
    );
  }
}
