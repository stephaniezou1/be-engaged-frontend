import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = (e) => {
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
    let {email, password} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        
        <h1>{formName}</h1>
        <Form.Field>
        <label htmlFor="email">Email:</label>
        <input type="text" autoComplete="off" name="email" value={email} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit" value="Submit"> Log In</Button>

      </Form>
    );
  }

}

export default LoginForm;