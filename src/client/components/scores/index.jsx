import React, { Component } from 'react';
import {
  Table,
  Container
 } from 'reactstrap';

export type Props = {};
export type State = {
  scores: array,
};

export default class Scores extends Component<Props, State> {
  render() {
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
            <tr>
              <td>2</td>
              <td>Lauchie</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
