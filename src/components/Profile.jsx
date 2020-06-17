import React, { Component } from 'react'
import ProfileForm from './ProfileForm.jsx'
import Button from 'react-bootstrap/Button'


class Profile extends Component {
    
    state= {
        editProfile: false
    }

    handleToggle = (evt) => {
        evt.preventDefault()
        let {editProfile} = this.state
        console.log("I am clicked")
        this.setState({
            editProfile: !editProfile
        })
    }

    render () {


        let {name, email, line1, city, state, zip_code} = this.props.user

        return (
            <div className="profile">
                <h1 className="header">Profile</h1>
                <h4>Name: {name}</h4> <br/>
                    <h6 className="mb-2 text-muted">Email: {email}</h6><br/>
                        <h8>
                            Address: {line1}, <br/>{city} {state} {zip_code}
                        </h8>
                        <br/><br/>
                    <Button variant="primary" onClick={this.handleToggle} >Edit Profile</Button>    
                    { this.state.editProfile 
                    ? 
                    <ProfileForm />
                    :
                    null
                    }
            </div>
        )
    }
}


export default Profile
