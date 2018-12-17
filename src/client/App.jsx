// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/message';

export type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message />
        </header>
      </div>
    );
  }
}

export default App;
