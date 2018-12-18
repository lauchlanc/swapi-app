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
  }

  async componentDidMount() {
    this.setState({
        loading: true,
    });

    fetch(`http://localhost:5000/api/scores/`)
      .then(response => response.json())
      .then(scores => {
        this.setState({
          scores: scores,
          loading: false,
        })
      })
      .catch(e => {
        this.setState({
          loading: false,
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
