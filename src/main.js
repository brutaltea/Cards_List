import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, IndexRoute } from 'react-router-dom';

import { Root } from './components/root/Root';
import { Home } from './components/home/Home';
import { Cards } from './components/cards/Cards';
import { Sets } from './components/sets/Sets';
import { Navigation } from './components/navigation/Navigation';

import './style.sass';



class App extends React.Component {
  render() {
    return (
     <Navigation />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
