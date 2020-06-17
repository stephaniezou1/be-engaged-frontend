import React from 'react'
import Follow from '../components/Follow.jsx'
import {connect} from 'react-redux'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'

const FollowsContainer = (props) => {

    let arrayOfFollows = props.allFollows.map((follow) => {
        return <Follow 
            key = {follow.id}
            follow = {follow}
        />
    })

    let sendText = (userId) => {
        fetch(`http://localhost:3000/users/${userId}/send_text`)
    }

    const handleClick = (evt) => {
        evt.preventDefault()
        sendText(props.userInformation.id)
    }

    return (
        <div className="following-container" >
            <h1 className="header">Following</h1>
            <p align="center"> Your selection of elections to follow </p>
            <Form className="text-form">
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check to get text notifications for election updates" onClick={handleClick}/>
            </Form.Group>
            </Form>
                <CardGroup>
                    { arrayOfFollows}
                </CardGroup>        
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        allFollows: globalState.userInformation.follows,
        userInformation: globalState.userInformation
    }
}

export default connect(mapStateToProps)(FollowsContainer)
