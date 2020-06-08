import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Profile = (props) => {

    let {name, email, line1, city, state, zip_code} = props.user
    return (
        <div>
            <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{email}</span>
                </Card.Meta>
                <Card.Description>
                    {line1, city, state, zip_code}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Edit Profile
                </a>
            </Card.Content>
            </Card>
        </div>
    )
}


export default Profile
