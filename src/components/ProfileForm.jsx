import React, { Component } from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


class ProfileForm extends Component {

    state = {
        editProfile: false,
        user: {
            name: "",
            email: "",
            password: "",
            line1: "",
            city: "",
            state: "",
            zip_code: ""
        }  
    }
    
    handleToggle = () => {
        console.log("I am clicked")
        this.setState({
            editProfile: !this.state.editProfile
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(this.state.user)
            })
    }

    handleChange = (e) => {
    let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {

        let {name, email, password, line1, city, state, zip_code} = this.props.userInformation


        return (
            <div>
            <div onClick={this.handleToggle}>
                <Icon name='user' />
                    Edit Profile
            </div>
            <div>
                {this.state.editProfile ? 
                <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label htmlFor="name">Name:</label>
                <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="email">Email:</label>
                <input type="text" autoComplete="off" name="email" value={email} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="line1">Address:</label>
                <input type="line1" autoComplete="off" name="line1" value={line1} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="city">City:</label>
                <input type="city" autoComplete="off" name="city" value={city} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="state">State:</label>
                <input type="state" autoComplete="off" name="state" value={state} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="zip_code">Zipcode:</label>
                <input type="zip_code" autoComplete="off" name="zip_code" value={zip_code} onChange={this.handleChange}/>
                </Form.Field>
                <Button type="submit" value="Submit">Submit</Button>
              </Form>
                :
                null
                }
            </div>
          </div>
        )
    }
}

let mapDispatchToProps = {
}

let mapStateToProps = (globalState) => {
    return {
        userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
