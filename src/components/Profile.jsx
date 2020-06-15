import React from 'react'
import Card from 'react-bootstrap/Card'
import ProfileForm from './ProfileForm.jsx'

const Profile = (props) => {

    let {name, email, line1, city, state, zip_code} = props.user

    console.log("user props", props.user)

    return (
        <div className="profile">
            <h4>Name: {name}</h4>
                <h6 className="mb-2 text-muted">Email: {email}</h6>
                    <h8>
                        Address: {line1}, {city} {state} {zip_code}
                    </h8>
                <ProfileForm />
        </div>
    )
}


export default Profile
