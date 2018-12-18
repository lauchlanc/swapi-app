import * as React from 'react';
import {
  Container,
  Jumbotron,
  Button,
} from 'reactstrap';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => (
  <Container fluid>
    <Jumbotron>
      <h1 className="display-3">About</h1>
      <p className="lead">This is a sample app that uses the Star Wars API (SWAPI), with React to play a simple guessing game!</p>
      <hr className="my-2" />
      <p>To play the game, click Play below</p>
      <p className="lead">
        <Button color="primary" tag={Link} to="/play">Play</Button>
      </p>
    </Jumbotron>
  </Container>
);

export default About;
