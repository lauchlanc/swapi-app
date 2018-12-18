import React from 'react';

export type Props = {
  score: {
    name: string,
    numGuesses: number,
  }
};

const Score = ({ score }) => (
  <tr>
    <td>{score.numGuesses}</td>
    <td>{score.name}</td>
  </tr>
);

export default Score
