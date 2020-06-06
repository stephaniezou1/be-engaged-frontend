import React, { Component } from 'react';

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
    let {name, email, password, line1, city, state, zip_code} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
        <label htmlFor="email">Email:</label>
        <input type="text" autoComplete="off" name="email" value={email} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <label htmlFor="line1">Address:</label>
        <input type="line1" autoComplete="off" name="line1" value={line1} onChange={this.handleChange}/>
        <label htmlFor="city">City:</label>
        <input type="city" autoComplete="off" name="city" value={city} onChange={this.handleChange}/>
        <label htmlFor="state">State:</label>
        <input type="state" autoComplete="off" name="state" value={state} onChange={this.handleChange}/>
        <label htmlFor="zip_code">Zipcode:</label>
        <input type="zip_code" autoComplete="off" name="zip_code" value={zip_code} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default RegisterForm;