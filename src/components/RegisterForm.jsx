import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RegisterForm extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    line1: "",
    city: "",
    state: "",
    zip_code: ""
  }

  handleChildSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, email, password, line1, city, state, zip_code} = this.state

    return (
      <div className="register-form">
      <Form onSubmit={this.handleChildSubmit}>
        <h1>{formName}</h1>    
        <br/>    
          <Form.Row>
            <Form.Group controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" autoComplete="off" name="email" value={email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="123 Main St" type="line1" autoComplete="off" name="line1" value={line1} onChange={this.handleChange} />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder= "Brooklyn" autoComplete="off" name="city" value={city} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control placeholder= "NY" type="state" autoComplete="off" name="state" value={state} onChange={this.handleChange} >
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="zip_code" autoComplete="off" name="zip_code" value={zip_code} onChange={this.handleChange}/>
            </Form.Group>
          </Form.Row>
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    );
  }
}


export default RegisterForm;