import React, { Component } from 'react';
import {
  Table,
  Container
 } from 'reactstrap';
import Score from '../score';
import Loader from '../loader'

export type Props = {};
export type State = {
  scores: array,
  loading: boolean,
};

export default class Scores extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scores: [],
      loading: false,
    };

    this.eachScore = this.eachScore.bind(this);
    this.getScores = this.getScores.bind(this);
  }

  async componentDidMount() {
    this.setState({
        loading: true,
    });

    const scores = await this.getScores();

    this.setState({
        scores: scores,
        loading: false,
    })
  }

  async getScores() {
    return fetch(`/api/scores/`,
    {
      mode: "cors"
    })
      .then(response => response.json())
      .then(scores => {
        return scores;
      })
      .catch(e => {
        return [];
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
    const { scores, loading } = this.state;
    return (
      <Container className="pb-5">
        <Loader display={loading} />
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
