import React from 'react';
import ReactDOM from 'react-dom';
import App from '.index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App foo={42}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
