import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { Home } from '../home/Home';
import { Cards } from '../cards/Cards';
import { Sets } from '../sets/Sets';
import { CardDetails } from "../cardDetails/CardDetails";
import { SetDetails } from "../setDetails/SetDetails";

import './navigation.sass'


export class Navigation extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <div className="navigation-panel">
            <NavLink exact to="/" className="heading">
              <div className="logo" alt="LOGO"></div>
              <span className="big-letters">Hearthstone</span><br></br>
              <span className="small-letters">Cards Catalogue</span>
            </NavLink>
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link-selected" to="/sets">Sets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link-selected" to="/cards">Cards</NavLink>
              </li>
            </ul>
          </div>
          <div className="banner"></div>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact path="/sets" component={Sets}/>
            <Route exact path="/cards/:name" render={props => <CardDetails {...props} />} />
            <Route exact path="/sets/:name" render={props => <SetDetails {...props} />} />
          </Switch>

        </div>
      </Router>
    );
  }
}
