import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button,
  Alert
} from 'react-bootstrap'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'

class NewApartment extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        apt_number: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        country: '',
        name: '',
        phone: '',
        contact: ''
      }
    }
  }

    handleSubmit(){
        this.props.onSubmit(this.state.form)
    }

    handleChange(event){
        const formState = Object.assign({}, this.state.form)
        formState[event.target.name] = event.target.value
        this.setState({form: formState})
    }


    // ** This is a new function to base64 encode the file
    getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }

    // ** A custom handler for file uploads
    fileChangeHandler(event){
        const file = event.target.files[0]
        this.getBase64(file).then( (fileString) => {
          const formState = Object.assign({}, this.state.form)
          formState.avatar_base = fileString
          this.setState({form: formState})
        })
    }

    errorsFor(attribute){
        var errorString = ""
            if(this.props.errors && this.props.errors[attribute]){
                const errors = this.props.errors[attribute]
                if(errors){
                  errorString = errors.join(", ")
                }
            }
        return errorString === "" ? null : errorString
    }


  render() {
    return (
      <form>
      <Row>
        <Col xs={6}>
          {this.props.errors &&
            <Alert bsStyle="danger">
              Please check the form and try again.
            </Alert>
          }
        </Col>
      </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
            id="name-form-group"
            validationState={this.errorsFor('apt_number') && 'error'}>
              <ControlLabel id="apt_number">Apartment Number</ControlLabel>
              <FormControl
              type="number"
              name="apt_number"
              value={this.state.form.apt_number}
              onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('apt_number') &&
                <HelpBlock id="name-help-block">{this.errorsFor('apt_number')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="address">Address</ControlLabel>
              <FormControl
              type="text"
              name="address"
              value={this.state.form.address}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
              type='text'
              name="city"
              value={this.state.form.city}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="zip">Zip</ControlLabel>
              <FormControl
              type='number'
              name="zip"
              value={this.state.form.zip}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="state">State</ControlLabel>
              <FormControl
              type='text'
              name="state"
              value={this.state.form.state}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="country">Country</ControlLabel>
              <FormControl
              type='text'
              name="country"
              value={this.state.form.country}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
              type='text'
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="phone">Phone</ControlLabel>
              <FormControl
              type='text'
              name="phone"
              value={this.state.form.phone}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group">
              <ControlLabel id="contact">Contact Hours</ControlLabel>
              <FormControl
              type='text'
              name="contact"
              value={this.state.form.contact}
              onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup>
              <ControlLabel id="avatar">Image</ControlLabel>
              <input
                type="file"
                onChange={this.fileChangeHandler.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button
            id="submit"
            onClick={this.handleSubmit.bind(this)}
            >Create Apartment Listing</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default NewApartment
