import React, { Component } from 'react';
import '../css/App.css'
import AuthService from '../services/AuthService';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Col,
  Row
} from 'react-bootstrap'

class Login extends Component {
    constructor(props){
        super()
        this.Auth = new AuthService()
        this.state = {
                password: '',
                email: ''
        } /*this.state*/
    } /*constructor*/

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFormSubmit(e){
      e.preventDefault()
      this.Auth.login(this.state.name, this.state.email,this.state.password)
      .then(res =>{
        this.props.history.replace('/')
      })
      .catch(err =>{ alert("Incorrect login") })
    }

    render(){
        return (
            <Grid>
              <PageHeader>
              <Row>
              Log In!
              </Row>
              </PageHeader>

              <form onSubmit={this.handleFormSubmit.bind(this)}>
              <br/>
                <input
                  className="form-item"
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.email}
                /><br/>
                <input
                  className="form-item"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password}
                /><br/>
                <input
                  className="form-submit"
                  value="SUBMIT"
                  type="submit"
                />
              </form>
            </Grid>
        )
    } /*render*/

} /*end*/

export default Login
