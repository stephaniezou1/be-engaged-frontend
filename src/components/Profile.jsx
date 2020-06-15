import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import ProfileForm from './ProfileForm.jsx'

const Profile = (props) => {

    let {name, email, line1, city, state, zip_code} = props.user

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                    <Card.Text>
                        Address: {line1}, {city} {state} {zip_code}
                    </Card.Text>
                    <div>
                    <ProfileForm />
                    </div>                
                </Card.Body>
            </Card>
        </div>
    )
}


export default Profile
