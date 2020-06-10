import React, { Component } from 'react'
import { Card, Header, Icon} from 'semantic-ui-react'
import ProfileForm from './ProfileForm.jsx'

const Profile = (props) => {

    let {name, email, line1, city, state, zip_code} = props.user
    return (
        <div>
            <Header as='h2' icon textAlign="center">
            <Icon name='users' circular />
            <Header.Content>Profile</Header.Content>
            </Header>
            <Card centered>
            <Card.Content>
                <Card.Header>Name: {name}</Card.Header>
                <Card.Meta> Email: {email} </Card.Meta>
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
