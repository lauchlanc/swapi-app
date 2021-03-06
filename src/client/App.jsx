import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Play from './components/play'
import Scores from './components/scores'
import About from './components/About';
import AppNavbar from './components/AppNavbar';

export type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/scores" component={Scores} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
