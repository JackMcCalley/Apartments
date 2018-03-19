import React, { Component } from 'react';
import './App.css';
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Col,
  Row
} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      apartments: [],
      newApartmentSuccess: false,
      errors: null
    }
  }

  addApartment(apartment){
    this.setState({newApartmentSuccess: false})
  }

  componentWillMount(){
  fetch(`${this.state.apiUrl}/apartments`)
  .then((rawResponse) =>{
    return rawResponse.json()
  })
  .then((parsedResponse)=>{
    this.setState({apartments: parsedResponse})
  })
}

newApartmentSubmit(apartment){
  fetch(`${this.state.apiUrl}/apartments`,
    {
      body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
      headers: {  // <- We specify that we're sending JSON, and expect JSON back
        'Content-Type': 'application/json'
      },
      method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    }
  )
  .then((rawResponse)=>{
    // rawResponse.json() itself returns another promise, we we need to resolve it before continuing
    return Promise.all([rawResponse.status, rawResponse.json()])
  })
  .then((parsedResponse) =>{
    if(parsedResponse[0] === 422){ // <- Check for any server side errors
      this.setState({errors: parsedResponse[1]})
    }else{
      const apartments = Object.assign([], this.state.apartments)
      apartments.push(parsedResponse[1]) // <- Add the new apartment to our list of apartments
      this.setState({
        apartments: apartments,  // <- Update apartments in state
        errors: null, // <- Clear out any errors if they exist
        newApartmentSuccess: true
      })
    }
  })
}

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
              <Row>
                <Col xs={8}>
                  Apartments!
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                <small className='subtitle'>Add an Apartment</small>
                <span>  </span>
                <small>
                <Link to='/apartments' id='apartments-link'>Apartments List</Link>
                </small>
                </Col>
              </Row>
              </PageHeader>
              <NewApartment onSubmit={this.newApartmentSubmit.bind(this)}
              errors={this.state.errors} />
              {this.state.newApartmentSuccess &&
              <Redirect to='/apartments' />}

            </Grid>
          )} />

          <Route exact path="/apartments" render={props => (
          <Grid>
            <PageHeader>
              <Row>
                <Col xs={8}>
                  Apartments!
                  <br/>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <small>
                  <Link to='/' id='apartments-link' onClick={this.addApartment.bind(this)}>Add an Apartment</Link>

                  </small>
                  <span>  </span>
                  <small className='subtitle'>Apartments List</small>
                </Col>
              </Row>
            </PageHeader>
            <Apartments apartments={this.state.apartments} />
          </Grid>
        )} />
      </div>
    </Router>
            );
          }
        }

export default App;
