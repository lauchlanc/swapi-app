// @flow
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import AppNavbar from './components/AppNavbar';

export type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <header className="App-header">
          <About />
        </header>
      </div>
    );
  }
}

export default App;
