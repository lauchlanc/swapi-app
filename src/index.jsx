// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import * as serviceWorker from './client/serviceWorker';

const root: ?Element = document.getElementById('root');

if(root){
  ReactDOM.render(<App />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
