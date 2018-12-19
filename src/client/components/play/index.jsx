import * as React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Alert,
  Button,
} from 'reactstrap';
import swapi from '../../swapi';
import Loader from '../loader';

export type Props = {};
export type State = {
  person: Person,
  guessCorrect: number,
  guess: string,
  loading: boolean,
};

export default class Play extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      person: {},
      guessCorrect: -1,
      guess: "",
      loading: false,
    };

    this.checkGuess = this.checkGuess.bind(this);
    this.getAlert = this.getAlert.bind(this);
    this.getNextPerson = this.getNextPerson.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  async componentDidMount() {
    this.getNextPerson()
  }

  async getNextPerson() {
    this.setState({
      loading: true,
    })
    const response = await swapi.getGamePerson();

    this.setState({
      person: response,
      loading: false,
    });
  }

  checkGuess(e) {
    const correct = e.target.value.toLowerCase() === this.state.person.name.toLowerCase();
    this.setState({
      guessCorrect: (correct) ? 1 : 0,
      guess: e.target.value,
    });
    if(correct){
      fetch(`/api/scores/${this.state.person.name}`,
        {
          method: "PUT",
        })
    }
  }

  getAlert() {
    const alertColor = this.state.guessCorrect === 1 ? "success" : "warning";
    const alertMessage = this.state.guessCorrect === 1 ? "You've got it right!" : "That's not quite right...";
    return(
      <Alert color={alertColor}>
        {alertMessage}
      </Alert>
    )
  }

  resetGame() {
    this.getNextPerson();
    this.setState({
        guessCorrect: -1,
        guess: ''
    });
  }

  render() {
    const { person, loading } = this.state;
    return (
      <Container fluid>
        <Loader display={loading} />
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h2>Let's play a guessing game</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }} className="mb-5">
            <Card inverse className="bg-dark">
              <CardBody>
                <CardTitle>Guess Who</CardTitle>
                <CardText>
                  { person.species ? `I am a ${person.species}. ` : '' }
                  { person.homeworld ? `My homeworld is ${person.homeworld}. ` : '' }
                  { person.eye_colour ? `My eyes are ${person.eye_colour}. ` : '' }
                  { person.hair_color ? `My hair is ${person.hair_color}. ` : '' }
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md={{ size: 8, offset: 2 }} className="mb-5">
            <Card inverse className="bg-dark">
              <CardBody>
                <CardTitle>You Must Be</CardTitle>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        name="personName"
                        id="personName"
                        placeholder="Character name"
                        value={this.state.guess}
                        disabled={this.state.guessCorrect === 1}
                        onChange={this.checkGuess}
                      />
                    </FormGroup>
                    {
                      this.state.guessCorrect > -1 ? this.getAlert() : ''
                    }
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Button color="warning" onClick={this.resetGame}>Reset</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
