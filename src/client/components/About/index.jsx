import * as React from 'react';
import {
  Container,
  Jumbotron,
  Button,
} from 'reactstrap';
import './About.css';
import api from '../../api';
import { Link } from 'react-router-dom';

export type Props = {};
export type State = {
  about: string,
};

export default class About extends React.Component<Props, State> {
  state = {
    about: '',
  };

  async componentDidMount() {
    const response = await api.about();

    this.setState({
      about: response.about,
    });
  }

  render() {
    const { about } = this.state;
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="display-3">About</h1>
          <p className="lead">{about}</p>
          <hr className="my-2" />
          <p>To play the game, click "Play" below</p>
          <p className="lead">
            <Button color="primary" tag={Link} to="/play">Play</Button>
          </p>
        </Jumbotron>
      </Container>
    );
  }
}
