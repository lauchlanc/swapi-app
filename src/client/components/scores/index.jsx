import React, { Component } from 'react';
import {
  Table,
  Container
 } from 'reactstrap';
import Score from '../score';

export type Props = {};
export type State = {
  scores: array,
};

export default class Scores extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scores: []
    };

    this.eachScore = this.eachScore.bind(this);
  }

  async componentDidMount() {
    fetch(`http://localhost:5000/api/scores/`)
      .then(response => response.json())
      .then(scores => {
        this.setState({
          scores: scores
        })
      })
  }

  eachScore(score, i) {
    return (
      <Score score={score}
               key={i}
               />
    )
  }

  render() {
    const { scores } = this.state;
    return (
      <Container>
        <Table dark>
          <thead>
            <tr>
              <th>Number of Guesses</th>
              <th>Character Name</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(this.eachScore)}
          </tbody>
        </Table>
      </Container>
    );
  }
}
