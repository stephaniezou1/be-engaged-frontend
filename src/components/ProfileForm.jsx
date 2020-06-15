import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions/users';

class ProfileForm extends Component {

    state = {
        editProfile: false,
        user: {
            name: "",
            email: "",
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

    handleUpdate = (userId, userInfo) => {
        // evt.preventDefault()
        // let userId = this.props.userInformation.id 
        // let userInfo = this.state.user
        fetch(`http://localhost:3000/users/${userId}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(r => {
          this.props.updateUserInfo(r)
        //   this.props.history.push("/profile")
            console.log("UPDATED HERE", r)
        })
    }

    handleOnSubmit = (evt) => {
        evt.preventDefault()
        this.handleUpdate(this.props.userInformation.id, this.state.user)
    }

    handleChange = (e) => {
        console.log("HERE", this.state)
        let {name, value} = e.target
            this.setState({
                user: {
                    [name]: value
                }
            })
        console.log("updated", this.state)
    }

    render() {

        let {name, email, line1, city, state, zip_code} = this.props.userInformation

        return (
            <div>
            <div onClick={this.handleToggle}>
                <Button variant="primary">Edit Profile</Button>    
            </div>
            <div>
            {this.state.editProfile ? 
                <Form onSubmit={this.handleOnSubmit}>
                    <h1> Edit Profile Info </h1>        
                    <Form.Row>
                        <Form.Group controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" autoComplete="off" name="email" value={email} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="123 Main St" type="line1" autoComplete="off" name="line1" value={line1} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Row>
                        
                        <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control autoComplete="off" name="city" value={city} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder= "New York" type="state" autoComplete="off" name="state" value={state} onChange={this.handleChange} >
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="zip_code" autoComplete="off" name="zip_code" value={zip_code} onChange={this.handleChange}/>
                        </Form.Group>

                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
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
    updateUserInfo: updateUserInfo
}

let mapStateToProps = (globalState) => {
    return {
        userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
