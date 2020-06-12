import React, { Component } from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'
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
                <Icon name='user' />
                    Edit Profile
            </div>
            <div>
                {this.state.editProfile ? 
                <Form onSubmit={this.handleOnSubmit}>
                <Form.Field>
                <label htmlFor="name">Name:</label>
                <input type="text" autoComplete="off" name="name" value={this.state.user.name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="email">Email:</label>
                <input type="text" autoComplete="off" name="email" value={this.state.user.email} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="line1">Address:</label>
                <input type="line1" autoComplete="off" name="line1" value={this.state.user.line1} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="city">City:</label>
                <input type="city" autoComplete="off" name="city" value={this.state.user.city} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="state">State:</label>
                <input type="state" autoComplete="off" name="state" value={this.state.user.state} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field> 
                <label htmlFor="zip_code">Zipcode:</label>
                <input type="zip_code" autoComplete="off" name="zip_code" value={this.state.user.zip_code} onChange={this.handleChange}/>
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
    updateUserInfo: updateUserInfo
}

let mapStateToProps = (globalState) => {
    return {
        userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
