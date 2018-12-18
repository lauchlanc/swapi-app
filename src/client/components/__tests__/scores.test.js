import React from 'react';
import Scores from '../scores';
import waitUntil from 'async-wait-until';
import { shallow } from '../../enzyme';


// The assertion for a promise must be returned.
it('Gets all scores', async () => {
  const root = shallow(<Scores />);
  await waitUntil(() => root.state('scores') !== null);

  expect(root.state('scores')).toBeDefined();
});
