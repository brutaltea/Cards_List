import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { Home } from '../home/Home';
import { Cards } from '../cards/Cards';
import { Sets } from '../sets/Sets';
import { CardDetails } from "../cardDetails/CardDetails";

import './navigation.sass'


export class Navigation extends React.Component {

  render(){
    return (
      <Router>
        <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link-selected" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link-selected" to="/cards">Cards</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link-selected" to="/sets">Sets</NavLink>
              </li>
            </ul>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact path="/sets" component={Sets}/>
            <Route exact path="/cards/:name" render={props => <CardDetails {...props} />} />
          </Switch>

        </div>
      </Router>
    );
  }
}