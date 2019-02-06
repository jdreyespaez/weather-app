import React, { Component } from 'react';

import { 
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
} from 'reactstrap';

import Weather from './Weather'
import { runInThisContext } from 'vm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      cityList: [],
      newCityName: ''
    };
  }

  getCityList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      var cityList = res.map( r => r.city_name);
      this.setState({ cityList });
    });
  };

  handleInputChange = (e) => {
    this.setState({ newCityName: e.target.value });
  }

  componentDidMount () {
    this.getCityList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">MyWeather</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
          <Jumbotron>
            <h1 className="display-3">MyWeather</h1>
            <p className="lead">The current list weather from your favorite cities!</p>
          
            <InputGroup>
              <Input 
                placeholder="New city name..."
                value={this.state.newCityName}
                onChange={this.handleInputChange}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={this.handleAddCity}>Add City</Button>
              </InputGroupAddon>
            </InputGroup>

          </Jumbotron>

          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <Weather />
      </Container>
    );
  }
}

export default App;
