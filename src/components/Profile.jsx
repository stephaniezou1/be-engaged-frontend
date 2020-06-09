import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import ProfileForm from './ProfileForm.jsx'

const Profile = (props) => {

    let {name, email, line1, city, state, zip_code} = props.user
    return (
        <div>
            <Card centered>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{email}</span>
                </Card.Meta>
                <Card.Description>
                    Address: <br/>
                    {line1}, {city} {state} {zip_code}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                    <ProfileForm />
                    </a>
            </Card.Content>
            </Card>
        </div>
    )
}


export default Profile
