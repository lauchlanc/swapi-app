// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  foo: number
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The answer is {this.props.foo}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
