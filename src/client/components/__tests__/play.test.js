import React from 'react';
import Play from '../play';
import waitUntil from 'async-wait-until';
import { shallow } from '../../enzyme';


// The assertion for a promise must be returned.
it('Play gets a person', async () => {
  const root = shallow(<Play />);
  await waitUntil(() => root.state('person') !== null);

  expect(root.state('person')).toBeDefined();
});
